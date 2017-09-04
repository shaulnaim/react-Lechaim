import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get_candidates, get_representatives } from './actions/appActionsCreators';
import CandidateList from './components/CandidateList';
import AddCandidate from './components/AddCandidate';
import LoginForm from './components/LoginForm';
import CandidateInfo from './components/CandidateInfo';
import RepresentativeList from './components/RepresentativeList';
import AddRepresentative from './components/AddRepresentative';
import RepresentativeInfo from './components/RepresentativeInfo';
import Header from './components/Header';



class App extends Component {

  componentDidMount() {
    this.props.get_candidates();
    this.props.get_representatives();
  }

  handleAddCandidate(candidate) {
    // let candidates = this.state.candidates;
    // candidates.push(candidate);
    // this.setState({candidates:candidates});
  }

  // handleDeleteCandidate(id){
  //   let candidates = this.state.candidates;
  //   let index = candidates.findIndex(x => x.id === id);
  //   candidates.splice(index, 1);
  //   this.setState({candidates:candidates});
  // }

  handleAddRepresentative(representative) {
    // let representatives = this.state.representatives;
    // representatives.push(representative);
    // this.setState({representatives:representatives});
  }
  handleDeleteRepresentative(id) {
    // let representatives = this.state.representatives;
    // let index = representatives.findIndex(x => x.id === id);
    // representatives.splice(index, 1);
    // this.setState({representatives:representatives});
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/addCandidate" render={() => (<AddCandidate
            addCandidate={this.handleAddCandidate.bind(this)}
          />
          )} />
          <Route path="/signup" render={() => (<AddRepresentative
            addRepresentative={this.handleAddRepresentative.bind(this)}
          />
          )} />
          <Route exact path="/candidates" component={CandidateList} />
          <Route exact path="/representatives" render={() => (<RepresentativeList
            onDelete={this.handleDeleteRepresentative.bind(this)}
          />
          )} />
          <Route path="/representatives/:id" component={RepresentativeInfo} />
          <Route path="/candidates/:id" component={CandidateInfo} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  get_candidates: PropTypes.func.isRequired,
  get_representatives: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_candidates: () => dispatch(get_candidates()),
    get_representatives: () => dispatch(get_representatives())
  };
};

export default connect(null, mapDispatchToProps)(App);