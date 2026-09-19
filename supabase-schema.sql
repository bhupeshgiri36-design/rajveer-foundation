-- Rajveer Foundation Supabase Database Schema

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Profiles (for Admins & Roles)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  email text unique not null,
  role text default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Stories
create table stories (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  content text not null,
  cover_image text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Album
create table album (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  image_url text not null,
  category text,
  caption text,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Initiatives
create table initiatives (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  description text not null,
  category text not null,
  location text,
  event_date date,
  cover_image text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Help Requests
create table help_requests (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  phone text not null,
  email text,
  location text not null,
  category text not null,
  description text not null,
  urgency text not null,
  attachment_url text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Volunteers
create table volunteers (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  phone text not null,
  email text not null,
  location text not null,
  skills text,
  availability text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. Donations
create table donations (
  id uuid default uuid_generate_v4() primary key,
  donor_name text not null,
  email text,
  phone text,
  amount numeric not null,
  purpose text,
  payment_id text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 8. Contact Messages
create table contact_messages (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  status text default 'unread',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 9. Impact Stats (Single row table)
create table impact_stats (
  id uuid default uuid_generate_v4() primary key,
  families_supported text default '0',
  education_helped text default '0',
  people_reached text default '0',
  lives_touched text default '0',
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert initial dummy stats
insert into impact_stats (families_supported, education_helped, people_reached, lives_touched)
values ('50+', '25+', '100+', 'Many More');


-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Enable RLS on all tables
alter table profiles enable row level security;
alter table stories enable row level security;
alter table album enable row level security;
alter table initiatives enable row level security;
alter table help_requests enable row level security;
alter table volunteers enable row level security;
alter table donations enable row level security;
alter table contact_messages enable row level security;
alter table impact_stats enable row level security;

-- Create Admin Check Function
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer;

-- Profiles: Admins can read all, Users can read own
create policy "Admins can view all profiles" on profiles for select using (is_admin());
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);

-- Stories: Public can read published, Admins can do all
create policy "Public can view published stories" on stories for select using (published = true);
create policy "Admins can manage stories" on stories for all using (is_admin());

-- Album: Public can read, Admins can do all
create policy "Public can view album" on album for select using (true);
create policy "Admins can manage album" on album for all using (is_admin());

-- Initiatives: Public can read published, Admins can do all
create policy "Public can view published initiatives" on initiatives for select using (published = true);
create policy "Admins can manage initiatives" on initiatives for all using (is_admin());

-- Help Requests: Public can insert, Admins can do all
create policy "Public can insert help requests" on help_requests for insert with check (true);
create policy "Admins can manage help requests" on help_requests for all using (is_admin());

-- Volunteers: Public can insert, Admins can do all
create policy "Public can insert volunteers" on volunteers for insert with check (true);
create policy "Admins can manage volunteers" on volunteers for all using (is_admin());

-- Contact Messages: Public can insert, Admins can do all
create policy "Public can insert contact messages" on contact_messages for insert with check (true);
create policy "Admins can manage contact messages" on contact_messages for all using (is_admin());

-- Impact Stats: Public can read, Admins can update
create policy "Public can view impact stats" on impact_stats for select using (true);
create policy "Admins can update impact stats" on impact_stats for update using (is_admin());


-- ==========================================
-- STORAGE POLICIES (Note: Run in Storage SQL editor)
-- ==========================================
-- Bucket: rajveer-album (Public read, Admin write)
-- Bucket: foundation-images (Public read, Admin write)
-- Bucket: help-documents (Admin read, Authenticated insert)
