let hasCamera = false;

const hasCameraHolder = {
  getValue: () => hasCamera,
  setValue: (value: boolean) => {
    hasCamera = value;
  },
};

export default hasCameraHolder;
