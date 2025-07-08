import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import User from './components/User/User.jsx'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true, // <-- use index for Home
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
//same
//how to take user id
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home/> } />
      <Route path="/about" element={<About/> } />
      <Route path="/contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />} />
    </Route>
  )
)
//loader is used to api call when user move cursor move to a link
//parameter user id can be accessed in components User

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router } />
  </StrictMode>,
)
