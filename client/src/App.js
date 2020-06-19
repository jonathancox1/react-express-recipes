import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Recipes from './components/Recipes';
import RecipesDetail from './components/RecipesDetail';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Recipes} />
          <Route path="/:order/:limit/:page" component={Recipes} />
          <Route path="/recipes/:id" component={RecipesDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
