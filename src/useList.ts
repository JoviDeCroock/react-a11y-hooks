interface AccessibleListArguments {
  label: string;
  role: 'navigation';
};

type AccessibleListReturn = {
  'aria-label': string;
  role: string;
};

const useAccessibleList = (input: AccessibleListArguments): AccessibleListReturn  => ({
  'aria-label': (input || {}).label,
  role: (input || {}).role,
});

export default useAccessibleList;
