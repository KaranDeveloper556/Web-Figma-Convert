import React from 'react';

const Button = ({ value, icon, righticon, onclick, tailwindclass }) => {
  return (
    <button
      onClick={onclick}
      className={`p-2 px-3 li:text-lg flex justify-center items-center gap-2 bg-indigo-600 font-semibold text-white rounded-xl hover:bg-indigo-700 ${tailwindclass}`}
      aria-label={value} // Accessibility improvement
    >
      {icon && <span>{icon}</span>}
      <span>{value}</span>
      {righticon && <span>{righticon}</span>}
    </button>
  );
};

export default Button;
