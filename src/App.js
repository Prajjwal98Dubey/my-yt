
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import WatchPage from './components/WatchPage';
import ErrorPage from './components/ErrorPage';
import Shorts from './components/Shorts';
import Music from './components/Music';
import Live from './components/Live';
import SearchResults from './components/SearchResults';
import SearchWatchPage from './components/SearchWatchPage';
import TrendingWatch from './components/TrendingWatch';

function App() {
  return (
   <>
     <RouterProvider router={appRouter}/>
   </>
  );
}

const appRouter=createBrowserRouter([
  {
     path:'/',
     element:<Home/>
  },
  {
    path:'/watch',
    element:<WatchPage/>
  },
  {
    path:'*',
    element:<ErrorPage/>
  },
  {
    path:'/shorts',
    element:<Shorts/>
  },
  {
    path:'/trending',
    element:<Music/>
  },
  {
    path:'/live',
    element:<Live/>
  },
  {
    path:'/search-results',
    element:<SearchResults/>
  },
  {
    path:'/searchwatch',
    element:<SearchWatchPage/>
  },
  {
    path:'/trendingwatch',
    element:<TrendingWatch/>
  }
])

export default App;
