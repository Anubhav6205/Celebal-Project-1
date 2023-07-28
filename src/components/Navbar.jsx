import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../context/ContentProvider";
import { FaBars } from "react-icons/fa";
export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval=setInterval(()=>{
      const timestamp=Date.now();
      const date=new Date(timestamp);
      const currentTime = (date.getHours()>=12 ?( (date.getHours()-12)>=10?(date.getHours()-12):(('0'+date.getHours()-12)) ):date.getHours() )+ ':' + (date.getMinutes()<=10?('0'+(date.getMinutes())):date.getMinutes()) + ':' + (date.getSeconds()<=10?('0'+date.getSeconds()):date.getSeconds());
      setTime(currentTime);
      
    },1000)

    return ()=>{
      clearInterval(interval)
    }
    
    
  }, []);

  const handleDrawer=()=>{
    setDrawer((prev)=>!prev);
    console.log(drawer);
  }

  const { setAddTodoDialog,setSearch,search,drawer,setDrawer } = useContext(ContentContext);
  return (
    <div className="navbar-container">
      <div className="navbar-container-hamburger">
        <FaBars onClick={()=>handleDrawer()}/>
      </div>
      <div className="navbar-container-input">
        <input type="text" placeholder="search"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <div className="navbar-container-time">
        {time}

      </div>
      <div className="navbar-container-button">
        {" "}
        <button onClick={() => setAddTodoDialog(true)}>ADD TASK</button>
      </div>
    </div>
  );
}
