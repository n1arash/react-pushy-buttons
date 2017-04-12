 const React = require('react');


export default class Button extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { size, color ,children} = this.props
    return (
      <button className={`btn btn--${size} btn--${color}`}>
      {children}
    </button>
    )
  }
}

Button.defaultProps = {
  size: 'md',
  color: 'blue',
  children: 'Button'
}
