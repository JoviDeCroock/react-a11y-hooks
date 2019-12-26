interface AccessibleInputArguments {
  label: string;
  name?: string;
  required?: boolean;
};

type AccessibleInputReturn = [
  {
    'aria-label': string;
    'aria-required'?: boolean;
  }, {
    htmlFor?: string
  }
];

const useAccessibleInput = (input: AccessibleInputArguments): AccessibleInputReturn  => [{
  'aria-label': (input || {}).label,
  'aria-required': (input || {}).required ||  false,
}, {
  htmlFor: (input || {}).name,
}];

export default useAccessibleInput;
