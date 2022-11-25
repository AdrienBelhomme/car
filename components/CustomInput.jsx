const CustomInput = (props) => {
  const { label, type, key, placeholder, value, onHandleChange } = props;

  return (
    <div className="mb-4">
      <label className="block text-base font-bold mb-2 text-form-title-color">{label}</label>
      <input
        className="bg-form-grey-background border-r-{10} text-left pl-8 pb-1 rounded w-96 h-14"
        autoComplete="off"
        key={key}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onHandleChange(event)}
      />

    </div>

  );
};
export default CustomInput;
// module.exports = CustomInput;
// module.exports = { CustomInput, handleChange };
