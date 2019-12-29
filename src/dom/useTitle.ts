import React from 'react';

const useTitle = (title: string): void => {
  React.useEffect(() => {
    // TODO: maybe we should check if there actually is a title tag in head and append if needed.
    document.title = title;
  }, [title]);
}

export default useTitle;
