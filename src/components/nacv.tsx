import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar bg="primary" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand style={{ color: 'white', fontSize: '30px' }} href="#">MKS <Navbar.Brand style={{ color: 'white', fontSize: '15px' }}>Sistemas</Navbar.Brand> </Navbar.Brand>

            <Navbar.Toggle style={{ color: 'black', backgroundColor: 'white', width: '100px', height: '40px' }} aria-controls={`offcnavasNavbar-expand-${expand}`} ><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> 0 </Navbar.Toggle>

            <Navbar.Offcanvas style={{ width: '500px' }}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ fontSize: '30px' }} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Carrinho de Compras
                </Offcanvas.Title>
              </Offcanvas.Header >
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Card style={{ marginTop: '25px' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Apple Watch Series 4 GPS</Card.Title>



                    </Card.Body>
                  </Card>

                  <Card style={{ marginTop: '25px' }}>
                    <Card.Img variant="left" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Apple Homepod</Card.Title>



                    </Card.Body>
                  </Card>

                  <Container style={{ marginTop: '25px' }}>
                    <Row>
                      <Col>
                        <Card.Title style={{ marginTop: '400px', alignSelf: 'center' }}>Total:</Card.Title>
                      </Col>
                      <Col>
                        <Card.Title style={{ marginTop: '400px', alignmentBaseline: 'after-edge', textAlign: 'end' }}>R$798</Card.Title>
                      </Col>
                    </Row>
                  </Container>
                  <div className="d-grid gap-2">
                    <Button size="lg" variant="primary" style={{ position: 'relative', marginTop: '25px', alignContent: 'center', height: '5rem', alignSelf: 'center' }}>Finalizar Compra</Button>
                  </div>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;