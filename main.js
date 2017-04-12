'use strict';

const React = require('react');

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size, color, children } = this.props;
    return React.createElement('button', { className: `btn btn--${size} btn--${color}` }, [children]);
  }
}

Button.defaultProps = {
  size: 'md',
  color: 'blue',
  children: 'Button'
};

module.exports = Button;
