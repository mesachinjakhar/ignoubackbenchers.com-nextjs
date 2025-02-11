export const Alert = () => {
  return (
    <div
      className="alert bg-teal-950 text-green-500 px-11 py-1 overflow-hidden relative whitespace-nowrap xs:px-2"
      role="alert"
      aria-live="polite"
    >
      <p className="animate-scrollText inline-block m-3 xs:text-sm">
        <strong>🚨 Important Update:</strong> The <strong>last date</strong> to
        submit your <strong>IGNOU Solved Assignments</strong> is{" "}
        <time dateTime="2025-01-30">30 Jan 2025</time>. ⏳ Don’t miss the
        deadline!
      </p>
    </div>
  );
};

export default Alert;
