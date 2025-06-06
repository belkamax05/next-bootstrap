import { Theme } from '@mui/material';
import muiAccordion from './muiAccordion';
import muiButton from './muiButton';
import muiCheckbox from './muiCheckbox';
import muiCssBaseline from './muiCssBaseline';
import muiDrawer from './muiDrawer';
import muiFormInput from './muiFormInput';
import muiIconButton from './muiIconButton';
import muiRadios from './muiRadios';
import muiSelect from './muiSelect';
import muiSwitch from './muiSwitch';

const getOverrides = (theme: Theme) =>
  Object.assign(
    {},
    muiCssBaseline(theme),
    muiFormInput(theme),
    muiSelect(theme),
    muiButton(theme),
    muiIconButton(theme),
    muiSwitch(theme),
    muiAccordion(theme),
    muiRadios(theme),
    muiCheckbox(theme),
    muiDrawer(theme),
  );

export default getOverrides;
