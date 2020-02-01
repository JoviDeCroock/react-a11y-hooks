import { useEffect } from 'react';

const useDescription = (id: string): { 'aria-describedby': string } => {
  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    useEffect(() => {
      if (!document.getElementById(id))
        console.error(
          `[useDescription] - The element with ${id} isn't in the DOM`
        );
    }, [id]);
  }

  return {
    'aria-describedby': id,
  };
};

export default useDescription;
