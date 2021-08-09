import {lazy, Suspense} from 'react'
import { Switch, Route} from 'react-router-dom'
import FallbackUi from 'components/pageLoader'
const Home = lazy(()=> import('pages/home'))
const PageNotFound = lazy(()=> import('pages/pageNotFound'))


function Routes() {
    return (
        <Suspense fallback={<FallbackUi color="primary" />}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={PageNotFound} />
            </Switch>
        </Suspense>
    )
        
}

export default Routes