import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import Details from './Components/DetailsPage/Details';
import Filters from './Components/FiltersPage/Filter';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/details/:rName",
    element:<Details/>
  },
  {
    path:"/filters/:pgNo",
    element:<Filters/>
  }

])

function App() {
  return (
    
    // <Home/>
      <RouterProvider router={router}/>
  
  );
}

export default App;