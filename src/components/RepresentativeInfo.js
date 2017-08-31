import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {reset_state, select_representative} from '../actions/appActionsCreators';


class RepresentativeInfo extends Component {
 
    loadRepresentatives(reset_state) {
        this.props.reset_state();
    }
   
    render() {
        return (
            <div className="candidate-info">
            <div className="panel panel-info ">
                <div className="panel-heading">
                    <h2>{this.props.representative.name}</h2>
                    <div>
                        <img width="200" height="200" src={this.props.representative.avatar}/>
                    </div>
                    <h3> {this.props.representative.age} :גיל</h3><span>{this.props.representative.email}</span>
                    <div className="candidate-info-panel-body">
                        <p>Ian American actress and producer. She made her acting debut with a minor role in the 1987 thriller
                            Hangmen, and made her television debut in the film Bionic Showdown: The Six Million Dollar Man
                            and the Bionic Woman (1989), and played the lead role in the short-lived NBC sitcom Working Girl.
                            Her breakthrough role was in the film Demolition Man (1993). She subsequently starred in several
                            successful films including Speed (1994),and the Bionic Woman (1989), and played the lead role in the short-lived NBC sitcom Working Girl.
                            Her breakthrough role was in the film Demolition Man (1993). She subsequently starred in several
                            successful films including Speed  While You Were Sleeping (1995), The Net (1995), A Time
                            to Kill (1996), Hope Floats (1998), and Practical Magic (1998)
                        </p>
                        <div className="panel">
                            <a className="btn btn-success" role="button" href="#">צור קשר עם מייצגת</a>
                            <a className="btn btn-info" role="button" href="#">שמור לאחר-כך</a>
                            <Link to={`/representatives/`} > <a onClick={this.loadRepresentatives.bind(this, reset_state)} className="btn btn-info" role="button" href="#"> כל הנציגים </a> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

RepresentativeInfo.propTypes = {
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
}



const mapStatetoProps = (state) => {
    return {
        representative: state.representatives.selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset_state: () => dispatch(reset_state()),
        onRepresentativeClick: id => dispatch(select_representative(id))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(RepresentativeInfo);