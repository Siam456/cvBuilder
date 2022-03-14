
const initialState = '#FFE7D9';

const changeTheColor = (state = initialState, action) => {
    if(action.type === "CHANGECOLOR1"){
        return state = '#C8FACD';
    }
    else if(action.type === "CHANGECOLOR2"){
        return state = '#FFE7D9';
    }
    return state;
}

export default changeTheColor;