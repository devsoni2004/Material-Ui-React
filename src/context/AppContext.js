import React, { createContext, useEffect } from "react";
import { actionTypes } from "./actionTypes";
import { userAuthentication } from "../api/api";
import { useNavigate } from "react-router-dom";
import { pages } from "../common/constants";

export const AppContext = createContext();

const initialState = sessionStorage.getItem('appState') ? JSON.parse(sessionStorage.getItem('appState')) : null;

function appStateReducer(state, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER: {
            const stateData = { ...state, user: action.payload };
            sessionStorage.setItem('appState', JSON.stringify(stateData))
            return stateData;
        }
        case actionTypes.UPDATE_ERROR: {
            const stateData = { ...state, error:action.payload }
            sessionStorage.setItem('appState', JSON.stringify(stateData))
            return stateData;
        }
        case actionTypes.UPDATE_STATE: {
            const stateData = { ...state, ...action.payload }
            sessionStorage.setItem('appState', JSON.stringify(stateData))
            return stateData;
        }
        case actionTypes.RESET: {
            const stateData = { ...action.payload }
            sessionStorage.setItem('appState', null)
            return stateData;
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const AppContextProvider = ({ children }) => {
    const [appState, dispatch] = React.useReducer(appStateReducer, initialState);
    const navigate = useNavigate();
    const login = async (data) => {
        try {
            const result = await userAuthentication(data);
            if (result.status === 200 && result.data) {
                dispatch({
                    type: actionTypes.UPDATE_USER,
                    payload: result.data
                })
                dispatch({
                    type: actionTypes.UPDATE_ERROR,
                    payload: ""
                })
                navigate(pages.DASHBOARD);
            } 
        } catch (err) {
            console.log(err.response);
            dispatch({
                type: actionTypes.UPDATE_ERROR,
                payload: err.response.data
            })
        }
    }
    const logout = async () => {
        dispatch({
            type: actionTypes.RESET,
            payload: null
        })
    }
    useEffect(() => {
        console.log("AppContextProvider:", appState)
    }, [appState])

    return (
        <AppContext.Provider value={{ appState, dispatch, login, logout }}>
            {children}
        </AppContext.Provider>
    )
}
