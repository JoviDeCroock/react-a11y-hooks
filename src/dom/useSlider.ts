interface Input {
  value: number;
  min?: number;
  max?: number;
  valueDescription?: string;
  orientation?: 'vertical' | 'horizontal';
  label: string;
  labelledBy?: string;
}

interface Output {
  'aria-valuenow': number,
  'aria-valuemin'?: number,
  'aria-valuemax'?: number,
  'aria-valuetext'?: string,
  'aria-orientation': 'horizontal' | 'vertical',
  'aria-label': string,
  'aria-labelledby'?: string,
}

const useSlider = (input: Input): Output => {
  const arg =  input || {};
  return {
    'aria-valuenow': arg.value,
    'aria-valuemin': arg.min,
    'aria-valuemax': arg.max,
    'aria-valuetext': arg.valueDescription,
    'aria-orientation': arg.orientation || 'vertical',
    'aria-label': arg.label,
    'aria-labelledby': arg.labelledBy,
  }
}

export default useSlider;
