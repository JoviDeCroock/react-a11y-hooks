interface Input {
  labelledBy?: string;
  label: string;
  type: 'button' | 'input';
  intent?: 'reset' | 'submit';
}

interface Output {
  'aria-labelledby'?: string;
  'aria-label': string;
  role?: 'button';
  value?: 'reset' | 'submit';
}

const useButton = (input: Input): Output => {
  return {
    'aria-labelledby': input.labelledBy,
    'aria-label': input.label,
    role: input.type !== 'button' ? 'button' : undefined,
    value: input.intent,
  };
};

export default useButton;
