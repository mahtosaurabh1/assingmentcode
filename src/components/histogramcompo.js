import React, { useEffect,useState} from "react";
import Chart from "react-apexcharts";
import './histogram.css'
function Histogram(){

    const [state, setState] = useState({
        options: {
          colors: ["#E91E63", "#FF9800","#319DA0","#FFB200","#C21010"],
          chart: {
            id: "basic-bar",
          },
          title:{ text:"Daily DEX Volume"
              } ,

            xaxis: {
            categories: [1, 9, 3, 4, 5, 6,7,8],
          },
        },
        series: [
          {
            name: "Uniswap",
            data: [90, 95, 96, 85, 85, 86, 84,86],
          },
         
          {
            name: "mStable",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "Converange",
            data: [3, 60, 35, 80, 49, 70, 20, 81],
          },{
            name:"Balance",
            data:[3, 60, 35, 80, 40, 7, 2, 81]
          }
          ,{
            name:"DODO",
            data:[10,20,30,40,50,60,70]
          },{
            name:"0x Native",
            data:[51,22,34,44,54,65,74]
          },
          {
            name:" Native",
            data:[51,22,34,44,54,65,74]
          }
        ],
      })


    return(
        <div className="histo-container">
         <Chart
            options={state.options}
            series={state.series}
            type="histogram"
            width="800"
          />
        </div>
    )
}

export default Histogram