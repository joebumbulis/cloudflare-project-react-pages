import { func, string } from 'prop-types';
import React from 'react';

const Button = ({ onClick, buttonTitle }) => (
  <button type="button" id="easy-button" className="button" onClick={onClick}>
    {buttonTitle}
  </button>
);

Button.propTypes = {
  onClick: func,
  buttonTitle: string,
};

Button.defaultProps = {
  onClick: () => { },
  buttonTitle: string,
};

export default Button;
