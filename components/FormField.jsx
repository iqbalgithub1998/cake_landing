const FormField = ({ label, placeholder, children }) => {
  return (
    <div className="group">
      <label>{label}</label>
      <div className="flex bg-white border border-darkGrayishBlue rounded-md p-4 divide-x-4 space-x-2">
        {children}
        <input
          id="input"
          placeholder={placeholder}
          className="ml-2 px-3 w-full border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default FormField;
