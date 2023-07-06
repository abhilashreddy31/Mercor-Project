import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import KanbanBoard from './components/m/KanbanBoard';
import Content from './components/content/content';
function App() {
  return (
    <Router>
      
    <div className="row">
      <div className="column-1">
        <Sidebar></Sidebar>
      
        <div className='row-1'>
            <Navbar />
            <Main></Main>
            <KanbanBoard></KanbanBoard>
            {/* <Content></Content> */}
        </div>
        
      </div>
    </div>
  </Router>
  );
}

export default App;
