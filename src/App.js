import React,{useState} from 'react';
import ListItem from './ListItem';
import './list.css';

function App() {
  const [work, setwork] = useState("");
  const [workarray, setworkarray] = useState([]);
    const changeWork = (e)=>{
        setwork(e.target.value);
    }
    const setTodoWork = ()=>{
     setworkarray((p)=>{
        return [...p,work];
     })
    }
    const deleteMama =(id)=>{
      setworkarray((p)=>{
        return(
        p.filter((elem,i)=>{
          return i!== id;
        }));
      });
    }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="card mt-5">
              <div>
                <div className="card-header">
                  <h1 className="text-success text-center text-uppercase">Todo list app</h1>
                  <p className="text-center text-muted">Created with React Js</p>
                  <input className="from-control" placeholder="Enter a Work" onChange={changeWork}/>
                  <button className="btn btn-success m-3" onClick={setTodoWork}>Enter</button>
                </div>
                <div className="card-content">
                  <ol>
                  {workarray.map((i,d,a)=>{
                    return(
                    <ListItem work={i} key={d} id={d} delete={deleteMama}/>
                    )
                  })}
                    
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
