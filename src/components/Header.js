import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/App.scss';
import { reset_state } from '../actions/appActionsCreators';

class Header extends Component {

    loadCandidates(reset_state) {
        this.props.reset_state();
    }

    render() {
        return (
            <header>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar5">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="brand-img"></div>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#">אודות</a></li>
                                    <li><a href="#">צור קשר</a></li>
                                    <li onClick={this.loadCandidates.bind(this, reset_state)} >
                                        <Link to="/candidates" >
                                            <span ><i className="fa fa-users" aria-hidden="true"></i> מועמדים</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/addCandidate">
                                            <span><i className="fa fa-user" aria-hidden="true"></i> הוסף מועמד</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/representatives">
                                            <span><i className="fa fa-users" aria-hidden="true"></i> מייצגות</span>
                                        </Link>
                                    </li>
                                    <li title="logout">
                                        <Link to="/login"><i className="fa fa-sign-out fa-lg" aria-hidden="true"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        reset_state: () => dispatch(reset_state()),
    };
};

export default connect(null, mapDispatchToProps)(Header);



