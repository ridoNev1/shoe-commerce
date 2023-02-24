import React from "react";
import PropType from "prop-types";

const Button = ({ label, Icon, variant }) => {
  return (
    <button
      className={`${variant} px-4 py-2 text-white font-semibold rounded-lg cursor-pointer flex items-center space-x-3`}
    >
      <p>{Icon}</p>
      <p>{label}</p>
    </button>
  );
};

Button.propTypes = {
  label: PropType.string,
  Icon: PropType.element,
  variant: PropType.string,
};

export default Button;
