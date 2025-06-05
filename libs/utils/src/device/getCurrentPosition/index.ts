/**
 * Promise wrapper over navigator.geolocation.getCurrentPosition
 * @param options {PositionOptions} getCurrentPosition options param
 * @returns {Pick<GeolocationCoordinates, 'latitude' | 'longitude'>} { latitude, longitude }
 */
const getCurrentPosition = (options?: PositionOptions) => {
  if (navigator?.geolocation?.getCurrentPosition) {
    return new Promise<Pick<GeolocationCoordinates, 'latitude' | 'longitude'>>(
      (resolve, reject: PositionErrorCallback) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            return resolve({ latitude, longitude });
          },
          reject,
          options,
        );
      },
    );
  }
  return null;
};

export default getCurrentPosition;
