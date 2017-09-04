import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset_state, select_candidate } from '../actions/appActionsCreators';

class CandidateInfo extends Component {
    
    loadCandidates(reset_state) {
        this.props.reset_state();
    }
   
    render() {
        return (
            <div className='candidate-info'>
                <div className='panel panel-info '>
                    <div className='panel-heading'>
                        <h2>
                            {this.props.candidate.name}
                        </h2>
                        <div>
                            <img width='200' height='200' src={this.props.candidate.avatar} />
                        </div>
                        <h3> {this.props.candidate.age} :גיל</h3>
                        <span>{this.props.candidate.email}</span>
                        <div className='candidate-info-panel-body'>
                            <p>Ian American actress and producer. She made her acting debut with a minor role in the 1987 thriller
                            Hangmen, and made her television debut in the film Bionic Showdown: The Six Million Dollar Man
                            and the Bionic Woman (1989), and played the lead role in the short-lived NBC sitcom Working Girl.
                            Her breakthrough role was in the film Demolition Man (1993). She subsequently starred in several
                            successful films including Speed (1994),and the Bionic Woman (1989), and played the lead role in the short-lived NBC sitcom Working Girl.
                            Her breakthrough role was in the film Demolition Man (1993). She subsequently starred in several
                            successful films including Speed  While You Were Sleeping (1995), The Net (1995), A Time
                            to Kill (1996), Hope Floats (1998), and Practical Magic (1998) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur perferendis aliquid unde pariatur tenetur aperiam illum voluptate quibusdam omnis totam, quisquam dolor quis consequuntur nobis ut? Minus,
                            labore porro illum?
                        </p>
                            <div className='panel'>
                                <a className='btn btn-success' role='button' href='#'>צור קשר עם מייצגת</a>
                                <a className='btn btn-info' role='button' href='#'>שמור לאחר-כך</a>
                                <Link to={'/candidates/'} >
                                    <a onClick={this.loadCandidates.bind(this, reset_state)}
                                        className='btn btn-info' role='button' href='#'>
                                        כל המועמדים
                                     </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CandidateInfo.propTypes = {
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
  };


const mapStatetoProps = (state) => {
    return {
        candidate: state.candidates.selected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset_state: () => dispatch(reset_state()),
        onCandidateClick: (id) => dispatch(select_candidate(id))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(CandidateInfo);