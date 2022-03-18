import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Styles */
import './App.css';

/** Components */
import Home from './Pages/Home';
import AboutApp from './Pages/AboutApp';
import AboutAuthor from './Pages/AboutAuthor';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutApp} />
        <Route exact path="/about/about-app" component={AboutApp} />
        <Route exact path="/about/about-author" component={AboutAuthor} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
