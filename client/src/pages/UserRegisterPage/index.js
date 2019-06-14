import React, { Component } from 'react';
import CreativeRegister from './components/CreativeRegister';

export default class UserRegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-register-page-page">
        {/* 注册 */}
        <CreativeRegister />
      </div>
    );
  }
}
