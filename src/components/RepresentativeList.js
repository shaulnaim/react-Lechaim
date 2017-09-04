import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove_representative, select_representative, get_representatives } from '../actions/appActionsCreators';
import RepresentativeItem from './RepresentativeItem';

const RepresentativeList = ({ representatives, onRepresentativeRemove, onRepresentativeClick}) => (
  <ul>
    {representatives.map((representative) =>
    <RepresentativeItem 
        key = {representative.id} 
        representative = {representative} 
        onRemove={() => onRepresentativeRemove(representative.id)}
        onSelect={()=> onRepresentativeClick(representative.id)}
        />
    )}
  </ul>
);

RepresentativeList.propTypes = {
  representatives: PropTypes.arrayOf (
  PropTypes.shape({
      id: PropTypes.number.isRequired,
      age: PropTypes.number,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      Gender: PropTypes.string,
      avatar: PropTypes.string
  })
  ),
};


const mapStatetoProps = (state) => {
    return { 
      representatives: state.representatives
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRepresentativeRemove: (id) => dispatch(remove_representative(id)),
    onRepresentativeClick: (id) => dispatch(select_representative(id)),
    get_candidates: () => dispatch(get_representatives()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(RepresentativeList);