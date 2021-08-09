import { useEffect } from 'react'
import NewsContainer from 'containers/newsContainer'
import {Col, Row, Container} from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HomeNewsAction } from 'pages/home/mutator/home.action'
import PageLoader from 'components/pageLoader'
import ShowNotification from 'components/notification'


/**
 * Iterate over each element of news array and pass each object of news to news container.
 * @param {object} props 
 * @returns {Component} HomeNewsContainer
 */
function HomeNewsData(props) {
    const { news, isFetching, error, HomeNewsAction } = props
    useEffect(() => {
        HomeNewsAction({params: 'latest'})
    }, [])

    return (
        <Container>
            <Row>
                {
                    isFetching ? <PageLoader data-testid="page-loader" color="primary" /> : ""
                }
                {
                    news?.length === 0? <h5 style={{textAlign: 'center'}}>News not found with specific tag.</h5> : ""
                }
                {
                    error? <ShowNotification color='danger' text="Something went wrong." /> : ""
                }
                {
                    news?.map(item=>(
                        <Col key={item.title} data-testid="news-card"  md="3" lg="3" >
                            <NewsContainer data={item} />
                        </Col>
                    ))
                }
                
            </Row>
        </Container>
        
    )
}

HomeNewsData.propTypes = {
    news: PropTypes.array,
    isFetching : PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    HomeNewsAction : PropTypes.func.isRequired
}

const mapStateToProps = ({ all_news }) => {
    return {
        news : all_news.data?.articles,
        isFetching : all_news.isFetching,
        error: all_news.error
    }
}

const mapDispatchToProps = {
        HomeNewsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNewsData)