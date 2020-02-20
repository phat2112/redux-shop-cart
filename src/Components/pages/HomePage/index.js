import React, {useEffect} from 'react'
import './styles.scss'
import { useHistory } from "react-router-dom"
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import shopBackground from "Assets/images/shop-background.jpg"
import {AuthSelector} from 'Stores/Authentication/Selectors'
import {handleLogin} from 'Stores/Authentication/Actions'
import {connect} from 'react-redux'


const LoginForm = ({form, login, userToken}) => {
    const { getFieldDecorator } = form;
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err) => {
          if (err) {
              return false
          }
          const data = {
              ...form.getFieldsValue(),
          }
          console.log('data', data)
          let userAccount = {
              email: data.username,
              password: data.password
          }
          login({ email: data.username,
            password: data.password})
          console.log('userAccount', userAccount)

        });
      };
    let history = useHistory()
    useEffect(() => {
        let token = localStorage.getItem('token')
      if(token){
        history.push('/shop')
      }
    }, [userToken])
    // return(
    //     <div className='homepage'>
    //         <h1>WELCOME TO MY SHOP !</h1>
    //         <button className='hompage-button' onClick={handleLinkPage}>Continue</button>
    //     </div>
    // )
    return (
        <div className="login-form-block">
            <img src={shopBackground} className='login-form-background' alt=""/>
            <div className="login-form-container">
            <h1>LOGIN</h1>
            <Form onSubmit={e => handleSubmit(e)} className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                rules: [
                    {   
                        required: true, 
                        message: 'Please input your username!' 
                    },
                    ],
                })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    className='login-input'
                />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                rules: [
                    { 
                        required: true, 
                        message: 'Please input your Password!' 
                    }],
                })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    className='login-input'
                />,
                )}
            </Form.Item>
            <div className="footer-form">
                <Form.Item>
                    {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                </Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </div>
            </Form>
        </div>
        </div>
      );
}
const mapStateToProps = state => ({
    userToken: AuthSelector.getUserToken(state),
})
const mapDispatchToProps = dispatch => ({
    login: ({email, password}) => dispatch(handleLogin({email, password})), 
})
const Login = Form.create()(LoginForm)
export default connect(mapStateToProps, mapDispatchToProps)(Login)