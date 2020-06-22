import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import Recipes from './components/Recipes';
import RecipesDetail from './components/RecipesDetail';
const Recipes = React.lazy(() => import('./components/Recipes'))

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Suspense fallback={<div>Loading</div>}>
            <Route exact path="/" component={Recipes} />
            <Route path="/:order/:limit/:page" component={Recipes} />
            <Route path="/recipes/:id" component={RecipesDetail} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
