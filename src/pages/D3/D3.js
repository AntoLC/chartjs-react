import React, {useEffect} from 'react';
//import SimpleGraph from "./SimpleGraph";
import SimpleGraph from './SimpleGraph'


const D3 = () => {
    useEffect(() => {
        new SimpleGraph("chart1", {
            "xmax": 60, "xmin": 0,
            "ymax": 40, "ymin": 0, 
            "title": "Simple Graph1",
            "xlabel": "X Axis",
            "ylabel": "Y Axis"  
        });
    });

    return (
        <div id="chart1" className="chart"></div>
    );
};

export default D3;