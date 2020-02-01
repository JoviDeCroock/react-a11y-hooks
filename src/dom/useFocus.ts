import React from 'react';

const useFocus = () => {
  const inputRef = React.useRef<HTMLElement>();
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return inputRef;
};

export default useFocus;
