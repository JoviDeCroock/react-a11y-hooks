import React from 'react';

const useTitle = (title: string) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useTitle;
