import {combineReducers} from 'redux';
import  home from './module/home/reducer';
import community from './module/community/reducer';
import my from './module/my/reducer';

const reducer = combineReducers({
  home,
  community,
  my
});
export default reducer;