import React,{useEffect} from 'react'
// import axios from 'axios';

import { createChart } from "lightweight-charts";

// REPLACE EVERYTHING BELOW HERE

const Chart = (props) =>{
    
let randomFactor = 25 + Math.random() * 25;
const samplePoint = i =>
    i *
        (0.5 +
            Math.sin(i / 1) * 0.2 +
            Math.sin(i / 2) * 0.4 +
            Math.sin(i / randomFactor) * 0.8 +
            Math.sin(i / 50) * 0.5) +
    200 +
    i * 2;

function generateData(
    numberOfCandles = 500,
    updatesPerCandle = 5,
    startAt = 5000
) {
    const createCandle = (val, time) => ({
        time,
        open: val,
        high: val,
        low: val,
        close: val,
    });

    const updateCandle = (candle, val) => ({
        time: candle.time,
        close: val,
        open: candle.open,
        low: Math.min(candle.low, val),
        high: Math.max(candle.high, val),
    });

    randomFactor = 25 + Math.random() * 25;
    const date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));
    const numberOfPoints = numberOfCandles * updatesPerCandle;
    const initialData = [];
    const realtimeUpdates = [];
    let lastCandle;
    let previousValue = samplePoint(-1);
    for (let i = 0; i < numberOfPoints; ++i) {
        if (i % updatesPerCandle === 0) {
            date.setUTCDate(date.getUTCDate() + 1);
        }
        const time = date.getTime() / 1000;
        let value = samplePoint(i);
        const diff = (value - previousValue) * Math.random();
        value = previousValue + diff;
        previousValue = value;
        if (i % updatesPerCandle === 0) {
            const candle = createCandle(value, time);
            lastCandle = candle;
            if (i >= startAt) {
                realtimeUpdates.push(candle);
            }
        } else {
            const newCandle = updateCandle(lastCandle, value);
            lastCandle = newCandle;
            if (i >= startAt) {
                realtimeUpdates.push(newCandle);
            } else if ((i + 1) % updatesPerCandle === 0) {
                initialData.push(newCandle);
            }
        }
    }

    return {
        initialData,
        realtimeUpdates,
    };
}
      
    //   var chart = createChart(document.getElementById("root"));
      const chartOptions = {
        layout: {
            textColor: 'black',
            background: { type: 'solid', color: 'white' },
        },
        height: 200,
    };
    const container = document.getElementById('chart');
const chart = createChart(container, chartOptions);
      var mainSeries = chart.addLineSeries({
        priceFormat: {
          minMove: 1,
          precision: 0
        }
      });
      const series = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
    });
    
    const data = generateData(2500, 20, 1000);
    series.setData(data.initialData);
    chart.timeScale().fitContent();
    chart.timeScale().scrollToPosition(5);
    
    // simulate real-time data
    function* getNextRealtimeUpdate(realtimeData) {
        for (const dataPoint of realtimeData) {
            yield dataPoint;
        }
        return null;
    }
    const streamingDataProvider = getNextRealtimeUpdate(data.realtimeUpdates);
    
    const intervalID = setInterval(() => {
        const update = streamingDataProvider.next();
        if (update.done) {
            clearInterval(intervalID);
            return;
        }
        series.update(update.value);
    }, 100);

//       const chartOptions = { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } } };
// // const chart = createChart(document.getElementById('root'), chartOptions);
// const candlestickSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });

// const data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];
// candlestickSeries.setData(data);

// chart.timeScale().fitContent();
      
    useEffect(() => {
    //   mainSeries.setData(generateData());
    },[]);

    return(
        <>
        <div id="chart"></div>
        </>

    )
}

export default Chart