import React from 'react'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import {Outlet} from "react-router";
import './Layout.css'


const Layout = () => {

return (

<div className="Layout">
  <Header className="layout__header" />
  <Content className="layout__content">
<Outlet />
  </Content>
  <Footer className="layout__footer" />
</div>

)
}

export default Layout