import envConstsTest from '@/utils/test-utils/mocks/envConstsTest';
import checkAllowServerClient, { ServerClientAllow } from '.';

describe('checkAllowServerClient', () => {
  it('should return true if allow is true', () => {
    const allow: ServerClientAllow = true;
    expect(checkAllowServerClient(allow)).toBe(true);
  });

  it('should return true if allow is "client" and IS_CLIENT is true', () => {
    const allow: ServerClientAllow = 'client';
    envConstsTest.setIsClient(true);
    expect(checkAllowServerClient(allow)).toBe(true);
  });

  it('should return false if allow is "client" and IS_CLIENT is false', () => {
    const allow: ServerClientAllow = 'client';
    envConstsTest.setIsClient(false);
    expect(checkAllowServerClient(allow)).toBe(false);
  });

  it('should return true if allow is "server" and IS_CLIENT is false', () => {
    const allow: ServerClientAllow = 'server';
    envConstsTest.setIsClient(false);
    expect(checkAllowServerClient(allow)).toBe(true);
  });

  it('should return false if allow is "server" and IS_CLIENT is true', () => {
    const allow: ServerClientAllow = 'server';
    envConstsTest.setIsClient(true);
    expect(checkAllowServerClient(allow)).toBe(false);
  });

  it('should return false if allow is false', () => {
    const allow: ServerClientAllow = false;
    expect(checkAllowServerClient(allow)).toBe(false);
  });
});
