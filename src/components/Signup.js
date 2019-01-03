import React from 'react';
import {
    Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon,
  } from 'antd';
import {connect} from 'react-redux';
import {signup} from '../actions/LoginSignup';

const { Option } = Select;
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            visible: false,
            email:'',
            password:'',
            name:''
         };
    }
    

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {

      this.setState({
        visible: false,
      });
    };
    onSubmited=()=>{
        this.props.dispatch(signup(this.state.email,this.state.password,this.state.name))
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return (
            <div style={{display:'inline'}}>
                <Button size='small' onClick={this.showDrawer}>
                 Signup
                </Button>
                <Drawer
                title="Create a new account"
                width={720}
                onClose={this.onClose}
                visible={this.state.visible}
                style={{
                    overflow: 'auto',
                    height: 'calc(100% - 108px)',
                    paddingBottom: '108px',
                }}
                >
                <Form layout="vertical" hideRequiredMark onChange={this.handleChange}>
                    <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Name">
                        <Input placeholder="Please enter user name" name='name'/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Email">
                        
                            <Input
                            style={{ width: '100%' }}
                            type='email'
                            placeholder="Please enter Email Address"
                            name='email'
                            />
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Password">
                        
                            <Input
                            style={{ width: '100%' }}
                            placeholder="Password"
                            name='password'
                            type='password'
                            />
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="DateTime">
                            <DatePicker
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentNode}
                            />
                        </Form.Item>
                    </Col>
                    </Row>
                </Form>
                <div
                    style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right',
                    }}
                >
                    <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                    Cancel
                    </Button>
                    <Button onClick={this.onSubmited} type="primary">
                    Submit
                    </Button>
                </div>
                </Drawer>
            </div>
        );
    }
}
export default connect(null,null)(Signup);