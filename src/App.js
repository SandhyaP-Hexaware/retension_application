import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';

function App() {
 return (
    <Router>
    
    <Routes>
    <Route exact path="/" element={<Dashboard />} />
    {/* <Route path="/RetentionForm" element={<RetentionForm />} /> */}
      
    </Routes>
      
      
    </Router>
  );
}

export default App;
