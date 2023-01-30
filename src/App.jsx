import React from "react"
import { Route, Router, Routes } from "react-router-dom"
import Ask from "./pages/Ask"
import Bell from "./pages/Bell"
import Find from "./pages/Find"
import Tools from "./pages/Tools"
import You from "./pages/You"
import Footer from "./shared/Footer"
import Header from "./shared/Header"
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Ask />} />
        <Route path="/find" element={<Find />} />
        <Route path="/you" element={<You />} />
        <Route path="/bell" element={<Bell />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App


