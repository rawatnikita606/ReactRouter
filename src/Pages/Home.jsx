import React from 'react'
import Header from './Header'
import Footer from './Footer'
import abc from './image1.png'


const Home = () => {
  return (
    <div>
        
        <Header/>
        <img src={abc} alt=""  style={{width:"100%"}}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aut laudantium vitae et ullam neque cupiditate praesentium eaque voluptates incidunt molestiae ea quaerat ipsa officia qui fuga natus quam dolore, dicta debitis accusamus magni. Ea laudantium maxime eveniet enim illo quae voluptas aspernatur consectetur ab corporis illum, vero, quasi sint ipsum odit assumenda dolores quos obcaecati incidunt! Iusto similique hic at officiis consequatur veritatis quo accusamus culpa asperiores. Autem voluptatum ipsam, ea unde laborum maiores possimus fuga perferendis, molestias velit explicabo quibusdam dolorum magni. Dolores laboriosam modi doloribus sequi assumenda veritatis at voluptate consequatur! Explicabo enim perferendis aperiam fuga incidunt.</p>
        <Footer/>
    
    </div>
  )
}

export default Home