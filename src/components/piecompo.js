import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
import chartdata from './chartdata.json'
import './piecompo.css'
function Piecompo()
{
   const [marketProject, setMarketProject]= useState([]);
   const [marketVolume, setmarketVolume]= useState([]);

   useEffect( ()=>{
       const mProject=[];
       const mVolume=[];
       const getStudentdata= ()=>{
       const resData=chartdata;      
       for(let i=0; i< resData.length; i++)
       {
        mProject.push(resData[i].Project);
        mVolume.push(parseInt(resData[i].Volume));
       }
       setMarketProject(mProject);
       setmarketVolume(mVolume);
        //console.log(resData); 
       }

    getStudentdata();

   },[]);

    return(
        <>
            <div className="chart-container">
                <Chart 
                type="pie"
                width={600}
                height={600}

                series={ marketVolume }                

                options={{
                        title:{ text:"Market share "
                        } ,
                      labels:marketProject                     

                 }}
                >
                </Chart>
            
                </div>
        </>
    );
}
export default Piecompo;