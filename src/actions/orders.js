export const ORDER_FETCHED='ORDER_FETCHED';
const local='http://localhost:3000';

export function fetchOrderData(email) {
  console.log('fetchorderdata called',email);
  return (dispatch) => {
    return fetch(local+'/api/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email:email})
    })
    .then(response => response.json())
    .then(json => {
      console.log('here is responce from fetchorderdata',json)
      dispatch(loadInfo(ORDER_FETCHED,json.response))
    })
    .catch(error => console.log(error));
  }
}
export function loadInfo(type,results) {
  return {
    type : type,
    payload : results
  }
}
