import * as actionTypes from './actionTypes';
import axios from './../../axios-auth';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

const authStore = (dispatch, response) => {
    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('expirationDate', expirationDate);
    dispatch(authSuccess(response.data));
    dispatch(checkAuthTimeout(response.data.expiresIn));
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }
        console.log('sending request');
        axios.post('auth/login', authData)
            .then(response => {
                authStore(dispatch, response);
            })
            .catch(err => {
                const errorString = "Something went wrong";
                const errMessage = err.response ? (err.response.data ? err.response.data.message : errorString) : errorString;
                dispatch(authFail({ message: errMessage }));
            });
    };
};

export const authWithGoogle = (tokenId) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('auth/googlelogin',
            {
                tokenId: tokenId
            }).then(response => {
                authStore(dispatch, response);
            }).catch(err => {
                const errorString = "Something went wrong";
                const errMessage = err.response ? (err.response.data ? err.response.data.message : errorString) : errorString;
                dispatch(authFail({ message: errMessage }));
            });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess({ accessToken: accessToken }));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};