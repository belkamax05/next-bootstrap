export const NODE_ENV = process.env.NODE_ENV;

export const ENV_DEV = NODE_ENV === 'development';
export const ENV_TEST = NODE_ENV === 'test';
export const ENV_PROD = NODE_ENV === 'production';

/**
 * Check if the code is running on the client (browser have window object)
 */
export const IS_CLIENT = typeof window !== 'undefined';

/**
 * Variable created in next.config by parsing "server" configuration
 * 'local' - server API pointing to localhost
 * 'remote' - server API pointing to remote server
 */
const SERVER_CONFIG_MODE = process.env.SERVER_CONFIG_MODE as 'local' | 'remote';
/**
 * This variable serves "on/off" feature toggle to keep local development overrides in one place.
 * when SERVER_CONFIG_MODE is 'local' (have config.server containing 'localhost') and runs on devServer, it is preferred to mock data.
 * When SERVER_CONFIG_MODE is 'remote' (have config.server not having 'localhost') and runs on devServer, it is preferred to consume API data.
 * For builds, it is always sets as false, to prevent cases, where server uses local overrides
 * If you want to test locally compiled code, set temporary to true
 */
export const IS_DEV_OVERRIDES = ENV_DEV && SERVER_CONFIG_MODE === 'local';
