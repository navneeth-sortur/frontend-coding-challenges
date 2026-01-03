export default function FormInput({ label, name, value, onChange }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label>
        {label}
        <br />
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          style={{ padding: "6px", width: "100%" }}
        />
      </label>
    </div>
  );
}
