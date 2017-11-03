const initialState = {
    search: '',
};

export default (state = initialState, action) => {
    const { type, response, payload } = action;
    
    switch (type) {
        default: return state;
    }
}
