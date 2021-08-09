import {Spinner} from 'reactstrap'
import PropTypes from 'prop-types'
import './pageLoader.css'

export default function PageLoader({color}) {
    return <div className="spinner" data-testid="page-loader">
        <Spinner color={color}> </Spinner>
        <p>Loading...</p>
    </div>
}

PageLoader.propTypes = {
    color : PropTypes.string
}