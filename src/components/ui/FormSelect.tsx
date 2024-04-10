interface Props {
  label: string;
  name: string;
  list: string[];
  size:string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FormSelect = ({ label, name, list, size, value, onChange }: Props) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
      onChange={onChange}
      value={value}
        name={name}
        id={name}
        className={`select select-bordered select-sm ${size}`}>
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
