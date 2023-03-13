const useSearchParams = (language?: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams;
};

export default useSearchParams;
