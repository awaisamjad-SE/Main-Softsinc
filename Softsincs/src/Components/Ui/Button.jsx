import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ text, variant = 'primary', onClick }) => {
  const baseClasses =
    'rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base transition font-medium w-fit';

  const styles = {
    primary:
      'bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black border shadow-lg',
    secondary:
      'bg-white text-black border-2 border-black hover:bg-black hover:text-white shadow-lg',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseClasses, styles[variant], 'focus:outline-none')}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

export default Button;
