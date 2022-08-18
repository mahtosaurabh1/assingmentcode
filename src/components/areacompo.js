
import './areacompo.css'
import React, { useState} from "react";
import Chart from "react-apexcharts";


function Areacompo() {
    const [state, setState] = useState({
      options: {
        colors: ["#E91E63", "#FF9800"],
        chart: {
          id: "basic-bar",
        },
        title:{ text:"Market share "
            } ,
         


        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "Saddle",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: "DODO",
          data: [3, 60, 35, 80, 49, 70, 20, 81],
        },
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
        <div className="area-container">
        <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="650"
      />
        </div>
    )
}

export default Areacompo