export function Logo({ className = "", isDark = false }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M50 85C50 85 20 60 20 35C20 20 35 15 45 25C50 30 50 30 50 30C50 30 50 30 55 25C65 15 80 20 80 35C80 60 50 85 50 85Z" 
        fill={isDark ? "white" : "#F97316"} 
      />
      <path 
        d="M25 45C35 60 50 75 50 75C50 75 65 60 75 45" 
        stroke={isDark ? "#0B2A4A" : "white"} 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M35 35C40 45 50 55 50 55" 
        stroke={isDark ? "#0B2A4A" : "white"} 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  )
}
