/**
 * Created by Peter Hoang Nguyen on 3/17/2017.
 */
import React from 'react';
import {
    LET_DRAW
} from "components/themes/admin/AdminActionCreator";
import {
    LET_SHOW
} from "components/themes/admin/AdminActionCreator";
import {
    LET_DELETE
} from "components/themes/admin/AdminActionCreator";
import {
    LET_EDIT
} from "components/themes/admin/AdminActionCreator";

const adminInitState = {
    data: null
};

const initialState = {
    items: [],
};

export const Admin = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case LET_DRAW:
            return {
                ...state,
                data: action.data
            };
            break;
        case LET_SHOW:
            return {
                ...state,
                data: action.data
            };
            break;
        case LET_DELETE:
            return {
                ...state,
                data: action.data
            };
        case LET_EDIT:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
};