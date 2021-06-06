import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        variation="primary"
        size="md"
        onClick={() => {
          console.log('Buton Tiklandi');
        }}
      />
      <Button variation="secondary" />
    </div>
  );
}

export default App;
