import * as constants from './constants';

describe('should correctly import constants', () => {
  it('should have correct constants', () => {
    expect(constants).toMatchInlineSnapshot(`
      Object {
        "DESKTOP_BREAKPOINT_WIDTH": 1200,
        "HEADER_RIBBON_HEIGHT": 45,
        "LG_BOTTOM_NAV_ROW_HEIGHT": 45,
        "LG_MID_NAV_ROW_HEIGHT": 94,
        "LG_TOP_NAV_ROW_HEIGHT": 45,
        "MAX_CONTAINER_WIDTH": "1366px",
        "MOBILE_BREAKPOINT_WIDTH": 767,
        "REG_NAV_FONT_SIZE": 14,
        "SEARCH_UI_BORDER_RADIUS": 20,
        "SM_NAV_FONT_SIZE": 12,
        "TABLET_BREAKPOINT_WIDTH": 992,
        "TEXT_INPUT_FONT_SIZE": 16,
        "TOP_NAV_FONT_SIZE": 12,
        "__esModule": true,
      }
    `);
  });
});
