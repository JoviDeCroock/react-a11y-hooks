interface AccessibleListArguments {
  label: string;
  role: 'navigation';
};

type AccessibleListReturn = {
  'aria-label': string;
  role: string;
};

const useAccessibleList = (input: AccessibleListArguments): AccessibleListReturn  => {
  const arg = input || {};
  return {
    'aria-label': arg.label,
    role: arg.role,
  }
}

export default useAccessibleList;
