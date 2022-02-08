import './App.css';
import Title from './Title';
import './Title.css';
import POPOSList from './POPOSList';
import POPOSSpace from './POPOSSpace';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title title={'SFPOPOS'} subtitle={'San Franciscos Privately Owned Public Spaces'}/>
      </header>
      <POPOSList />
      <POPOSSpace />
    </div>
  );
}

export default App;
