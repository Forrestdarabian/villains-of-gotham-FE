import axiosWithAuth from "../../utils/axiosWithAuth";

//Registration Action

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = (user) => (dispatch) => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
    .post(`api/users/register`, {
      fullName: user.fullName,
      username: user.username,
      password: user.password,
      email: user.email,
    })
    .then((res) => {
      console.log(res.data);

      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
      return err;
    });
};

//Login Action

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const logInUser = (user) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post(`api/users/login`, user)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
        user: res.data.user,
      });
    })
    .catch((res) =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: res.data,
      })
    );
};

// Logout Action
export const LOG_OUT = "LOG_OUT";

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};

// Fetching User Action
export const FETCHING_USER = "FETCHING_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCHING_FAILURE = "FETCH_FAILURE";

export const fetchUser = (username) => (dispatch) => {
  dispatch({ type: FETCHING_USER });
  axiosWithAuth()
    .get(`/api/auth/users/${username}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: FETCHING_FAILURE, payload: err.response.data.code })
    );
};

// Fetching squads

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchSquad = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get(`/api/users/squads`)
    .then((res) => {
      console.log("fetched squads", res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

// Items Action
export const ADDING_SQUAD = "ADDING_SQUAD";
export const ADD_SQUAD_SUCCESS = "ADD_SQUAD_SUCCESS";
export const ADD_SQUAD_FAILURE = "ADD_SQUAD_FAILURE";

export const addsquads = (squadItems) => (dispatch) => {
  console.log(squadItems);
  dispatch({ type: ADDING_SQUAD });
  axiosWithAuth()
    .post(`/api/users/squads`, squadItems)
    .then((res) => {
      console.log(`ADD squads`, res);
      dispatch({
        type: ADD_SQUAD_SUCCESS,
        // payload: res.data
        payload: squadItems,
      });
    })
    .catch((res) =>
      dispatch({
        type: ADD_SQUAD_FAILURE,
        payload: res.data,
      })
    );
};

//Edit Action
export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

export const updateSquad = (updatedSquad, id) => (dispatch) => {
  dispatch({ type: EDIT_START });
  axiosWithAuth()
    .put(
      `https://total-top-5s.herokuapp.com/api/users/squads/${id}`,
      updatedSquad
    )
    .then((res) => {
      dispatch({ type: EDIT_SUCCESS, payload: updatedSquad });
    })
    .catch((err) => {
      dispatch({ type: EDIT_FAILURE, payload: err.response.data.code });
      console.log(err.message);
    });
};

//Delete Action
export const DELETE_SQUAD_START = "DELETE_SQUAD_START";
export const DELETE_SQUAD_SUCCESS = "DELETE_SQUAD_SUCCESS";
export const DELETE_SQUAD_FAILURE = "DELETE_SQUAD_FAILURE";

export const deleteSquad = (id) => (dispatch) => {
  dispatch({ type: DELETE_SQUAD_START });
  axiosWithAuth()
    .delete(`https://total-top-5s.herokuapp.com/api/users/squads/${id}`)
    .then((res) => {
      console.log(res.data.message);
      dispatch({ type: DELETE_SQUAD_SUCCESS, payload: id });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DELETE_SQUAD_FAILURE, payload: err });
    });
};
