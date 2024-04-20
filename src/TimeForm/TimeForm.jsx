import { Component } from 'react'
import './TimeForm.css'
import PropTypes from 'prop-types';


export default class TimeForm extends Component {
  timeForm = {title: '', zone: ''}
  state = this.timeForm;

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.zone < -12 || this.state.zone > 12 || this.state.title.length > 12) return
    this.props.addWatch(this.state);
    this.setState(this.timeForm);
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  clearForm = () => {
    this.setState(this.timeForm)
  }

  render() {
    return (
      <>
      <div className='time'>
      <form className='time_form' onSubmit={this.handleSubmit}>
        <div className='title_form'>
          <label className='label_form'>Название</label>
          <input           
            className='input_form'
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='timezone_form'>
          <label className='label_form'>Временная зона</label>
          <input           
            className='input_form'
            type='number'
            name='zone'
            value={this.state.zone}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="button_add">
          <button>Добавить</button>
        </div>
   
      </form>
      <div className="button_remove">
        <button onClick={this.clearForm}>Очистить</button>
      </div>
      </div>
         </>
    )
  }
}

TimeForm.propTypes = {
  title: PropTypes.string.isRequired,
  zone: PropTypes.number.isRequired,
  addWatch: PropTypes.func.isRequired,
};
