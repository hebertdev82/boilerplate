import React from 'react';

import {
    Container, Row, Col
} from 'reactstrap';

import scv from '../images/scv.jpg';

const Left = () => (

    <Container className='rowcfg'>
        <Row className='rowcfg'>
            <Col>
                <img src={scv} alt="scv" className="position-relative img-fluid" />
            </Col>
        </Row>
    </Container>

);

export default Left;