import React,{useState, UseState} from "react";


const Semaforo = () => {
    const [color,setcolor] = useState (null);
    const lights = ["red","yellow","green",]




    return(
        <div className="d-flex flex-colum aling-items-center">
            <div className="headlight">
                {lights.map((lightstrafficlight)=>(
                    <div
                    key={lightstrafficlight}
                    onClick={()=> setcolor(lightstrafficlight)}
                    className={`lights ${lightstrafficlight} ${color === lightstrafficlight ? "glow" : "" }`}
                    /> 
                )
            
            )};
            
            </div>
        </div>
        
    


    );
};

export default Semaforo;
