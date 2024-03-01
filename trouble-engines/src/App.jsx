import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Home from '../components/HomePage.jsx'
import PostPage from '../components/PostPage.jsx'
import NewPost from '../components/NewPost.jsx';
import UpdatePost from '../components/UpdatePost.jsx';
import SignUp from '../components/SignUp.jsx';
import UserPage from '../components/UserPage.jsx';
import LogIn from '../components/LogIn.jsx'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='/createPost' element={<NewPost />} />
        <Route path='/updatePost/:id' element={<UpdatePost />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/userPage' element={<UserPage />}  />
        <Route path='/logIn' element={<LogIn />} />
      </Routes>
    </Router>

    
  )
}

export default App
