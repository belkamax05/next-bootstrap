export interface cameraAccessFunctions {
  permitted: () => void;
  denied: () => void;
}

const requestCameraAccess = (functions: cameraAccessFunctions) => {
  const constraints = { audio: false, video: true };
  navigator.mediaDevices
    ?.getUserMedia(constraints)
    .then(() => {
      functions.permitted();
    })
    .catch(() => {
      functions.denied();
    });
};

export default requestCameraAccess;
