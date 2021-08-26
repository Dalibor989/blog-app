import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import AppPosts from './pages/AppPosts';
import AddPost from './pages/AddPost';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/add">Create Post</Link></li>
        </nav>
        <Switch>
          <Route exact path="/posts">
            <AppPosts />
          </Route>
          <Route exact path="/add">
            <AddPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
