import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(()=> {
    let timer = setTimeout(()=>{
      setTime(new Date());
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
  }, [time, setTime])

  return <div>
    <h1>
      Use Effect Example: {time.toLocaleTimeString()}
    </h1>
  </div>
};

export default EffectComponent;