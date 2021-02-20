import './App.css';
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Booklist from "./components/BookList"

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Booklist />
    </div>
  );
}

export default App;
