import { cleanup, renderHook } from '@testing-library/react-hooks';
import { useAnnouncement } from '../src';

describe('useAnnouncement', () => {
  afterEach(() => cleanup());

  it('should return the right values for a polite announcement', () => {
    const {
      result: { current: result },
    } = renderHook(() => useAnnouncement(true));
    expect(result.role).toEqual('alert');
    expect(result['aria-atomic']).toEqual(true);
    expect(result['aria-live']).toEqual('polite');
  });

  it('should return the right values for an inpolite announcement', () => {
    const {
      result: { current: result },
    } = renderHook(() => useAnnouncement(false));
    expect(result.role).toEqual('alert');
    expect(result['aria-atomic']).toEqual(true);
    expect(result['aria-live']).toEqual('assertive');
  });
});
