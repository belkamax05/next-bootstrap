import { getXComreg } from '@/utils/helpers/xcomreg/xcomreg';
import { Breakpoint } from '@mui/material';
import { QueryClient } from '@tanstack/react-query';

const getMenuBreakpoint = (queryClient: QueryClient) => {
  const { value: amplienceMeganavEnabled } = getXComreg('AMPLIENCE_MEGANAV_ENABLED', queryClient);
  return (amplienceMeganavEnabled ? 'lg' : 'desktop') as Breakpoint;
};

export default getMenuBreakpoint;
