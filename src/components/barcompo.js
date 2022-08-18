import React, { useState} from "react";
import Chart from "react-apexcharts";
import './barcompo.css'

function Barcompo() {
    const [state, setState] = useState({
      options: {
        colors: ["#E91E63", "#FF9800","FF9899"],
        chart: {
          id: "basic-bar",
        },
        title:{ text:"Monthly DEX volume grouped by year "
            } ,
         


        xaxis: {
          categories: [1,3,5,7,9,11],
        },
      },
      series: [
        {
          name: "2022",
          data: [39608410, 952036899, 120041212, 185238395, 256402859, 325870603],
        },
        {
          name: "2021",
          data: [513553123, 6654107, 1040214831,
            1123229546, 794639812, 1101746600],
        }
        
        ,
        {
          name: "2020",
          data: [199999999,123456789,234567891,34567891,345678912,456789123],
        }
        ,
        {
          name: "2019",
          data: [], 
        }
      ],
    })

    return(
        <div className="bar-container">
        <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="400"
        height="550"
      />
        </div>
    )
}

export default Barcompo