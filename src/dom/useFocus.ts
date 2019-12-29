import React from 'react';

const useFocus = () => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    // @ts-ignore
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return inputRef;
}

export default useFocus;
