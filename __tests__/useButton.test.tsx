import { cleanup, renderHook } from '@testing-library/react-hooks';
import { useButton } from '../src';

describe('useButton', () => {
  afterEach(() => cleanup());

  it('should return the right values for a button type', () => {
    const {
      result: { current: result },
    } = renderHook(() =>
      useButton({
        intent: 'submit',
        label: 'click me',
        type: 'button',
      })
    );
    expect(result.role).toEqual(undefined);
    expect(result.value).toEqual('submit');
    expect(result['aria-label']).toEqual('click me');
  });

  it('should return the right values for an input type', () => {
    const {
      result: { current: result },
    } = renderHook(() =>
      useButton({
        intent: 'reset',
        label: 'click me',
        type: 'input',
      })
    );
    expect(result.role).toEqual('button');
    expect(result.value).toEqual('reset');
    expect(result['aria-label']).toEqual('click me');
  });
});
