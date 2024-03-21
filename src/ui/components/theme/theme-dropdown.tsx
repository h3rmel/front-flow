import { Button } from "@/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/components/ui/dropdown-menu";
import { useTheme } from "@/ui/components/theme/theme-provider";
import { useLanguage } from "@/ui/components/language/language-provider";
import { NAVBAR_LANGUAGES } from "@/_languages";
import { Moon, Sun } from "@phosphor-icons/react";

export function ThemeDropdown() {
  const { setTheme } = useTheme();
  const { translate } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">
            {translate("toggle-theme", NAVBAR_LANGUAGES)}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {translate("theme-light", NAVBAR_LANGUAGES)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {translate("theme-dark", NAVBAR_LANGUAGES)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {translate("theme-system", NAVBAR_LANGUAGES)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
