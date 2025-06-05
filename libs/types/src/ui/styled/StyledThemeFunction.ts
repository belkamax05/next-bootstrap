import { CSSProperties } from '@mui/styles';
import { AnyObject } from '../../utils';
import { StyledThemeProps } from './StyledThemeProps';

export type StyledThemeFunction<TProps extends AnyObject = object> = ({
  theme,
  ...props
}: StyledThemeProps & TProps) => CSSProperties;
