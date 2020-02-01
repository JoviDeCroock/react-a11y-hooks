import React from 'react';

const useLanguage = (lang: string): { lang: string } => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const htmlElement = document.getElementsByTagName('html');
      if (htmlElement[0]) {
        htmlElement[0].setAttribute('lang', lang);
      }
    }
  }, [lang]);
  return { lang };
};

export default useLanguage;
