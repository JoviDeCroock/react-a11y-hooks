import React from 'react';

interface Output {
  onFocus: (e: React.SyntheticEvent) => void;
  onMouseOver: (e: React.SyntheticEvent) => void;
}

const useEnterEvent = (cb: (e: React.SyntheticEvent) => void): Output => ({
  onFocus: cb,
  onMouseOver: cb,
});

export default useEnterEvent;
