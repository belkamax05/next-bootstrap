import { OptionsType } from 'cookies-next';

/**
 * Extends cookies-next OptionsType to include expires as a number or Date
 */
export interface CookieOptions extends Omit<OptionsType, 'expires'> {
  /** number - hours for cookie to expire, Date - exact time when cookie expires */
  expires?: number | Date;
}
