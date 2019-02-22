import React, { Component, Fragment } from 'react';
import './App.css';
import LoginMainPage from './screens/LoginMainPage';
import RegisterMainPage from './screens/RegisterMainPage';
import MainPage from './screens/MainPage';
import AddEmployeeMainPage from './screens/AddEmployeeMainPage';
import CardUsageMainPage from './screens/CardUsageMainPage';
import EmployeeListMainPage from './screens/EmployeeListMainPage';
import PackageMainPage from './screens/PackageMainPage';
import EmployeeDetailPage from './screens/EmployeeDetailPage';
import UpdateEmployeePage from './screens/UpdateEmployeePage';
import {

  Route,
  Switch,
} from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginMainPage} />
          <Route path="/register" component={RegisterMainPage} />
          <Fragment>
            <MainPage />
            <Route path="/list" component={EmployeeListMainPage} />
            <Route path="/add" component={AddEmployeeMainPage} />
            <Route path="/usage" component={CardUsageMainPage} />
            <Route path="/package" component={PackageMainPage} />
            <Route path="/detail" component={EmployeeDetailPage} /> 
            <Route path="/update" component={UpdateEmployeePage} />  
          </Fragment>
        </Switch>
      </div>
    );
  }
}

/* <div>
<Route render={({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={450}
      classNames="fade"
    >
      <Switch location={location}>
        <Route exact path="/" component={LoginMainPage} />
        <Route path="/register" component={RegisterMainPage} />
        <Fragment>
        <MainPage/>
        <Route path="/list" component={EmployeeListMainPage} />  
        <Route path="/add" component={AddEmployeeMainPage} />
        <Route path="/usage" component={CardUsageMainPage} />         
        <Route path="/package" component={PackageMainPage} />   
        </Fragment>            
      </Switch>
    </CSSTransition>
  </TransitionGroup>
)} />
</div> */
export default App;
