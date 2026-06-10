interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {

  return (
    <input
      type="text"
      placeholder="Search components..."
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value
        )
      }
      style={{
        width: "100%",
        padding: "10px",
        border:
          "1px solid #ccc",
        marginBottom:
          "10px",
      }}
    />
  );

}