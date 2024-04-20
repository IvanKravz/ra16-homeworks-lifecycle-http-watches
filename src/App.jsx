import './App.css'
import { Component } from 'react'
import TimeForm from './TimeForm/TimeForm';
import { nanoid } from 'nanoid';
import Watch from './Watch/Watch';
import PropTypes from 'prop-types';

export default class App extends Component {

  state = {clocks: []}
   
  addWatch = ({ title, zone }) => {
    this.setState((prevState) => ({
      clocks: [...prevState.clocks, { id: nanoid(), title, zone }],
    }));
  }

  deleteWatch = (id) => {
    return() => {
      this.setState((prevState) => ({
        clocks: prevState.clocks.filter((clock) => clock.id !== id),
      }));
    }
  }

  render() {
    return (
      <div className='container'>
        <TimeForm addWatch={this.addWatch}/>
        <div className='watches'>
          {this.state.clocks.map((watch) => (
            <Watch
              key={watch.id}
              title={watch.title}
              zone={watch.zone}
              > 
                <button 
                  className='watch_delete_btn'
                  onClick={this.deleteWatch(watch.id)}
                  >
                    &#10060;
                </button>
            </Watch>  
          ))}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  addWatch: PropTypes.func.isRequired,
};
