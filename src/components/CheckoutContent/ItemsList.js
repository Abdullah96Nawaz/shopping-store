import React from "react";
import {connect} from 'react-redux';
import {
    List, message, Avatar, Spin, Button,
  } from 'antd';
  import {deleteCartData} from '../../actions/removeCart';

class ItemsList extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    }
    removeItem=(id)=>{
        console.log('AAAAAAAAAAAA',id);
        this.props.dispatch(deleteCartData(id,this.props.email));
        // this.props.cart.splice(id,1)
    }
    render(){
        const cart=this.props.cart;
        return(
            <List itemLayout="horizontal">
            
                {cart.map(item=>(
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={item.img} />}
                        title={<a>{item.title}</a>}
                        description="Ant Design, a design language for background applications"
                        />
                        <div>
                            <Button key={item.id} onClick={()=>this.removeItem(item.id)}>
                                Remove
                            </Button>
                        </div>
                    </List.Item>
                ))}
                
            </List>
        );
    }
}
const mapStateToProps = state=>{
    return {
        cart:state.cart,
        email:state.user.email
    };
}
export default connect(mapStateToProps)(ItemsList);