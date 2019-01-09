import {fetchCartData} from './actionsData';
export const REMOVE_CART='ORDER_FETCHED';
const local='http://localhost:3000';

export function deleteCartData(id,email) {
  console.log('deleteCartdata called',id);
  return (dispatch) => {
    return fetch('http://localhost:3000/cart/'+id, {
        method: 'delete'
        }).then(function(response) {
          dispatch(fetchCartData(email));
           return response.json()
         }).then(function(json) {
           console.log('parsed json: ', json)
         }).catch(function(ex) {
           console.log('parsing failed: ', ex)
         });
  }
}

export function deleteAllCardItem(idList,email) {
  return (dispatch) => {
    idList.forEach(id=>{
      console.log('deleteCartdata called',id);
        
        return fetch('http://localhost:3000/cart/'+id, {
            method: 'delete'
            }).then(function(response) {
              dispatch(fetchCartData(email))
              return response.json()
            }).then(function(json) {
              console.log('parsed json: ', json)
            }).catch(function(ex) {
              console.log('parsing failed: ', ex)
            });
        
    });
  }
}
export function loadInfo(type,results) {
  return {
    type : type,
    payload : results
  }
}
