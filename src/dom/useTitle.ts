import React from 'react';

const useTitle = (title: string): void => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = title;
    }
  }, [title]);
};

export default useTitle;
