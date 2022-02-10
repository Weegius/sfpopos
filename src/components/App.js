import './App.css';
import Title from './Title/Title';
import './Title.css';
import POPOSList from './POPOSList/POPOSList';
import POPOSSpace from './POPOSSpace/POPOSSpace';
import Footer from './Footer/Footer';

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
