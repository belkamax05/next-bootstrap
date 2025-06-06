'use client';
import PasswordField from '@/component-library/components/formUI/PasswordField';
import TextInputField from '@/component-library/components/formUI/TextInputField';
import { StyledThemeFunction } from '@/types';
import { TEXT_INPUT_FONT_SIZE } from '@/utils/constants/styles/constants';
import { styled } from '@mui/material/styles';
import { CSSProperties } from '@mui/styles';

const name = 'GobalStyled';

export const copySmall: CSSProperties = {
  fontSize: 12,
  lineHeight: '20px',
};

export const copyExtraSmall: CSSProperties = {
  fontSize: 10,
  lineHeight: '15px',
};

export const copyLarge: CSSProperties = {
  fontSize: 16,
  lineHeight: '25px',
};

export const upperFirst: CSSProperties = {
  textTransform: 'lowercase',
  '&::first-letter': {
    textTransform: 'uppercase',
  },
};

export const inputFont: StyledThemeFunction = ({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: TEXT_INPUT_FONT_SIZE,
    color: theme.palette.copy.main,
  },
});

export const colourPrimary: StyledThemeFunction = ({ theme }) => ({
  color: theme.palette.primary.main,
});

export const StyledTextInputField = styled(TextInputField, {
  name,
  slot: 'textInputField',
})(inputFont);

export const StyledPasswordField = styled(PasswordField, {
  name,
  slot: 'passwordField',
})(inputFont);
