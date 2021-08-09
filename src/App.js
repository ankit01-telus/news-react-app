import Routes from 'routers/routes'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import configureStore from 'store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()
const history = createBrowserHistory()

function App() {
  return (
    <Router history={history} >
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>
    
    
  );
}

export default App;
