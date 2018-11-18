import React , { Component } from 'react';
import logoImg from '../../logo.svg';
import './logo.css';

export default class Logo extends Component{
  render() {
    return (
      <div className='logo-container'>
        <img src={logoImg} alt=""/>
      </div>
    )
  }
}