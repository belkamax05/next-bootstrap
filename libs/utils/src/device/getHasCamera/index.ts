import hasCameraHolder from '../hasCameraHolder';

const getHasCamera = () => {
  // Test if browser supports camera function
  const el = document.createElement('input');
  const supported = 'capture' in el;
  if (!supported) {
    hasCameraHolder.setValue(false);
  }
  return hasCameraHolder.getValue();
};

export default getHasCamera;
