import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const pageSize = 9
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <BrowserRouter>
      <>
        <LoadingBar
          color='red'
          height={3}
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />
          apikey={apikey}
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />

          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />

          <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />

          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />

          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />

          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />

          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={9} country="in" category="technology" />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App