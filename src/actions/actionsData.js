export const DATA_FETCHED = 'DATA_FETCHED';
export const ADD_CART = 'ADD_CART';
export const CART_FETCHED='CART_FETCHED';
const local='http://localhost:3000';

export function fetchAllData() {
  return (dispatch) => {
    return fetch(local+'/api/cloth/', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadInfo(DATA_FETCHED,json))
    })
    .catch(error => console.log(error));
  }
}

export function fetchCartData(email) {
  console.log('fetchcartdata called',email);
  return (dispatch) => {
    return fetch(local+'/api/getCart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email:email})
    })
    .then(response => response.json())
    .then(json => {
      console.log('here is responce from fetchcartdata',json)
      dispatch(loadInfo(CART_FETCHED,json.response))
    })
    .catch(error => console.log(error));
  }
}

export function addToCart(id,email){
  console.log('im addin to cart', id)
  return(dispatch)=>{
    fetch(local+'/cart/',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({pid:id,name:'Abdullah',by:email})
    }).then((response) =>{
      dispatch(loadInfo(ADD_CART,response))
      dispatch(fetchCartData(email));
    }
  ).catch((error)=>{
      console.log('Error ',error);
  })
  }
}
export function loadInfo(type,results) {
  return {
    type : type,
    payload : results
  }
}
