import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './../../shared/utility';

const initialState = {
    accessToken: null,
    error: null,
    loading: false,
    authRedirectionPath: '/'
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    console.log('action: ', action);
    return updateObject(state, {
        accessToken: action.accessToken,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error.message,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { accessToken: null });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    };
};

export default reducer;