'use client';

// #region Import(s)

import { Copy } from '@phosphor-icons/react';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Button } from '@/ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/ui/components/ui/dropdown-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/ui/components/ui/table';

import { PX_REM_LANGUAGES } from '../_languages/px-rem.lng';
import { mapSelectOption } from '../_utils/mapSelectOption';

// #endregion

interface InfoTableProps {
  tableContent: {
    px: string;
    rem: string;
    tailwind: string;
  }[];
  selectOption: PxRemSelectOption;
}

/**
 * Renders an info table with the given table content.
 *
 * @param {InfoTableProps} tableContent - the content for the info table
 * @return {JSX.Element} the rendered info table
 */
export function InfoTable({ tableContent, selectOption = 'gap' }: InfoTableProps): JSX.Element {
  const { translate } = useLanguage();

  /**
   * Copies the given string to the clipboard using the navigator API.
   *
   * @param {string} value - the string to be copied to the clipboard
   * @return {void}
   */
  function copySpacingValue(value: string): void {
    navigator.clipboard.writeText(value);
  }

  return (
    <Table className="w-auto">
      {/* Caption */}
      <TableCaption>{translate('conversion_table', PX_REM_LANGUAGES)}</TableCaption>
      {/* Table Head */}
      <TableHeader>
        <TableRow className="rounded-2xl">
          <TableHead>Pixels</TableHead>
          <TableHead>REM</TableHead>
          <TableHead>{translate('tailwind_class', PX_REM_LANGUAGES)}</TableHead>
        </TableRow>
      </TableHeader>
      {/* Table Body */}
      <TableBody>
        {tableContent.map(({ px, rem, tailwind }, index) => (
          <TableRow key={index}>
            <TableCell>
              <kbd>{px}</kbd>
            </TableCell>
            <TableCell>
              <kbd>{rem}</kbd>
            </TableCell>
            <TableCell className="w-full inline-flex items-center justify-between gap-2">
              <kbd>
                {selectOption}-{tailwind}
              </kbd>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Copy size={22} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => copySpacingValue(`${mapSelectOption(selectOption)}: ${px};`)}>
                    {translate('copy_px', PX_REM_LANGUAGES)}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => copySpacingValue(`${mapSelectOption(selectOption)}: ${rem};`)}>
                    {translate('copy_rem', PX_REM_LANGUAGES)}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => copySpacingValue(`${selectOption}-${tailwind}`)}>
                    {translate('copy_tailwind', PX_REM_LANGUAGES)}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
