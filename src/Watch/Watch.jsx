import { Component } from 'react'
import { addHours, format } from "date-fns";
import PropTypes from 'prop-types';
import './Watch.css'


export default class Watch extends Component {
  constructor(props) {
    super(props)
    this.title = props.title;
    this.zone = props.zone
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(new Date())
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='watch'>
        <div className='title'>{this.title}</div>
        <div className='time'>{format(addHours(new Date(), this.zone), "HH:mm:ss")}</div>
        <div className='zone'>{this.zone}</div>
        {this.props.children}
      </div>
    )
  }
}

Watch.propTypes = {
  title: PropTypes.string.isRequired,
  zone: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired,
};
