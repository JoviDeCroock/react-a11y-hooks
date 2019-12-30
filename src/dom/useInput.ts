interface AccessibleInputArguments {
  error?: string | boolean;
  label: string;
  id?: string;
  required?: boolean;
};

type AccessibleInputReturn = [
  {
    'aria-label': string;
    'aria-required'?: boolean;
    'aria-invalid'?: boolean;
  }, {
    htmlFor?: string
  }
];

const useAccessibleInput = (input: AccessibleInputArguments): AccessibleInputReturn  => {
  const arg = input || {};
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
    }
  ]
};

export default useAccessibleInput;
