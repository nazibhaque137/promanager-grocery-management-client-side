import React, { useEffect, useRef, useState } from 'react';
import './Chart.css';

import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const Chart = ({ filter, chartId, height, width }) => {

    const sdk = new ChartsEmbedSDK({ baseUrl: 'https://charts.mongodb.com/charts-project-0-dxbma' });

    const chartDiv = useRef(null);

    const [rendered, setRendered] = useState(false);

    const [chart] = useState(sdk.createChart({ chartId: "6278aeca-4036-4f29-8522-61824aafa948", height: 400, width: 1000, theme: "dark" }));

    useEffect(() => {

        chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));

    }, [chart]);

    useEffect(() => {

        if (rendered) {

            chart.setFilter(filter).catch(err => console.log("Error while filtering.", err));

        }

    }, [chart, filter, rendered]);

    return (
        <div className="chart-container">

    <div className="chart" ref={chartDiv} />

        </div>
    
    );

};

export default Chart;
