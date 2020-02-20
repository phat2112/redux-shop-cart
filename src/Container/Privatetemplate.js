import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import PrivateTemplate from 'Components/Templates/Admin'

const AuthTemplateContainer = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token')
    if(!token){
        return window.location.href = '/login'
    }
    return (
        <Route
        {...rest}
        render={({location, history, ...props}) => (
            <PrivateTemplate>
                 <Component location={location} history={history} {...props} />
            </PrivateTemplate>
        )} 
        />
    )
}
export default AuthTemplateContainer