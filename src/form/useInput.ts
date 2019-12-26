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

const useAccessibleInput = ({ label, name, required }: AccessibleInputArguments): AccessibleInputReturn  => [{
  'aria-label': label,
  'aria-required': required ||  false,
}, {
  htmlFor: name,
}];

export default useAccessibleInput;
