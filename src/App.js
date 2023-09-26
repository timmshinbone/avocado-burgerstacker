import './App.css';
import BurgerStacker from './BurgerStacker';

// Going to leave App as the main 'parent' component
// This will call the BurgerStacker component
// BurgerStacker component will render all the other components
function App() {
  return (
    <div className="App">
      <BurgerStacker />
    </div>
  );
}

export default App;
