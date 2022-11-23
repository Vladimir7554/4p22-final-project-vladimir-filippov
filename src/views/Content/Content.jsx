import React from 'react'
import './Content.css'
import Container from '../../components/Container/Container';

const Content = (props) => {
 const {
   className = '',
   children,
 } = props

 return (
<main className={`${className} content`}>
 <Container className="content__inner">
   {children}
 </Container>
</main>
 )
}

export default Content