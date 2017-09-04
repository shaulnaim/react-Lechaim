import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';

 const deleteCandidate = (id,onRemove) => {
   $('#item'+id).addClass('animated hinge');
   setTimeout(() => {
       onRemove(id);
   }, 1000); 
  };
  
 const selectCandidate = (id,onSelect) => {
       onSelect(id);
  };

const CandidateItem = ({ candidate, onRemove, onSelect }) => (
    <li id ={`item${candidate.id}`} style={{ listStyle:'none'}} >
            <div>
                <section >
                    <Link to={`/candidates/${candidate.id}`} >
                        <div onClick={selectCandidate.bind(this, candidate.id,onSelect)}  className='panel-body'>
                            <div className='photo'>
                                <img   alt= 'no pic' width='150' height='150' src={candidate.avatar} />
                            </div>
                            <div className='user-info'>
                                <div>
                                    <h1>{candidate.name}</h1>
                                    <h3>Age: {candidate.age}</h3>
                                    {(candidate.representative) ? <h4>representative : {candidate.representative}</h4> : ''  }
                                </div>
                            </div>
                        </div>
                        </Link>
                    <div className='deleteBtn' >
                        <a onClick={deleteCandidate.bind(this, candidate.id,onRemove)} className='btn  btn-danger ' role='button' > מחק מועמד  </a>
                    </div>
                </section>
            </div>
      </li>
);

CandidateItem.propTypes = {
  candidate: PropTypes.shape({
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
  }),
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CandidateItem;