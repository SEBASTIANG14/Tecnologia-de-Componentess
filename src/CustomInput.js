
function CustomInput({label, disabled, type}) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type={type} disabled={disabled} />
    </>
  );
}

export default CustomInput; 