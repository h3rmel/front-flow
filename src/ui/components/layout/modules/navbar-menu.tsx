'use client';

// #region Imports

import Link from 'next/link';

import { useLanguage } from '@/ui/components/language/language-provider';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/ui/components/ui/navigation-menu';

import { toolsNavigation } from '@/_data/tools';
import { NAVBAR_LANGUAGES, TOOLS_LANGUAGES } from '@/_languages';

// #endregion

/**
 * Function representing the NavbarMenu component.
 *
 * @return {JSX.Element} The rendered JSX element.
 */
export function NavbarMenu(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Components */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{translate('tools', NAVBAR_LANGUAGES)}</NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {toolsNavigation.map((toolLink: ITool, index) => (
              <NavigationMenuLink key={index} asChild>
                <Link
                  href={toolLink.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent dark:hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent dark:focus:bg-accent/50 focus:text-accent-foreground"
                >
                  <h6 className="text-sm font-medium leading-none">{translate(toolLink.title, TOOLS_LANGUAGES)}</h6>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {translate(toolLink.description, TOOLS_LANGUAGES)}
                  </p>
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
