import React from 'react';
import {connect} from 'react-redux';
import { List, Avatar } from 'antd';

class CartContentt extends React.Component{
    constructor(props){
        super(props);
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
                </List.Item>
            ))}
            
        </List>
        )
    }
}

const mapStateToProps = state=>{
    return {
        cart:state.cart
    };
}
const CartContent=connect(mapStateToProps)(CartContentt)
export default CartContent;