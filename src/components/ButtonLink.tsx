import { Link } from "react-router-dom";

interface ButtonLinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export function ButtonLink({ children, to, className = "" }: ButtonLinkProps) {
  return (
    <Link 
      to={to} 
      className={`bg-white border border-secondary text-secondary px-12 py-2 rounded-full ${className}`}
    >
      {children}
    </Link>
  );
}
