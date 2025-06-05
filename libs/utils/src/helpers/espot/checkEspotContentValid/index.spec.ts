import { EspotName, EspotType } from '@/types';
import checkEspotContentValid from '.';

describe('checkEspotContentValid', () => {
  it('should return false for null content', () => {
    expect(checkEspotContentValid(null)).toBe(false);
  });

  it('should return false for undefined content', () => {
    expect(checkEspotContentValid(undefined)).toBe(false);
  });

  it('should return false for string matching NO_CONTENT_DATA_REGEX', () => {
    expect(checkEspotContentValid('No Data')).toBe(false);
  });

  it('should return true for valid string content', () => {
    expect(checkEspotContentValid('Valid Content')).toBe(true);
  });

  it('should return true for valid EspotType content', () => {
    const validEspotContent: EspotType<EspotName> = {
      name: 'exampleEspot',
      type: 'exampleType',
    };
    expect(checkEspotContentValid(validEspotContent)).toBe(true);
  });
});
