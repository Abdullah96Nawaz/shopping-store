import { Menu,Layout,Modal,Button,Input,Form } from 'antd';
import React from 'react';
import Cart from './cart/Cart';
import Login from './Login';
import {connect} from 'react-redux';
import Logout from './Logout';
import {Link} from 'react-router-dom';

const {Header}=Layout;
class Nav extends React.Component {
  state = {
    current: 'mail',
    visible: false,
    email:'',
    password:''
  }
  componentWillMount(){
    console.log(this.props.user,"NAVVVV")
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    return (
      <Header>
      <div style={{width: '120px',height: '31px',background: 'rgba(255,255,255,.2)',margin: '16px 24px 16px 0',float: 'left'}} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Women</Menu.Item>
        <Menu.Item key="2">Men</Menu.Item>
        <Menu.Item key="3">Children</Menu.Item>
        <Menu.Item><Link to='/check'>Check</Link></Menu.Item>
        {this.props.user==''||this.props.user=='user not found'?'':<Menu.Item key='4'><Cart/></Menu.Item>}
        {this.props.user==''||this.props.user=='user not found'?<Login/>:''}
        {this.props.user!=''&&this.props.user!='user not found'?<Logout/>:''}
        
        
      </Menu>
    </Header>
    );
  }
}
const mapStateToProps=state=>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(Nav);



















// <div>
//             <Button type="primary" onClick={this.showModal}>
//               Open Modal
//             </Button>
//             <Modal
//               title="Basic Modal"
//               visible={this.state.visible}
//               onOk={this.handleOk}
//             >
//               <p>Some contents...</p>
//               <p>Some contents...</p>
//               <p>Some contents...</p>
//             </Modal>
//           </div>






// showModal = () => {
//   this.setState({
//     visible: true,
//   });
// }

// handleOk = (e) => {
//   console.log(e);
//   this.setState({
//     visible: false,
//   });
// }