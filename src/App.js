import './App.css';
import BookshelfContainer from './components/Bookshelf/BookshelfContainer';
import BookContainer from './components/Bookshelf/Book/BookContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <SearchBar />
      <div>
        <Route exact path='/' render={() => <BookshelfContainer />} />
        <Route path='/book/:userId?' render={() => <BookContainer />} />
      </div>
    </div>
  );
}

export default App;
