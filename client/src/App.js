import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Recipes from './components/Recipes';
import RecipesDetail from './components/RecipesDetail';
import SubmitForm from './components/SubmitForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Recipes} />
          <Route exact path="/recipes/new" component={SubmitForm} />
          <Route path="/recipes/:id" component={RecipesDetail} />
          <Route path="/:order/:limit/:page" component={Recipes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
