import axiosConfig from '@/utils/constants/config/axiosConfig';
import axiosModule from 'axios';

/**
 * Axios instance used in app
 */
const axios = axiosModule.create(axiosConfig);

export default axios;
