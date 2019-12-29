interface AccessibleAnnouncementReturn {
  'aria-live': string;
  'aria-atomic': boolean;
}

const useAccessibleAnnouncement = (): AccessibleAnnouncementReturn  => ({
  'aria-live': 'polite',
  "aria-atomic": true,
});

export default useAccessibleAnnouncement;
