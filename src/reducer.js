import {combineReducers} from 'redux';

export const reducer = combineReducers({
  login(state = [], action) {
    switch (action.type) {
      case 'LOGIN':
        // console.log('LOGIN');
        return {
          userId: action.userId,
          token: action.token,
          userInfo: action.userInfo,
        };
      default:
        return state;
    }
  },
})
