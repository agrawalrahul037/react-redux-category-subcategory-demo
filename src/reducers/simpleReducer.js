export default (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            console.log('in SIMPLE_ACTION');
            return {
                result: action.payload
            }
        
        case 'CAT_SUBCAT_ACTION':
            return {
                ...state
            }
        default:
            return state
    }
}