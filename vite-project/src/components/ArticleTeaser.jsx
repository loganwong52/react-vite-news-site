import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { Container, Row, Col } from 'react-bootstrap/esm/index'

function ArticleTeaser(props) {
    const { id, title, date, handleClick } = props

    return (
        <Container>
            <hr />
            <Row>
                <Col lg="8"><h2 onClick={() => handleClick(id)}>{title}</h2></Col>
                <Col lg="4"><p>{date}</p></Col>


            </Row>

        </Container>
    )
}

export default ArticleTeaser;