import React from 'react';
import Nav from './Components/Nav';
import './Styles/main.scss'
import Home from './Components/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ReadNews from './Components/ReadNews';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className='app'>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Home}/>
              <Route path='/ReadNews' component={ReadNews}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
