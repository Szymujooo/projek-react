import './App.css';
import Card from "./components/InfoBox/InfoBox";
import Iterator from './components/Iterator/Iterator';
import List from './components/List/List';
import PeopleList from './components/PeopleList/PeopleList';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Card/>
      <List></List>
      <PeopleList></PeopleList>
      <Iterator></Iterator>
    </div>
  );
}

export default App;
