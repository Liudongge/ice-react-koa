import { push } from 'react-router-redux';
import { Message } from '@alifd/next';
import { postUserRegister } from '../../../../../api/user';

// import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from './constants';

// const userRegisterRequest = () => {
//   return {
//     type: USER_REGISTER_REQUEST,
//     isLoading: true,
//   };
// };

// const userRegisterSuccess = payload => {
//   return {
//     type: USER_REGISTER_SUCCESS,
//     isLoading: false,
//     payload,
//   };
// };

// const userRegisterFailure = payload => {
//   return {
//     type: USER_REGISTER_FAILURE,
//     isLoading: false,
//     payload,
//   };
// };

export const register = params => {
  return async dispatch => {
    // dispatch(userRegisterRequest());
    try {
      console.log(params);
      const response = await postUserRegister();
      // dispatch(userRegisterSuccess(response.data));

      if (response.data.status === 200) {
        Message.success('注册成功');
        dispatch(push('/'));
      } else {
        Message.error(response.data.message || '注册失败');
      }
      return response.data;
    } catch (error) {
      Message.error(error.message || error);
      // dispatch(userRegisterFailure(error));
    }
  };
};
