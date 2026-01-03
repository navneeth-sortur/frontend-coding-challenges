export default function ValidationMessage({ message, isError }) {
  if (!message) return null;

  return (
    <p style={{ color: isError ? "red" : "green", marginTop: "10px" }}>
      {message}
    </p>
  );
}
