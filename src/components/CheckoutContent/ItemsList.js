import React from "react";
import {connect} from 'react-redux';
import {
    List, message, Avatar, Spin, Button,
  } from 'antd';

class ItemsList extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    }
    removeItem(e){
        console.log(e.target.key);
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
                            <Button key={item.id} onClick={this.removeItem}>
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
        cart:state.cart
    };
}
export default connect(mapStateToProps)(ItemsList);