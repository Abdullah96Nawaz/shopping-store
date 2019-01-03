export const PLACE_ORDER = 'PLACE_ORDER';

const local='http://localhost:3000';
export function placeOrder(email,name,address,products){
    console.log('im addin to cart', email)
    return(dispatch)=>{
      fetch(local+'/Orders',{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:email,name:name,address:address,products:products})
      })
    }
}