import { PX_REM_CONVERSION } from '@/_data/px-rem';

export { CardForm } from './components/card-form';
export { InfoTable } from './components/info-table';

export const FIRST_HALF = PX_REM_CONVERSION.slice(0, PX_REM_CONVERSION.length / 2);
export const SECOND_HALF = PX_REM_CONVERSION.slice(PX_REM_CONVERSION.length / 2, PX_REM_CONVERSION.length);
