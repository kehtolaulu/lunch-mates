import { connect } from 'react-redux';
import Lunches from './Lunches';
import { addParticipant } from '../actions';

const mapStateToProps = state => ({
    lunches: state
});

const mapDispatchToProps = (dispatch) => ({
    addParticipant: (name) => dispatch(addParticipant(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lunches);
