import React, { useState } from 'react';
import './KanbanBoard.css';
import { Link } from 'react-router-dom';
import point50 from '../../asserts/point-5.svg'
import point60 from '../../asserts/point-2.svg'
import point70 from '../../asserts/point-7.svg'
import add20 from '../../asserts/add1.svg'
import dots10 from '../../asserts/dots.svg'
import profile60 from '../../asserts/profile-1.png'
import profile70 from '../../asserts/profile-2.png'
import profile80 from '../../asserts/profile-3.png'
import profile90 from '../../asserts/profile-4.png'
import profile100 from '../../asserts/profile-6.png'
import comments from '../../asserts/comments.svg'
import files from '../../asserts/files.svg'
import image10 from '../../asserts/image-1.png'
import image20 from '../../asserts/image-2.png'
import image30 from '../../asserts/image-3.png'
import image40 from '../../asserts/image-4.png'

const initialColumns = {
  todo: {
    title: 'To Do',

    tasks: [
      { id: 'task-1', title: 'Low', title1: 'Brainstorming', content: "Brainstorming brings team members' diverse experience into play.", profile1: profile60, profile2: profile90, profile3: profile80 },
      { id: 'task-2', title: 'High', title1: 'Research', content: "User research helps you to create an optimal product for users.", profile1: profile70, profile2: profile100, },
      { id: 'task-3', title: 'Low', title1: 'Wireframes', content: "Low fidelity wireframes include the most basic content and visuals.", profile1: profile70, profile2: profile80, profile3: profile60 },
    ],
    image1: point50,
    image2: dots10,
    image3: add20
  },
  inProgress: {
    title: 'In Progress',
    tasks: [
      { id: 'task-4', title: 'Low', title1: 'Onboarding Illustrations ', image10: image10, profile1: profile80, profile2: profile90, profile3: profile60 },
      { id: 'task-5', title: 'Low', title1: 'Moodboard', profile1: profile80, image20: image20, image30: image30 },
    ],
    image1: point60,
    image2: dots10,

  },
  done: {
    title: 'Done',
    tasks: [
      { id: 'task-6', title: 'Complected', title1: 'Mobile App Design', profile1: profile60, profile2: profile70, image40: image40 },
      { id: 'task-7', title: 'Complected', title1: 'Design System', content: 'It just needs to adapt the UI from what you did before ', profile1: profile60, profile2: profile80, profile3: profile90 }

    ],
    image1: point70,
    image2: dots10,

  },
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);

  const handleDragStart = (event, task, columnId) => {
    event.dataTransfer.setData('task', task.id);
    event.dataTransfer.setData('columnId', columnId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, columnId) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('task');
    const sourceColumnId = event.dataTransfer.getData('columnId');

    if (sourceColumnId !== columnId) {
      const sourceColumn = { ...columns[sourceColumnId] };
      const sourceTasks = [...sourceColumn.tasks];
      const taskIndex = sourceTasks.findIndex((task) => task.id === taskId);
      const [removedTask] = sourceTasks.splice(taskIndex, 1);

      const targetColumn = { ...columns[columnId] };
      const targetTasks = [...targetColumn.tasks];
      targetTasks.push(removedTask);

      const updatedColumns = {
        ...columns,
        [sourceColumnId]: { ...sourceColumn, tasks: sourceTasks },
        [columnId]: { ...targetColumn, tasks: targetTasks },
      };
      setColumns(updatedColumns);
    }
  };

  return (
    <div className='container-200'>
      <div className="kanban-board">
        <div className='container-100'>
          {Object.entries(columns).map(([columnId, column]) => (
            <div className='box-100'>
              <div
                key={columnId}
                className="kanban-column"
                onDragOver={(event) => handleDragOver(event)}
                onDrop={(event) => handleDrop(event, columnId)}
              >
                <div className={`title-box ${columnId}`}>
                  <div className='inner-title-box'>
                    <img src={column.image1} alt="" />
                    <p>{column.title}</p>
                    <span className="count">{column.tasks.length}</span> {/* Add count */}
                  </div>
                  <btn><img className='image-3' src={column.image3}></img></btn>
                </div>
                <div className='task-box-100'>
                  {column.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="kanban-task"
                      draggable
                      onDragStart={(event) => handleDragStart(event, task, columnId)}
                    >
                      <div className='box-100'>
                        <div className='inner-box-100'>
                          <div className='para-box-100'>
                            <p className={`para-box ${columnId}`}>
                              {task.title}
                            </p>
                          </div>
                          <img className='bots-100' src={column.image2}></img>
                        </div>

                      </div>
                      <h6 className='h6-box'>{task.title1}</h6>
                      <p className='p-box'>{task.content}</p>
                      <img className="image-10" src={task.image10}></img>
                      <div className="image-box">
                        <img className="image-20" src={task.image20}></img>
                        <img className="image-20" src={task.image30}></img>
                      </div>
                      <img className="image-40" src={task.image40}></img>

                      <div className={`box-101 ${columnId}`}>

                        <div className="profile-100">
                          <Link className="link-1 " to="">{task.profile1 && <img className='user-1' src={task.profile1} alt="Profile 1" />}</Link>
                          <Link className="link-1 " to="">{task.profile2 && <img className='user-2' src={task.profile2} alt="Profile 2" />}</Link>
                          <Link className="link-1 " to="">{task.profile3 && <img className='user-3' src={task.profile3} alt="Profile 3" />}</Link>
                        </div>
                        <div className="profile-101">
                          <Link className="link-2 " to=""><img className='user-1' src={comments} alt="" /><p className="para-101">Comments</p></Link>
                          <Link className="link-2 " to=""><img className='user-1' src={files} alt="" /><p className="para-101"> Files</p></Link>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
