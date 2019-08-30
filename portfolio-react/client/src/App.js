import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProjectList from './components/ProjectList'
import ProjectCard from './components/ProjectCard'
import HomePage from './components/Homepage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/projects/:projectId" component={ProjectCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
