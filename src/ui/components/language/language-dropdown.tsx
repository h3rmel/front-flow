import { Button } from "@/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/components/ui/dropdown-menu";
import { useLanguage } from "@/ui/components/language/language-provider";
import { NAVBAR_LANGUAGES } from "@/_languages";

export function LanguageDropdown() {
  const { language, setLanguage, translate } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setLanguage("pt-BR")}>
          {translate("portuguese", NAVBAR_LANGUAGES)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en-US")}>
          {translate("english", NAVBAR_LANGUAGES)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
