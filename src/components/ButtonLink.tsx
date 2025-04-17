import { Link } from "react-router-dom";

export function ButtonLink({ children, to }: { children: React.ReactNode; to: string }) {
  return (
    <Link to={to} className="bg-white border border-secondary text-secondary px-12 py-2 rounded-full">
      {children}
    </Link>
  );
}
