interface AccessibleInputArguments {
  error?: string | boolean;
  label: string;
  name?: string;
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
      'aria-label': arg.label,
      'aria-required': arg.required ||  false,
      'aria-invalid': !!arg.error,
    },
    {
      htmlFor: arg.name,
    }
  ]
};

export default useAccessibleInput;
