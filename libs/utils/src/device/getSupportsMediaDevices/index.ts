import { IS_CLIENT } from '@/utils/constants/app/env';
import hasCameraHolder from '../hasCameraHolder';

const getSupportsMediaDevices = () => {
  if (!IS_CLIENT) {
    return false;
  }
  if (!window?.navigator.mediaDevices || !window?.navigator.mediaDevices.enumerateDevices) {
    // browser does not support the API
    return false;
  } else {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        hasCameraHolder.setValue(false);
        devices.forEach((device) => {
          if (device.kind === 'videoinput') {
            hasCameraHolder.setValue(true);
            return;
          }
        });
      })
      .catch(function (err) {
        console.log(err.name + ': ' + err.message);
      });
  }

  return true;
};

export default getSupportsMediaDevices;
