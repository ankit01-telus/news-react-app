import {Alert} from 'reactstrap'
import PropTypes from 'prop-types'

export default function ShowNotification({ color, text }) {
    return <div>
        <Alert color={color} data-testid="error-message">
            {text}
        </Alert>
    </div>
}

ShowNotification.propTypes = {
    color : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}