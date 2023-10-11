import * as ACTION_TYPE from "../action_type"

export const initialState: userInfo = {
    email: "",
    token: "",
};

export const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE.LOGIN:
            return {
                ...state,
                email: action.email,
                token: action.token,
            };
        case ACTION_TYPE.LOGOUT:
            return {
                ...state,
                email: "",
                token: "",
            };
        case ACTION_TYPE.REFRESH:
            return {
                ...state,
                email: action.email,
                token: action.token,
            };
        default:
            return state;
    }
};