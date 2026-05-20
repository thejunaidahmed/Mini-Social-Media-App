import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

function App() {
  return (
    <Routes>
      <Route path='/' element={<CreatePost />} />
      <Route path='/feed' element={<Feed />} />
    </Routes>
  )
}

export default App