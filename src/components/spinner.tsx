const Spinner = () => (
  <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-700 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span className="sr-only">Loading...</span>
  </div>
);

export { Spinner };
