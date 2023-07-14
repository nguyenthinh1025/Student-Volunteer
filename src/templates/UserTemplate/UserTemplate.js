
import { Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import ResponsiveHeader from './ResponsiveHeader/ResponsiveHeader';
import Carousel from './Carousel/Carousel';
import Config from '../../component/Config';


export const UserTemplate = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <div className='theme-layout'>
            <Config />
            <ResponsiveHeader />
            <Header />
            <Carousel />

            <SideBar />
            <Component {...propsRoute} />
        </div>
    }} />
}