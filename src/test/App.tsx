import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Test } from "./test/Test";
import { TestA } from "./test/TestA";
import { TestB } from "./test/TestB";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/testA/:id" element={<TestA />} />
        <Route path="/testB/:id" element={<TestB />} />
      </Routes>
    </Router>
  )
  
}

export default App
