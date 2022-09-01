import { dashboardConstants } from "../constants";


const initialState = {
    success: false,
    message: "",
    error: "",
    data: ""
};

interface ReduxActionTypeProps {
    type: string;
    response: any;
    error: any
};

export const dashboard = (state = initialState, action: ReduxActionTypeProps) => {
    switch (action.type) {
        case dashboardConstants.START_COUNT_API:
            return {
                ...state
            }
        case dashboardConstants.SUCCESS_COUNT_API:
            return {
                ...state,
                data: action.response
            }
        case dashboardConstants.ERROR_COUNT_API:
            return {
                ...state,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}