interface AccessibleAnnouncementReturn {
  'aria-live': string;
  'aria-atomic': boolean;
}

const useAccessibleAnnouncement = (isPolite: boolean): AccessibleAnnouncementReturn  => ({
  'aria-live': isPolite ? 'polite' : 'assertive',
  "aria-atomic": true,
});

export default useAccessibleAnnouncement;
