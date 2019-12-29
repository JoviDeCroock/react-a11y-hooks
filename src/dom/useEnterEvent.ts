import React from 'react';

const useEnterEvent = (cb: (e: React.SyntheticEvent) => void) => ({
  onFocus: cb,
  onMouseOver: cb,
});

export default useEnterEvent;
