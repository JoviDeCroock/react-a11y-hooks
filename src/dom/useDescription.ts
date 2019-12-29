const useDescription = (id: string): { 'aria-describedby': string } => ({
  // TODO: see if described by exists
  'aria-describedby': id,
});

export default useDescription;
