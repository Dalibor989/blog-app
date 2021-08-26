import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import AppPosts from './pages/AppPosts';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <li><Link to="/posts">Posts</Link></li>
        </nav>
        <Switch>
          <Route exact path="/posts">
            <AppPosts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
