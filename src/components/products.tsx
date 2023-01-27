import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import functionProducts from './functionProduts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';



function Products1() {
  return (
    <Container style={{display: 'flex', alignItems: 'center', }}>
      <Row>
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src='${img}' />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Descrição
              </Card.Text>
              <Button style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button  style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
      


      
      
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button  style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card style={{ width: '18rem', flex: '1 1 150px', margin: '5px'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button style={{ width: '100%',}} variant="primary"><FontAwesomeIcon icon={faBagShopping} />  COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


  );

}

export default Products1;