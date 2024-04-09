interface Props {
  label: string;
  name: string;
  type: string;
  size: string;
}

const FormInput = ({ label, name, type, size }: Props) => {
  return (
    <div className="form-control ">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={`input input-bordered input-sm ${size}`}
      />
    </div>
  );
};
export default FormInput;
