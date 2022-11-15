import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'login',
          element: <Login />,  
        },
        {
          path: 'signUp',
          element: <SignUp />,  
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
