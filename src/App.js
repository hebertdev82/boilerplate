import React, { Fragment } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Left from './components/Left';
import Right from './components/Right';

const App = () => (
  <Fragment>
    
    <main>
      <Container fluid>
        <Row>
        
          <Col xs={{ order: 1 }} md={{ size: 6 }} className="m-0 p-0">
            <Left />
          </Col>
          
          <Col xs={{ order: 2 }} md={{ size: 6 }} className="m-0 p-0">
            <Right />
          </Col>
          
        </Row>
      </Container>
    </main>
    
  </Fragment>
);

export default App;