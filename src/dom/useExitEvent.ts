import React from 'react';

const useExitEvent = (cb: (e: React.SyntheticEvent) => void) => ({
  onBlur: cb,
  onMouseOut: cb,
});

export default useExitEvent;
