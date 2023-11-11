// TextInput.jsx
import React from "react";

const TextInput = (props) => {
  const { type, id, name, placeholder } = props;

  return (
    <div >
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 mt-2 mb-2 duration-500 border-b border-gray-300 hover:border-gray-500 placeholder:text-sm"
      />
    </div>
  );
};

export default TextInput;
