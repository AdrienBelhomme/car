const CustomInput = (props) => {
  const { label, type, id, placeholder } = props;

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-form-title-color">{label}</label>
      <input
        className="bg-form-grey-background border-r-{10}"
        type={type}
        id={id}
        placeholder={placeholder}
      />

    </div>

  );
};
// export default CustomInput;
module.exports = CustomInput;
// module.exports = { CustomInput, handleChange };
