import React, { useState } from "react";
import {BsEyeFill,BsFillEyeSlashFill} from "react-icons/bs"

const TextInput = (props) => {
  const { label, type, id, name, placeholder } = props;
  const [inputType, setInputType] = useState(type);

  const toggleShowPassword = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div>
      <div>
        <h1 className="text-xs">{label}</h1>
        <div className="relative">
          <input
            type={inputType}
            id={id}
            name={name}
            placeholder={placeholder}
            className="w-full p-2 mt-2 mb-2 duration-500 border-b border-gray-300 hover:border-gray-500 placeholder:text-xs"
          />
          {type === "password" && (
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute transform -translate-y-1/2 top-1/2 right-3"
            >
              {inputType === "password" ? <BsFillEyeSlashFill style={{color : "#d3d3d3 " }}/>  :<BsEyeFill style={{color : "#d3d3d3"}}/> }
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
