import { useXComreg } from '@/utils/helpers/xcomreg/xcomreg';
import { Breakpoint } from '@mui/material';

const useMenuBreakpoint = () => {
  const { value: amplienceMeganavEnabled } = useXComreg('AMPLIENCE_MEGANAV_ENABLED');

  return (amplienceMeganavEnabled ? 'lg' : 'desktop') as Breakpoint;
};

export default useMenuBreakpoint;
