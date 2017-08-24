import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove_candidate, select_candidate ,get_candidates, filter } from '../actions/appActionsCreators';
import Searchbox from './Autosuggest';
import CandidateItem from './CandidateItem';

const CandidateList = ({ candidates, get_candidates, onCandidateRemove, onCandidateClick, onSelect,filter}) => (

            <div>
                <Searchbox
                    candidates ={candidates}
                    reloadList={ ()=> get_candidates()}
                    filterList={(candidate) => filter({candidate})}
                />
                <ul>
                  {candidates.map(candidate =>
                    <CandidateItem
                      key={candidate.id}
                      candidate = {candidate} 
                      onRemove={() => onCandidateRemove(candidate.id)}
                      onSelect={()=> onCandidateClick(candidate.id)}
                    />
                  )}
              </ul>
          </div>
        );
 


CandidateList.propTypes = {
  candidates: PropTypes.arrayOf (
  PropTypes.shape({
      id: PropTypes.number.isRequired,
      age: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
                  address: PropTypes.string,
                  city: PropTypes.string,
                  country: PropTypes.string
                }),
      representative: PropTypes.string,
      avatar: PropTypes.string
  })
  )
}

const mapStatetoProps = (state) => {
    return { 
      candidates: state.candidates
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCandidateRemove: id => dispatch(remove_candidate(id)),
    onCandidateClick: id => dispatch(select_candidate(id)),
    get_candidates: () => dispatch(get_candidates()),
    filter: (candidate) => dispatch(filter(candidate))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CandidateList);