import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Home from '../components/HomePage.jsx'
import PostPage from '../components/PostPage.jsx'
import NewPost from '../components/NewPost.jsx';
import UpdatePost from '../components/UpdatePost.jsx';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='/createPost' element={<NewPost />} />
        <Route path='/updatePost/:id' element={<UpdatePost />} />
      </Routes>
    </Router>

    
  )
}

export default App
