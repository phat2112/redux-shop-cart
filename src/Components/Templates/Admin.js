import React from 'react'
import { Collapse } from 'antd';
import {Link, useHistory} from 'react-router-dom'
import {Icon, Menu, Dropdown} from 'antd'
import './styles.scss'
import userIcon from 'Assets/images/user-icon.png'

const Dashboardtemplate = props => {
    const history = useHistory()
    const { Panel } = Collapse;
    const handleLinkLogin = () => {
        history.push('/login')
        localStorage.removeItem('token')
    }
    const handleShowHideMenu = menuId => {
        let menuAdmin = document.getElementById(menuId)
        if(menuAdmin.style.left === 0 + '%'){
            menuAdmin.style.left = '-' + 400 + '%'
        }else{
            menuAdmin.style.left = 0 + '%';
        }
    }
    const menu = (
        <Menu>
          <Menu.Item onClick={() => handleLinkLogin()}>
            <span>Log out</span>  
          </Menu.Item>
          <Menu.Item>
            <span>register</span>  
          </Menu.Item>
        </Menu>
      );
    return (
        <div className="auth-template">
            <div className="admin-horizon-navbar">
               <div className="logo-part">
               <h1>Shop Cart Project</h1>
                <div className="active-vertical-menu" onClick={() => handleShowHideMenu('admin-menu')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
               </div>
                <div className="user-part">
                    <div className='message'><Icon type="bell" /></div>
                    <Dropdown className="user-profile" overlay ={menu} onClick={() => history.push('/user-profile')}>
                        <img src={userIcon} alt=""/>
                    </Dropdown>       
                </div>
            </div>
            <div className='admin-menu' id='admin-menu'>
            <div className="admin-profile">
                <div className="admin-image">
                    <img src={userIcon} alt=""/>
                </div>
                <h4 style={{ fontSize: 20 + 'px'}}>Phat Nguyen</h4>
            </div>
            <div className="admin-menu-content">
            <Link to ='#' className='admin-content-link'>Components</Link>
            <Link to ='#' className='admin-content-link'>Dashboard</Link>
            <Collapse defaultActiveKey={['1']} >
             <Panel header="Shop Page" key="1" className='menu-item-dropdown'>
                 <Link to='/shop'><Icon type="shopping" /> Shop</Link>
                 <Link to='#'> <Icon type="shopping-cart" />My Cart</Link>
                 <Link to='/product-detail'>Product List</Link>
             </Panel>
            </Collapse>
            <Link to ='/' className='admin-content-link'>Icon</Link>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
    )
}
export default Dashboardtemplate