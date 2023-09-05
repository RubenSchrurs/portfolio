import './css/App.scss'
import React from 'react'
import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProjectDetailPage from "./pages/ProjectDetailPage"

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projectDetails/:projectName' element={<ProjectDetailPage/>} />
      </Routes>
    </>
  )
}