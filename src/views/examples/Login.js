/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import axiosInstance from '../../Api/axiosApi';
import {message} from 'antd';
class Login extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      username: "", 
      password: "", 
        
  };
  
  this.handleChange = this.handleChange.bind(this);
}
ok = async (e) => {
  alert("hello")
}
  login = async (e) => {
    console.log("username",this.state.username)
    console.log("password",this.state.password)
    e.preventDefault();
      const key = 'updatable';
   
        
    message.loading({ content: 'Loading...', key });
  
    
   
    const credentials = {username: this.state.username, password: this.state.password};
        await axiosInstance.login(credentials).then(res => {
            if(res.status === 200){
                localStorage.setItem("userInfo", JSON.stringify(res.data));
                console.log("Login Credentials :",res.data);
                message.loading({ content: 'Wait, Almost done...', key });
                window.location = `/admin`;
            }
            else  {
                message.error({ content: ' try again!', key,duration:2 });
                console.log('Username or Password is incorrect, try again!');
            }
        });
          

     
    };
   

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
      console.log(this.state.username)
  }
  render() {
   

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
            
              <Form role="form" >
              
					
          <div className="form-group"  >
              <label htmlFor="email">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Username"
                     required={true}  name="username" value={this.state.username} onChange={this.handleChange} noValidate/>
       

          </div>
          <div className="form-group">
              <label htmlFor="review">Password</label>
              <input type="password" className="form-control" id="review"
                     placeholder="Enter your password" required={true}  name="password" value={this.state.password} onChange={this.handleChange} noValidate/>
        <br/>
<a href ={`${process.env.PUBLIC_URL}/pages/forget-password`}  >&nbsp;&nbsp;Forget Password</a>


          </div>
     
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={this.login}>
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
         
        </Col>
      </>
    );
  }
}

export default Login;
