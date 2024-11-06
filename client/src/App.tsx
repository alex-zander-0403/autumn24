import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostPage from './components/pages/PostPage';
import StatPage from './components/pages/StatPage';
import Layout from './components/Layout';
import PostContextProvider from './context/PostContextProvider';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <PostPage /> },
        { path: '/stat', element: <StatPage /> },
      ],
    },
  ]);

  return (
    <PostContextProvider>
      <RouterProvider router={router} />
    </PostContextProvider>
  );
}

export default App;
