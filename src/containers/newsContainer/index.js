import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import PropTypes from 'prop-types'
import moment from 'moment';
import './newsContainer.css'

/**
 * Container component to create a card of news 
 * @param {object} data 
 * @returns  
 */
function NewsContainer({data}) {
    return (
        <div data-testid="news-container" >
            <Card>
                <CardImg top width="100%" height="150vh" src={data?.urlToImage? data.urlToImage : "https://via.placeholder.com/250"} alt="News card image" />
                <CardBody>
                    <CardTitle data-testid="title" className="title" >{data?.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted sub-title">Author: {data?.author}</CardSubtitle>
                    <CardText data-testid="description" className="description" >{data?.description}</CardText>
                    <CardSubtitle  className="mb-2 text-muted sub-title">Published at: {data?.publishedAt? moment(data.publishedAt).format('L') : ""}</CardSubtitle>
                    <CardLink href={data?.url} target="_blank">Read more</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default NewsContainer

NewsContainer.propsType = {
    data : PropTypes.shape({
        title : PropTypes.string,
        author : PropTypes.string,
        description: PropTypes.string,
        publishedAt: PropTypes.string,
        url: PropTypes.string,
        urlToImage: PropTypes.string
    })
}