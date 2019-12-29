import React from 'react';

const useLanguage = (language: string): void => {
  React.useEffect(() => {
    const htmlElement = document.getElementsByTagName('html');
    if (htmlElement[0]) {
      htmlElement[0].setAttribute('lang', language);
    }
  }, [language]);
}

export default useLanguage;
