import React,{useEffect, useRef, useState} from 'react'
import axios from 'axios';

import { createChart, CrosshairMode, LineStyle , createChartEx, TickMarkType} from "lightweight-charts";
import dayjs from 'dayjs';
const holiday ={
    "17/04/2024":true,
    "01/05/2024":true,
    "17/06/2024":true,
    "17/07/2024":true,
    "15/08/2024":true,
    "02/10/2024":true,
    "01/11/2024":true,
    "01/11/2024":true,
    "15/11/2024":true,
    "25/12/2024":true,
}
// REPLACE EVERYTHING BELOW HERE

const Chart = (props) =>{
    let dataChart = useRef();
    const urlParams = new URLSearchParams(window.location.search);
    const instrumentId = urlParams.get('instrument_id');
    const marketType = urlParams.get('market_type');
    const chartHeight = urlParams.get('window_height');
    const isHoliday = ()=>{
        return holiday[dayjs().format('DD/MM/YYYY')] || dayjs().day()===0 ||dayjs().day()===6
      }
    
    const shouldPoll = () => {
        const startTime = dayjs().diff(dayjs(dayjs().format('YYYY-MM-DD')), 'second');
        return startTime > 33300 && startTime < 55800 && !isHoliday();
    };

    const fetchLTP = ()=>{
        axios.post('https://api.mystox.co.in/api/v1/instrument/real-time/',{instrument_ids:[instrumentId],market_type:marketType})
        .then((res)=>{
            // console.log('chartData',dataChart)
            const data = dataChart.current
            const candle = res.data[`${instrumentId}`];
            const lastTime = data[data.length-1]['time'];
            const currentTime = dayjs().unix();
            let newTime = currentTime >= lastTime + 60 ? lastTime + 60 : lastTime
            console.log('res',{
                time: newTime,
                close: candle.last_price,
                open: candle.ohlc.open,
                low: Math.min(candle.ohlc.low, candle.last_price),
                high: Math.max(candle.ohlc.high, candle.last_price),
            });
            if(currentTime >= lastTime + 60 ){
                dataChart.current= dataChart.current.concat([{
                    time: newTime,
                    close: candle.last_price,
                    open: candle.ohlc.open,
                    low: Math.min(candle.ohlc.low, candle.last_price),
                    high: Math.max(candle.ohlc.high, candle.last_price),
                }])
            }
            series.update({
                time: newTime,
                close: candle.last_price,
                open: candle.ohlc.open,
                low: Math.min(candle.ohlc.low, candle.last_price),
                high: Math.max(candle.ohlc.high, candle.last_price),
            });

        }).catch((err)=>{
            console.log('err',err)
        })
    }
    const  fetchData = ()=>{
        const startTime = dayjs().diff(dayjs(dayjs().format('YYYY-MM-DD')), 'second');
        const from_date = startTime > 33300 && !isHoliday()? dayjs().format('DD/MM/YYYY') : dayjs().subtract(1,'day').format('DD/MM/YYYY') 
        axios.post('https://api.mystox.co.in/api/v1/instrument/historical-data/',
            {
                instrument_key:instrumentId,
                from_datetime: from_date+" 08:59:00",
                to_datetime:from_date+' 15:30:00',
                interval:'minute',
                market_type:marketType
        })
        .then((res)=>{
            const formatedData = res.data.map((el)=>{
                const [date,time] = el.date.split(' ');
                const reversedate = date.split('-').reverse().join('-');
                const newtime = dayjs(reversedate+' '+ time).unix();
                return({
                    ...el,
                    time:newtime
                });
            })
            dataChart.current = formatedData
            console.log('formatedData',formatedData)
            if(dataChart.current.length>0){
                series.setData(formatedData);
                // chart.timeScale().fitContent();
                chart.timeScale().scrollToPosition(5);
            }
        }).catch((err)=>{
            console.log('err',err)
        })
    }
    const chartOptions = {
        layout: {
            textColor: 'black',
            background: { type: 'solid', color: 'white' },
        },
        height: chartHeight,
        localization: {
            // dateFormat: 'yyyy-MM-dd HH:mm' // custom option
            // timeFormatter: businessDayOrTimestamp => {
            //     return dayjs(businessDayOrTimestamp*1000).format("YY-MM-DD HH:mm:ss"); //or whatever JS formatting you want here
            // }
            locale:'en-IN',
            timeFormatter:(time)=>{
                const date = new Date(time*1000);
                const dateFormatter = new Intl.DateTimeFormat(navigator.language,{
                    hour: "numeric",
                    minute: "numeric",
                    month: "short",
                    day:"numeric",
                    year:"2-digit"
                })
                return dateFormatter.format(date)
            }
        },
    };
    const container = document.getElementById('chart');
    const chart = createChart(container, chartOptions);
    const series = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
    });
    chart.timeScale().applyOptions({
        timeVisible:true,
        tickMarkFormatter:(time, tickMarkType, locale)=>{
            const date = new Date(time*1000);
            // const myDate = date.toLocaleDateString("en-IN");
            // return myDate
            switch(tickMarkType){
                case TickMarkType.Year:
                    return date.getFullYear();

                case TickMarkType.Month:
                    const monthFormatter = new Intl.DateTimeFormat(locale,{month:"short"})
                    return monthFormatter.format(date)

                case TickMarkType.DayOfMonth:
                    return date.getDate();

                case TickMarkType.Time:
                    const timeFormatter = new Intl.DateTimeFormat(locale,{
                        hour: "numeric",
                        minute: "numeric"
                    })

                    return timeFormatter.format(date)

                case TickMarkType.TimeWithSeconds:
                    const timeWithSecondsFormatter = new Intl.DateTimeFormat(locale,{
                        hour: "numeric",
                        minute: "numeric",
                        second:'numeric'
                    })
                    return timeWithSecondsFormatter.format(date);
                default:
                    console.log('Oops sorry')

            }

        }
    })
    // chart.applyOptions({
    //     crosshair: {
    //       // Change mode from default 'magnet' to 'normal'.
    //       // Allows the crosshair to move freely without snapping to datapoints
    //       mode: CrosshairMode.Normal,

    //       // Vertical crosshair line (showing Date in Label)
    //       vertLine: {
    //         width: 8,
    //         color: "#C3BCDB44",
    //         style: LineStyle.Solid,
    //         labelBackgroundColor: "#9B7DFF",
    //       },

    //       // Horizontal crosshair line (showing Price in Label)
    //       horzLine: {
    //         color: "#9B7DFF",
    //         labelBackgroundColor: "#9B7DFF",
    //       },
    //     },
    //   });
    
    useEffect(()=>{
        fetchData()
        const intervalID = setInterval(() => {
            if (shouldPoll()) {
                fetchLTP()
              } else {
                clearInterval(intervalID);
              }
        }, 1000);
        return()=>{
            clearInterval(intervalID);
        }
    },[])
       
    return(
        <>
        {/* <div id="chart"></div> */}

        </>

    )
}

export default Chart