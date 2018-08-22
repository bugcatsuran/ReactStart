import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {} from './actions';
import Home from './components/home';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}


export default  connect(mapStateToProps, mapDispatchToProps)(Home);