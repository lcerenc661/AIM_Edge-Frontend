interface Props {
  label: string;
  name: string;
  type: string;
  size?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, name, type, size, value, onChange }: Props) => {
  return (
    <div className="form-control ">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={`input input-bordered input-sm ${size}`}
        onChange={onChange}
      />
    </div>
  );
};
export default FormInput;
