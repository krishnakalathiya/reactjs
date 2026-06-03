import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

// --- ACTION TYPES ---
const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const ADD_SUCCESS = 'ADD_SUCCESS';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
const DELETE_SUCCESS = 'DELETE_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const API_URL = 'http://localhost:5000/students';

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_START });
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to capture student data.');
    const data = await res.json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_FAILURE, payload: err.message });
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    const data = await res.json();
    dispatch({ type: ADD_SUCCESS, payload: data });
  } catch (err) {
    console.error("Error adding record:", err);
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });
    const data = await res.json();
    dispatch({ type: UPDATE_SUCCESS, payload: data });
  } catch (err) {
    console.error("Error updating record:", err);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    dispatch({ type: DELETE_SUCCESS, payload: id });
  } catch (err) {
    console.error("Error deleting record:", err);
  }
};

export const loginUser = (creds) => (dispatch) => {
  if (creds && creds.username && creds.password) {
    dispatch({ 
      type: LOGIN_SUCCESS, 
      payload: { username: creds.username } 
    });
    return true;
  }
  return false;
};
export const logoutUser = () => ({ type: LOGOUT_SUCCESS });

// --- REDUCERS ---
const initialStudentState = { list: [], loading: false, error: null };
const studentReducer = (state = initialStudentState, action) => {
  switch (action.type) {
    case FETCH_START: return { ...state, loading: true, error: null };
    case FETCH_SUCCESS: return { ...state, loading: false, list: action.payload };
    case FETCH_FAILURE: return { ...state, loading: false, error: action.payload };
    case ADD_SUCCESS: return { ...state, list: [...state.list, action.payload] };
    case UPDATE_SUCCESS:
      return { ...state, list: state.list.map(s => s.id === action.payload.id ? action.payload : s) };
    case DELETE_SUCCESS:
      return { ...state, list: state.list.filter(s => s.id !== action.payload) };
    default: return state;
  }
};

const initialAuthState = { isAuthenticated: false, user: null };
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: return { isAuthenticated: true, user: action.payload };
    case LOGOUT_SUCCESS: return { isAuthenticated: false, user: null };
    default: return state;
  }
};

export const store = createStore(
  combineReducers({ students: studentReducer, auth: authReducer }),
  applyMiddleware(thunk)
);