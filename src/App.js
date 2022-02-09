import './App.css';
import Title from './Title';
import './Title.css';
import POPOSList from './POPOSList';
import POPOSSpace from './POPOSSpace';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title title={'SFPOPOS'} subtitle={'San Franciscos Privately Owned Public Spaces'}/>
      </header>
      <POPOSList />
      <POPOSSpace />
      <Footer />
    </div>
  );
}

export default App;
