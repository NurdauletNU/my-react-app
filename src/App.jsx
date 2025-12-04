import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage, {jobLoader} from './pages/JobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';  

const App = () => {
  const addJob = async (newJob) => {
    console.log('New Job Added:', newJob)
  };


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage />} loader = {jobLoader}/>
      <Route path='*' element={<NotFoundPage />}/>


  </Route>)
);

return <RouterProvider router={router} />;
};


export default App