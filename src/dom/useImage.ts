type AccessibleImageReturn = {
  'alt': string;
};

const useAccessibleImage = (description: string): AccessibleImageReturn  => ({
  alt: description,
});

export default useAccessibleImage;
