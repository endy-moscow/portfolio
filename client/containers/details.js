import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
  render () {
    if (!this.props.car){
      return (<p>Выберите автомобиль..</p>)
    }
    return (
      <div>
        <p>{this.props.car.name}</p>
        <img src={this.props.car.img} /> <br />
        <p>{this.props.car.desc}</p>
        <p>Вес:{this.props.car.weight}, Скорость:{this.props.car.speed}</p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    car: state.active
  };
}

export default connect (mapStateToProps)(Details);
