import { EspotName, EspotType } from '@/types';
import { NO_CONTENT_DATA_REGEX } from '@/utils/constants/app/regex';

/**
 * Checks if the content is valid for rendering (can be string with value 'No Data' or null - these cases are invalid)
 * @param content object extending AnyObject, or string, or anything invalid
 * @returns true if content is exist within object, false otherwise
 */
const checkEspotContentValid = (content: string | EspotType<EspotName>) => {
  if (!content) return false;
  if (typeof content === 'string' && NO_CONTENT_DATA_REGEX.test(content)) return false;
  return true;
};

export default checkEspotContentValid;
