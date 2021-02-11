import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Index from './views/Index'
import Projects from './views/Projects';
import Resume from './views/Resume';
import './static/css/main.scss'
import NotFound from './views/NotFound';
import Contact from './views/Contact';

ReactDOM.render(<Router basename={BASE_PATH}>
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} status={404} />
  </Switch>
</Router>,
  document.getElementById('root'),
);