// #region Imports

import { Link } from 'react-router-dom';

import { LanguageDropdown } from '../../language/language-dropdown';
import { ThemeToggle } from '../../theme/theme-toggle';
import { NavbarMenu } from './navbar-menu';

// #endregion

/**
 * Renders the navigation bar component with logo, navigation menu, and options.
 *
 * @return {JSX.Element} The navigation bar component
 */
export function Navbar(): JSX.Element {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full p-4 border-b bg-background text-foreground">
      <section className="relative container flex items-center justify-center">
        {/* Logo */}
        <Link to="/" className="absolute left-4">
          <h1 className="text-3xl font-sora font-medium tracking-widest duration-300 hover:text-kamome-green-500">
            Atelier
          </h1>
        </Link>
        {/* Navigation Menu */}
        <NavbarMenu />
        {/* Options */}
        <div className="absolute right-4 flex items-center gap-4">
          <LanguageDropdown />
          <ThemeToggle />
        </div>
      </section>
    </nav>
  );
}
