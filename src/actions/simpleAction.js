// export const simpleAction = (response) => dispatch => {
//     console.log("aaaaaaa");
//     dispatch({
//         type: 'SIMPLE_ACTION',
//         payload: response
//     })
// }


export function responseData(response){
    console.log("aaaaaaa");
    return {
        type:'SIMPLE_ACTION',
        payload:response
    }
}
export function categorySelection(cat,subCat){
    console.log("bbbbbbb");
    return {
        type:'CAT_SUBCAT_ACTION',
        selectedCat:cat,
        selectdeSubcat:subCat
    }
}