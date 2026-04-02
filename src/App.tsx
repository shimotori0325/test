import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Test } from "./test/Test";
import { TestA } from "./test/TestA";
import { TestB } from "./test/TestB";
import { NotFound } from "./test/NotFound";
import { Layout } from "./test/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/t" replace />} />
        <Route path="/t" element={<Layout />}>
          <Route index element={<Test />} />
          <Route path="test-a/:id" element={<TestA />} />
          <Route path="test-b/:id" element={<TestB />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;