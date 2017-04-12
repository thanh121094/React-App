/**
 * Created by Peter Hoang Nguyen on 4/11/2017.
 */
export const LET_DRAW = "LET_DRAW";
export const LET_SHOW = "LET_SHOW";
export const LET_DELETE = "LET_DELETE";
export const LET_EDIT = "LET_EDIT";

export const letDrawTheContent = (data) => {
    console.log("letDrawTheContent", data);
    return {type: LET_DRAW, data}
};

export const letShowTheValue = (data) => {
    console.log("letShowTheValue", data);
    return {type: LET_SHOW, data}
};

export const letDeleteTheValue = (data) => {
    return {type: LET_DELETE, data}
};

export const letEditTheValue = (data) => {
    return {type: LET_EDIT, data}
};