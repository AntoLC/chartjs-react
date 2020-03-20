import React from "react";
import { Doughnut, Bubble, Polar , HorizontalBar } from 'react-chartjs-2';
import DataChartJS from '../../data/data.chartJS';
import './ChartJS.css';


const ChartJS = () => {
    return (
        <div className="container-chart">
            <Doughnut data={DataChartJS.data_camembert} options={{
                responsive: true,
                maintainAspectRatio: true,
            }}/>
            <Polar data={DataChartJS.data_camembert} options={{
                responsive: true,
                maintainAspectRatio: true,
            }}/>
            <Bubble data={DataChartJS.data_chart} options={{
                responsive: true,
                maintainAspectRatio: true,
            }}/>
            <HorizontalBar data={DataChartJS.data_chart} options={{
                responsive: true,
                maintainAspectRatio: true,
            }}/>
        </div>
    );
}

export default ChartJS;


