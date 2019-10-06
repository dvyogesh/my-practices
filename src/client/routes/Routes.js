// import React, { Component } from 'react';
// import UserMap from './containers/userData/UserMap';
// import Loader from './components/Loader';
// import './app.css';

// export default class App extends Component {
//   state = { userData: null };

//   componentDidMount() {
//     fetch('/api/getUseres')
//       .then(res => res.json())
//       .then(user => this.setState({ userData: user.data }));
//   }

//   render() {
//     const { userData } = this.state;
//     return userData ? <UserMap userData={userData}/> : <Loader />
//   }
// }

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import AdminPranchage from '../containers/AdminPranchage/AdminPranchage'
import Pranchage from '../containers/pranchage/pranchage'
import Account from '../containers/Account/Account'
import Orders from '../containers/Account/Orders/Orders'
import Profile from '../containers/Account/Profile/Profile'
import Addresses from '../containers/Account/Addresses/Addresses'
import App from '../App'

// import Root from './Root';
// import Home from './Home';
// import About from './About';

//const App = (props) => (<div>Root means commen ex.header footr {props.children}</div>)
const Home = () => (<div>Home. <Link to="/about">about</Link></div>)
const About = ({props, match}) => {console.log(match);return(<div>About <Link to="/home">home</Link></div>)}
const Aboutyy = ({props, match}) => {console.log(match);return(<div>About--id is == {match.params.id }<div> <Link to="/home"> home</Link></div></div>)}
const NoMatch = () => (<div>NoMatch. <Link to="/about">about</Link></div>)

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Bogle-Regular", "Roboto", "Helvetica", "Arial", sans-serif'
  }
})



class Routes extends Component {
    render() {
        return (
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <div>
                    <App>
                       <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/adminPranchage" component={AdminPranchage} />
                            <Route exact path="/pranchage" component={Pranchage} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/about/:id" component={Aboutyy} />
                              <Account>
                                <Switch>
                                  <Route  path="/account" exact component={Profile} />
                                  <Route  path="/account/orders" component={Orders} />
                                  <Route  path="/account/addresses" component={Addresses} />
                                </Switch>
                                {
                                  //TO UNDERSTAND ROUTE HAVE A LOOK
                                  //https://codedaily.io/tutorials/45/Create-Nested-Tab-Routes-with-Dynamic-Paths-with-React-Router
                                }
                              </Account>
                            <Route component={NoMatch} />
                        </Switch>
                    </App>
                </div>
            </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default Routes;
