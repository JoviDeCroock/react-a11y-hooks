import React from 'react';

interface Output {
  onBlur: (e: React.SyntheticEvent) => void;
  onMouseOut: (e: React.SyntheticEvent) => void;
}

const useExitEvent = (cb: (e: React.SyntheticEvent) => void): Output => ({
  onBlur: cb,
  onMouseOut: cb,
});

export default useExitEvent;
