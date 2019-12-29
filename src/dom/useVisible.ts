const useVisible = (isVisible: boolean): { 'aria-visible': boolean } => ({
  'aria-visible': !!isVisible,
});

export default useVisible;
