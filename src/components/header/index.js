import {Col, Container, Row} from 'reactstrap'
import SearchBar from 'components/searchBar'
import './header.css'


export default function Headers() {
    return (
        <Container data-testid="header-container" className="header-container" >
            <Row>
                <Col>
                    <h3 data-testid="header-text">News App</h3>
                </Col>
                <Col>
                    <SearchBar />
                </Col>
            </Row>
        </Container>
    )
}