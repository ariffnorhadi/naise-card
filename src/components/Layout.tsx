import { ReactNode } from "react";
import { Link, NavLink } from "react-router";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="min-h-screen bg-primary">
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Woohoo <span className="text-secondary">🎉</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-700"
                    : isActive
                    ? "text-secondary font-bold"
                    : "text-gray-700"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/gift-cards"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-700"
                    : isActive
                    ? "text-secondary font-bold"
                    : "text-gray-700"
                }
              >
                Gift Cards
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
