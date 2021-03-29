import './App.css';
import Btn from './components/btn/btn.component';
import Image from './components/image/image.component';

function App() {
  return (
    <div className="App">
      {/* <ul>
        <li>Button component</li>
        <li>Image component (responsive and lazy loading)</li>
        <li>Accessibility - tabbing, skip content, aria-hidden on icons etc</li>
      </ul> */}
      <Btn label="Button" />
      <Btn type="primary" label="Primary Button" />
      {/* <Image
        src={"https://via.placeholder.com/300x150.png?text=Image"}
        alt="My image"
        width={300} /> */}
    </div>
  );
}

export default App;
