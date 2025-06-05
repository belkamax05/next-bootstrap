import * as api from './api';
import commonStoretextNamespaces from './commonStoretextNamespaces';
import * as constants from './constants';
import * as debug from './debug';
import * as env from './env';
import * as regex from './regex';

describe('should correctly import constants', () => {
  it('should have correct api', () => {
    expect(api).toMatchSnapshot();
  });

  it('should have correct contstants', () => {
    expect(constants).toMatchSnapshot();
  });

  it('should have correct env', () => {
    expect(env).toMatchSnapshot();
  });

  it('should have correct regex', () => {
    expect(regex).toMatchSnapshot();
  });

  it('should have correct debug', () => {
    expect(debug).toMatchSnapshot();
  });

  it('should have correct commonStoretextNamespaces values', () => {
    expect(commonStoretextNamespaces).toMatchSnapshot();
  });
});
