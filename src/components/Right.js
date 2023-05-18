import React from 'react';
import '../App.css';

import {
    Container, Row, Col
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Right = () => (

    <Container className='d-flex h-100'>
        <Row className='align-items-center'>
            <Col className='align-self-center'>
                <h1 className='title'>Site Em Construção</h1>
                <p>Estamos trabalhando neste projeto.<br></br>Siga-nos nas Redes Sociais e fique por dentro das atualizações!</p>

                    <div className='socialMedia'>
                    
                        <a className='link' href='https://facebook.com/rixxercorp' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className='icon' />
                        </a>

                        <a className='link' href='https://instagram.com/rixxercorp' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='icon' />
                        </a>

                        <a className='link' href='https://goo.gl/maps/AJYNGA6C7UB89eMa8' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGoogle} className='icon' />
                        </a>

                    </div>

                <p className='assinatura'>
                    Desenvolvido por&nbsp;
                    <a href='https://rixxer.vercel.app' target="_blank" rel="noopener noreferrer">
                        Rixxer Corp
                    </a>
                </p>

            </Col>
        </Row>
    </Container>

);

export default Right;