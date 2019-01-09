import React from 'react';
import { Popover, Button,Badge,Divider } from 'antd';
import {connect} from 'react-redux';
import {fetchCartData} from '../../actions/actionsData';
import {fetchOrderData} from '../../actions/orders';
import CartContent from './CartContent';
import {Link} from 'react-router-dom';


class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible: false,
            cart:this.props.cart
        }
    }
    content = (cart)=>(
        <div>
            <CartContent cart={cart}/>
            <Divider />
            <Link to='/checkout' onClick={()=>this.setState({visible: false})}>Check out</Link>
            <Button onClick={()=>this.showOrder()}>Show Orders</Button>
        </div>
      )

    showOrder=()=>{
        this.props.dispatch(fetchOrderData(this.props.user.email));
    }
    componentDidMount(){
        if(this.props.user)
            console.log('hereisemail',this.props.user.email)
            this.props.dispatch(fetchCartData(this.props.user.email));
    }
    handleVisibleChange = (visible) => {
        this.props.dispatch(fetchCartData(this.props.user.email));
        this.setState({ visible });
    }
    render(){
        
        return(
            this.props.cart.length>0?(
                <Popover
                    content={this.content(this.props.cart)}
                    title="Catr"
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Badge count={this.props.cart.length} offset={[9,-10]}>
                        <div><p style={{height:20}}>Cart</p></div>
                    </Badge>
                    
                </Popover>
            ):''
        )
    }
}

const mapStateToProps = state=>{
    return {
        cart:state.cart,
        user:state.user
    };
}
// const Cart=connect(mapStateToProps)(Cartt)
export default connect(mapStateToProps)(Cart);