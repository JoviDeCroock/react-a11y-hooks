import { useEffect } from 'react';

interface Input {
  labelledBy?: string;
  label?: string;
  type: 'button' | 'input';
  intent?: 'reset' | 'submit';
}

interface Output {
  'aria-labelledby'?: string;
  'aria-label'?: string;
  role?: 'button';
  value?: 'reset' | 'submit';
}

const useButton = (input: Input): Output => {
  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    input.labelledBy
  ) {
    useEffect(() => {
      if (
        typeof window !== 'undefined' &&
        input.labelledBy &&
        !document.getElementById(input.labelledBy)
      )
        console.error(
          `[useButton] - The element with ${input.labelledBy} isn't in the DOM`
        );
    }, [input.labelledBy]);

    if (!input.label && !input.labelledBy)
      console.warn(
        '[useButton] - Your button is missing a "label" or "labelledBy" property.'
      );
  }

  return {
    'aria-labelledby': input.labelledBy,
    'aria-label': input.label,
    role: input.type !== 'button' ? 'button' : undefined,
    value: input.intent,
  };
};

export default useButton;
