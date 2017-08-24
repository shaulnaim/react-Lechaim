//candidates action creators
export const GET_CANDIDATES = 'get_candidates';
export const GETTING_CANDIDATES = 'getting_candidates';
export const GOT_CANDIDATES = 'got_candidates';
export const ADD_CANDIDATE = "add_candidate";
export const REMOVE_CANDIDATE = "remove_candidate";
export const SELECT_CANDIDATE = "select_candidate";

//representatives actions creators
export const GET_REPRESENTATIVES = 'get_representatives';
export const GETTING_REPRESENTATIVES = 'getting_representatives';
export const GOT_REPRESENTATIVES = 'got_representatives';
export const REMOVE_REPRESENTATIVE= "remove_representative";
export const ADD_REPRESENTATIVE = "add_representatives";
export const SELECT_REPRESENTATIVE = "select_representative";

//general actions creators
export const RESET_STATE = "reset_state";
export const FILTER = "filter";

export const get_candidates = () => {
  return (dispatch) => {
      dispatch({type: GETTING_CANDIDATES});
      fetch('http://localhost:4000/people')
      .then(response => response.json())
      .then(candidates => dispatch({type: GOT_CANDIDATES, candidates}));
  };
};

export const get_representatives = () => {
  return (dispatch) => {
      dispatch({type: GETTING_REPRESENTATIVES});
      fetch('http://localhost:4000/representatives')
      .then(response => response.json())
      .then(representatives => dispatch({type: GOT_REPRESENTATIVES, representatives}));
  };
};

export const reset_state = (id) => {
  return { type: RESET_STATE };
};

export const select_candidate = (id) => {
  return { type: SELECT_CANDIDATE, id };
};

export const select_representative = (id) => {
  return { type: SELECT_REPRESENTATIVE, id };
};

export const remove_representative = (id) => {
  return { type: REMOVE_REPRESENTATIVE, id };
};

export const remove_candidate = (id) => {
  return { type: REMOVE_CANDIDATE, id };
};

export const filter = (filtered)=> {
  return { type:FILTER, filtered };
};


/*
export const addCandidate (item) => {
  console.log("adding item:"+item);
  return {
    type:"add",
    item
  }
}
*/