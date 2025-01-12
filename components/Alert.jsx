export const Alert = () => {
  return (
    <div
      className="alert bg-teal-950 text-green-500 px-11 py-1px overflow-hidden relative whitespace-nowrap"
      role="alert"
      aria-live="polite"
    >
      <p className="animate-scrollText m-3">
        <strong>Alert:</strong> Last Date to Submit IGNOU Assignment is{" "}
        <time dateTime="2025-01-30">30 Jan 2025</time> 🤩 !! Hurry Up!
      </p>
    </div>
  );
};

export default Alert;
