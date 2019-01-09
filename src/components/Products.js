import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllData,addToCart,fetchCartData} from '../actions/actionsData';
import { Card, Icon, Avatar,Row, Col } from 'antd';
class Productss extends Component{
    componentDidMount(){
        this.props.dispatch(fetchAllData());
        //console.log(this.props.cart+'AAAA'+this.props.data)
    }
    addCart=(id)=>{
        console.log('in called' ,id)
        this.props.dispatch(addToCart(id,this.props.user.email));
    }
    render(){
        const data= this.props.data;
        const {Meta}=Card;
        return(
            <div>
            <Row> 
                    {data.map((item)=>{
                        return(
                            <div>
                            <Col span={1}></Col>
                            <Col span={7}>
                                <Card
                                hoverable
                                style={{ width: 300,marginTop:30 }}
                                cover={<Avatar shape="square" size={300} src={item.img} />}
                                actions={[this.props.user!=''?<Icon type="shopping-cart" onClick={()=>this.addCart(item.id)}/>:'', <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                            <Meta
                            title={item.title}
                            description={item.Price+' Rupees'}
                            />
                            </Card>
                            </Col>
                            </div>
                        )
                    })}
            </Row>
            </div>
        );
    }
}
//all data all of it is returned
// const mapStateToProps = state=>{
//     return state;
// }
//but if have to be specidic
const mapStateToProps = state=>{
    return {
        data:state.data,
        cart:state.cart,
        user:state.user
    };
}
const Products=connect(mapStateToProps)(Productss)
export default Products;