import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {} from './actions';
import My from './components/my';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}


export default  connect(mapStateToProps, mapDispatchToProps)(My);