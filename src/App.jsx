import { AddBlog } from "./components/Addblog";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

function App() {
  return (

    <><Header /><Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/addblog" element={<AddBlog />}></Route>

    </Routes></>


  );
}

export default App;