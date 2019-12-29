type AccessibleImageReturn = {
  'alt': string;
};

const useAccessibleImage = (description: string): AccessibleImageReturn  => {
  if (
    process.env.NODE_ENV !== 'production' &&
    (
      description.includes('image') ||
      description.includes('picture') ||
      description.includes('photo')
    )
  ) {
    console.warn('Alt text includes "image", "picture" or "photo". These words are already announced by the screenreader.');
  }
  return {
    alt: description,
  }
};

export default useAccessibleImage;
