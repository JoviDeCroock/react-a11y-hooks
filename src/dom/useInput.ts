import { useEffect } from 'react';

interface AccessibleInputArguments {
  error?: string | boolean;
  label: string;
  id?: string;
  required?: boolean;
}

type AccessibleInputReturn = [
  {
    'aria-label': string;
    'aria-required'?: boolean;
    'aria-invalid'?: boolean;
  },
  {
    htmlFor?: string;
  }
];

const useInput = (input: AccessibleInputArguments): AccessibleInputReturn => {
  const arg = input || {};

  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    useEffect(() => {
      if (arg.id && !document.getElementById(arg.id))
        console.error(
          `[useInput] - The element with ${arg.id} isn't in the DOM`
        );
    }, [arg.id]);
  }

  return [
    {
      // Input properties
      'aria-label': arg.label,
      'aria-required': !!arg.required,
      'aria-invalid': !!arg.error,
    },
    {
      // Label properties
      htmlFor: arg.id,
    },
  ];
};

export default useInput;
