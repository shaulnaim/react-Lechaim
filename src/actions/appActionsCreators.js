import Promise from 'es6-promise';
//candidates action creators
export const GET_CANDIDATES = 'get_candidates';
export const GETTING_CANDIDATES = 'getting_candidates';
export const GOT_CANDIDATES = 'got_candidates';
export const ADD_CANDIDATE = 'add_candidate';
export const REMOVE_CANDIDATE ='remove_candidate';
export const SELECT_CANDIDATE = 'select_candidate';

//representatives actions creators
export const GET_REPRESENTATIVES = 'get_representatives';
export const GETTING_REPRESENTATIVES = 'getting_representatives';
export const GOT_REPRESENTATIVES = 'got_representatives';
export const REMOVE_REPRESENTATIVE = 'remove_representative';
export const ADD_REPRESENTATIVE = 'add_representatives';
export const SELECT_REPRESENTATIVE = 'select_representative';

//general actions creators
export const RESET_STATE = 'reset_state';
export const FILTER = 'filter';

//login actions creators
export const LOGIN_PENDING = 'login_pending';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_ERROR = 'login_error';

export const get_candidates = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_CANDIDATES });
    fetch('http://localhost:4000/people')
      .then((response) => response.json())
      .then((candidates) => dispatch({ type: GOT_CANDIDATES, candidates }));
  };
};

export const get_representatives = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_REPRESENTATIVES });
    fetch('http://localhost:4000/representatives')
      .then((response) => response.json())
      .then((representatives) => dispatch({ type: GOT_REPRESENTATIVES, representatives }));
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

export const filter = (filtered) => {
  return { type: FILTER, filtered };
};

const set_LoginPending = (isLoginPending) => {
  return { type: LOGIN_PENDING, isLoginPending };
};
const set_LoginSuccess = (isLoginSuccess) => {
  return { type: LOGIN_SUCCESS, isLoginSuccess };
};
const set_LoginError = (loginError) => {
  return { type: LOGIN_ERROR, loginError };
};

//action composer to actual send login request and dispatch our actions
export function login(email, password) {
  return (dispatch) => {
    dispatch(set_LoginPending(true));
    dispatch(set_LoginSuccess(false));
    dispatch(set_LoginError(null));

    sendLoginRequest(email, password)
      .then((success) => {
        dispatch(set_LoginPending(false));
        dispatch(set_LoginSuccess(true));
      })
      .catch((err) => {
        dispatch(set_LoginPending(false));
        dispatch(set_LoginError(err));
      });
  };
}

const sendLoginRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    if (email === 'admin@admin.com' && password === 'admin') {
      return resolve(true);
    } else {
      return reject(new Error('Invalid Email or Password'));
    }
  });
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