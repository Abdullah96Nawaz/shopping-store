import React from "react";
import {connect} from 'react-redux';
import {Form, Input, Button, Checkbox} from 'antd';
import {placeOrder} from '../../actions/placeOrderAction';
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
class Details extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            address:'',
            content:[]
        }
    }
    componentDidMount(){
        this.props.cart.forEach(item=>{this.state.content.push(item.id)});
        this.props.onRef(this)
    }
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.dispatch(placeOrder(this.state.email,this.state.name,this.state.address,this.state.content));
            this.props.next();
          }
        });
      }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }
    render(){
        const cart=this.props.cart;
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <Form.Item {...formItemLayout} label="Name">
                        {getFieldDecorator('username', {
                            rules: [{
                            required: true,
                            message: 'Please input your name',
                            }],
                        })(
                            <Input placeholder="Please input your name" name='name' value={this.state.name} />
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Email">
                        {getFieldDecorator('email', {
                            rules: [{
                            required: true,
                            message: 'Please input your email',
                            }],
                        })(
                            <Input type='email' placeholder="Please input your email" name='email' value={this.state.email} />
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Address">
                        {getFieldDecorator('address', {
                            rules: [{
                            required: true,
                            message: 'Please input your address',
                            }],
                        })(
                            <Input placeholder="Please input your address" name='address' value={this.state.address} />
                        )}
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return {
        cart:state.cart
    };
}
const DetailsForm=Form.create()(Details);
export default connect(mapStateToProps)(DetailsForm);