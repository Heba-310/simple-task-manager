import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState(''); 



  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, input]);
    setInput(''); 
  };
  const deletey = (index)=>{
    setTasks(tasks.filter((z,i)=>{  return i !==index;}))
      
     
  }



   const show = () => {
    return (
      <table border="1px">
        <tbody>
          {tasks.map((x, index) => (
            <tr key={index}>
              <td>{x}</td>
              <td>
              <button onClick={()=>{deletey(index)}}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
      setValue(true);
    }
  };

 

  return (
    <div className="row my-3">
      <div className='col-12 d-flex justify-content-center align-items-center  gap-3'>
    <div className="App">
      <input
        type="text"
        placeholder="Add a new task"
       
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => { addTask(); setValue(true); }}>+</button>
      {value && show()}
    </div>
</div>
</div>
  );
}

export default App;
