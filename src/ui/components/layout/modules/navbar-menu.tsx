// #region Imports

import { Link } from "react-router-dom";

import { toolsNavigation } from "@/data/tools";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/ui/components/ui/navigation-menu";

// #endregion

export function NavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Components */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ferramentas</NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {toolsNavigation.map((toolLink: ITool, index) => (
              <NavigationMenuLink key={index} asChild>
                <ListMenuItem toolLink={toolLink} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* About */}
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListMenuItemProps {
  toolLink: ITool;
}

export function ListMenuItem({ toolLink }: ListMenuItemProps) {
  return (
    <Link
      to={toolLink.href}
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <h6 className="text-sm font-medium leading-none">{toolLink.title}</h6>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {toolLink.description}
      </p>
    </Link>
  );
}
