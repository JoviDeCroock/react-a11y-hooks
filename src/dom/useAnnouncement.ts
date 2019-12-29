interface AccessibleAnnouncementReturn {
  'aria-live': string;
  'aria-atomic': boolean;
  role: 'alert';
}

const useAccessibleAnnouncement = (isPolite: boolean): AccessibleAnnouncementReturn  => ({
  'aria-live': isPolite ? 'polite' : 'assertive',
  'aria-atomic': true,
  role: 'alert',
});

export default useAccessibleAnnouncement;
