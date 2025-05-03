import { ReactNode } from "react";
import { Link, NavLink } from "react-router";
import { Footer } from "./Footer";
import { SearchBar } from "./SearchBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="min-h-screen bg-primary">
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 space-x-10">
            <div className="flex items-center">
              <Link to="/" className="text-xl text-gray-800">
                Woohoo <span className="text-secondary font-bold">IN</span>
              </Link>
            </div>
            <div className="flex items-center flex-1/2">
              <SearchBar placeholder="Search for a gift card" />
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
              <NavLink
                to="/pre-checkout"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-700"
                    : isActive
                    ? "text-secondary font-bold"
                    : "text-gray-700"
                }
              >
                Pre-Checkout
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
