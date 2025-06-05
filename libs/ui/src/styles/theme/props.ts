import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuProps } from '@mui/material';

interface AnchorProps {
  anchorOrigin: {
    vertical: number;
    horizontal: 'number' | 'left' | 'center' | 'right';
  };
}

const menuProps: Partial<MenuProps> & AnchorProps = {
  anchorOrigin: {
    vertical: 40,
    horizontal: 'left',
  },
};

const themeProps = {
  MuiButton: {
    disableElevation: false,
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiSelect: {
    autoWidth: false,
    IconComponent: KeyboardArrowDownIcon,
    MenuProps: menuProps,
  },
};

export default themeProps;
