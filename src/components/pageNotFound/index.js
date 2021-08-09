import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import './notFound.css'

export default function PageNotFoundComponent({text}) {
    return (
        <div className="page_not_found_container" >
            <h2>{text}</h2>
            <Link to="/" className="home_link">
                <Button color="primary">Back to home</Button>
            </Link>
        
        </div>
    )
}