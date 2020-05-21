import React from 'react';
import Nav from './Components/Nav';
import './Styles/main.scss'
import Home from './Components/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ReadNews from './Components/ReadNews';
import Conatact from './Components/Contact';
import PageNotFound from './Components/PageNotFound';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className='app'>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Home}/>
              <Route path='/ReadNews' component={ReadNews}/>
              <Route path='/contact' component={Conatact}/>
              <Route component={PageNotFound}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
