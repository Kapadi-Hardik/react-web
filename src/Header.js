import React from 'react'
import { Anchor, Col, Container, Image, Nav, Row } from 'react-bootstrap'

export default function Header() {
  return (
    <Container fluid className='bg-black'>
    <Nav className="navbar container">
        <Container>
            <Anchor className="navbar-brand text-white p-3"><Image style={{ width: '50px' }} src='https://www.lifesciencemarketresearch.com/images/logo.png' /></Anchor>
            <Row>
                <Col xs="12">
                    <div className="nav nav-fill" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                        <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">About</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </Nav>
    </Container>
  )
}


