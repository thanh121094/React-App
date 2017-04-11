/**
 * Created by Peter Hoang Nguyen on 4/11/2017.
 */
export const LET_DRAW = "LET_DRAW";

export const letDrawTheContent = (data) => {
    console.log("letDrawTheContent", data);
    return {type: LET_DRAW, data}
}