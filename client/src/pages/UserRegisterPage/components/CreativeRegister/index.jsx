import React, { Component } from 'react';
// import { compose } from 'redux';
// import injectReducer from '../../../../utils/injectReducer';
// import reducer from './action/reducer';
import RegisterForm from './RegisterForm';

export default class Index extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <RegisterForm />;
  }
}

// const withReducer = injectReducer({ key: 'register', reducer });

// export default compose(withReducer)(Index);
// export default Index;
