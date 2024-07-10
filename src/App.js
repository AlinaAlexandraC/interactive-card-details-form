import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card from './Components/Card/Card';
import InputForm from './Components/InputForm/InputForm';
import desktopBackground from './images/bg-main-desktop.png';
import CompleteState from './Components/CompleteState/CompleteState';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <InputForm />
    },
    {
      path: '/complete',
      element: <CompleteState />
    }
  ]);
  
  return (
    <div className="App">
      <header className="App-header d-flex flex-row position-relative">
        <img src={desktopBackground} className='desktop-background position-absolute start-0' />
        <Card />
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
