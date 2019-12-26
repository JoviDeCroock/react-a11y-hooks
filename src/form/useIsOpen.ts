import React from 'react';

const useIsOpen = (ref: React.RefObject<any>) => {
  const timeoutRef = React.useRef<number>();
  const [isOpen, setIsOpen] = React.useState(false);

  return [
    {
      isOpen,
    },
    {
      onBlur: () => {
        timeoutRef.current = setTimeout(() => {
          setIsOpen(false);
        });
      },
      onFocusHandler: () => {
        clearTimeout(timeoutRef.current);
      },
      onClick: () => {
        setIsOpen(o => !o)
      },
      onClickOutside: (e: React.SyntheticEvent) => {
        if (isOpen && !ref.current.contains(e.target)) {
          setIsOpen(false);
        }
      },
      setIsOpen,
    }
  ]
}

export default useIsOpen;
