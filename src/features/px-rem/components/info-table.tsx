// #region Imports

import { Copy } from '@phosphor-icons/react';

import { PX_REM_LANGUAGES } from '@/_languages';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Button } from '@/ui/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/ui/components/ui/table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/components/ui/tooltip';

// #endregion

interface InfoTableProps {
  tableContent: {
    px: string;
    rem: string;
    tailwind: string;
  }[];
}

export function InfoTable({ tableContent }: InfoTableProps) {
  const { translate } = useLanguage();

  function copyTailwindClass(value: string) {
    navigator.clipboard.writeText(value);
  }

  return (
    <Table className="w-auto border">
      <TableCaption>{translate('conversion_table', PX_REM_LANGUAGES)}</TableCaption>
      <TableHeader>
        <TableRow className="rounded-2xl">
          <TableHead>Pixels</TableHead>
          <TableHead>REM</TableHead>
          <TableHead>{translate('tailwind_class', PX_REM_LANGUAGES)}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableContent.map(({ px, rem, tailwind }, index) => (
          <TableRow key={index}>
            <TableCell>{px}</TableCell>
            <TableCell>{rem}</TableCell>
            <TableCell className="w-full inline-flex items-center justify-between gap-2">
              {tailwind}
              <Tooltip>
                <TooltipTrigger>
                  <Button size="icon-sm" className="rounded-[8px]" onClick={() => copyTailwindClass(tailwind)}>
                    <Copy size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{translate('copy_tailwind_class', PX_REM_LANGUAGES)}</TooltipContent>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
