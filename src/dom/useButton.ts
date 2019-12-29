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
  const arg = input || {};
  return {
    'aria-labelledby': arg.labelledBy,
    'aria-label': arg.label,
    role: input.type !== 'button' ? 'button' : undefined,
    value: input.intent,
  }
}

export default useButton;
