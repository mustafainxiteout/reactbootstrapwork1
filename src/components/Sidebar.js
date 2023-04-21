import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

function Sidebar({navs}) {
const navigate=useNavigate()
const handleTabClick = (components) => {
navigate(components);
};

const data=[
    {
      hrefs:'Home',
      components:'/home',
    },
    {
      hrefs:'Admin',
      components:'/admin',
    }
  ]

return (
<>
<HeaderComponent/>
<Container fluid>
<Row>
<Col className="col-auto shadow-small bg-light flex-shrink-0 d-flex mx-3 my-1 border rounded-4" style={{width: "auto",minHeight:"86vh"}}>
<ul className='nav nav-pills nl nav-flush flex-column mb-auto text-center'>
{data.map((item)=>(
<li className='nav-item nl' key={item.hrefs}>
    <NavLink className='nl py-3 text-black border-bottom' onClick={() => handleTabClick(item.components)}>{item.hrefs}</NavLink>
    </li>
))}
</ul>
</Col>
<Col className='col-sm p-4'>
{navs}
</Col>
</Row>
</Container>
</>
)
}

export default Sidebar;