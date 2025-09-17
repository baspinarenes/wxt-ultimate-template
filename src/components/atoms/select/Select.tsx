import "./Select.scss";

export function Select({ label = 'Select an option:', options = [], onSelected, selected }: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelected(event.target.value, event);
  };

  return (
    <div className="select-wrapper">
      <span>{label}</span>
      <select onChange={handleChange} value={selected}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

type SelectProps = {
  options: { value: string; label: string }[];
  label?: string;
  onSelected: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string;
};