import React, {useState, useEffect} from 'react';
import './style.css';

const App = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(()=>{
    console.log("This is the useEffect Hook message");
    document.title = `chat: ${myNum}`;
    
  });
  //},[]);  For dependency

    return (
    <>
        <div className='heading_style'>
          <h2>Counter App with React Hooks: useState, useEffect</h2>
        </div>
        
        <div className='container'>
          <p className='output'>{myNum}</p>
          <button className="button" onClick={()=>{
           return setMyNum(myNum+1);
          }}>INCR</button>
          <span></span>
                 
          <button className="button" onClick={()=>{
            return (
            <>
              {myNum > 0?setMyNum(myNum-1):setMyNum(0)};
            </>
            );
          }}>DECR</button>
          <span></span>
          
        </div>
        
    </>
  )
};

export default App