import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import KanbanBoard from './components/m/KanbanBoard';
// import Content from './components/content/content';
import './App.css'
function App() {
  return (
    <Router >
      
  
      <div className="container">
        <div className='sidebar'>
          <Sidebar></Sidebar>
        </div>
        
      
        <div className='navbar'>
            <Navbar />
            <Main></Main>
            <KanbanBoard></KanbanBoard>
            {/* <Content></Content> */}
        </div>
        
      
    </div>
  </Router>
  );
}

export default App;
