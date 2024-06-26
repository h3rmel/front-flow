import { PADDING_OPTIONS } from '../_data/px-rem';
import { MARGIN_OPTIONS } from '../_data/px-rem';

export function mapSelectOption(selectOption: PxRemSelectOption) {
  const paddingOption = PADDING_OPTIONS.find((option) => option.key === selectOption);

  if (paddingOption) {
    return paddingOption.value;
  }

  const marginOption = MARGIN_OPTIONS.find((option) => option.key === selectOption);

  if (marginOption) {
    return marginOption.value;
  }

  return 'gap';
}
