import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/large/Home';
import About from './components/large/About';
import IndexEmployee from './components/large/IndexEmployee';
import AddEmployee from './components/large/AddEmployee';
import UpdateEmployee from './components/large/UpdateEmployee';
import DetailEmployee from './components/large/DetailEmployee';

import Header from './components/medium/Header';
import Footer from './components/medium/Footer';


import styled from 'styled-components';

function App() {
  return (
    <EmloyeeCSS>
      <Router>
          <Header />
          <div className="page-container" style={{minHeight: "100vh"}}>
            <Route exact path = '/' component = {Home} />
            <Route path = '/About' component = {About} />
            <Route path = '/IndexEmployee' component = {IndexEmployee} />
            <Route path = '/AddEmployee' component = {AddEmployee} />
            <Route path = '/UpdateEmployee/:id' component = {UpdateEmployee} />
            <Route path = '/DetailEmployee/:id' component = {DetailEmployee}></Route>
          </div>
          <Footer />
        </Router>
      
    </EmloyeeCSS>
  );
}


const EmloyeeCSS = styled.div`
  .page-container {
    min-height: 100%;
    height: auto;
  }
`;

export default App;
