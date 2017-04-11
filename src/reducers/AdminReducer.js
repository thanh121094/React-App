/**
 * Created by Peter Hoang Nguyen on 3/17/2017.
 */

import {
    LET_DRAW
} from "components/themes/admin/AdminActionCreator";

const adminInitState = {
    data: null
};

export const Admin = (state = adminInitState, action) => {
    let newState = {};
    switch (action.type) {
        case LET_DRAW:
            newState = {
                ...state,
                data: action.data
            }
            break;
        default:
            return state;

    }
    return newState
};