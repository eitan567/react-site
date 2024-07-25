import React from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import { useState, useEffect, useRef } from 'react';

const generateData = (count) => {
  const data = [];
  let time = new Date(2023, 0, 1).getTime();
  let price = 300;
  let volume = 1000000;

  for (let i = 0; i < count; i++) {
    const open = price + Math.random() * 20 - 10;
    const close = open + Math.random() * 20 - 10;
    const high = Math.max(open, close) + Math.random() * 10;
    const low = Math.min(open, close) - Math.random() * 10;
    
    data.push({
      time: new Date(time).toISOString().split('T')[0],
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      volume: Math.floor(volume + Math.random() * 1000000 - 500000),
    });

    time += 24 * 60 * 60 * 1000; // Add one day
    price = close;
    volume = Math.max(100000, volume + Math.random() * 200000 - 100000);
  }

  return data;
};

const calculateSMA = (data, period) => {
  const sma = [];
  for (let i = period - 1; i < data.length; i++) {
    const sum = data.slice(i - period + 1, i + 1).reduce((acc, val) => acc + val.close, 0);
    sma.push({ time: data[i].time, value: sum / period });
  }
  return sma;
};

const StockChart = () => {
  const chartContainerRef = useRef();
  const chartRef = useRef(null);
  const [data] = useState(generateData(100));

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.applyOptions({ 
          width: chartContainerRef.current.clientWidth 
        });
      }
    };

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { type: ColorType.Solid, color: 'white' },
        textColor: 'black',
      },
      grid: {
        vertLines: { color: 'rgba(197, 203, 206, 0.5)' },
        horzLines: { color: 'rgba(197, 203, 206, 0.5)' },
      },
      rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
    });

    chartRef.current = chart;

    const candleSeries = chart.addCandlestickSeries({
      upColor: 'green',
      downColor: 'red',
      borderVisible: false,
      wickUpColor: 'green',
      wickDownColor: 'red',
    });
    candleSeries.setData(data);

    const volumeSeries = chart.addHistogramSeries({
      color: '#26a69a',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
    });
    volumeSeries.setData(data.map(d => ({
      time: d.time,
      value: d.volume,
      color: d.close > d.open ? 'rgba(0, 150, 136, 0.8)' : 'rgba(255,82,82, 0.8)',
    })));

    const sma20 = chart.addLineSeries({ color: 'blue', lineWidth: 2 });
    sma20.setData(calculateSMA(data, 20));

    const sma50 = chart.addLineSeries({ color: 'red', lineWidth: 2 });
    sma50.setData(calculateSMA(data, 50));

    chart.timeScale().fitContent();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />
  );
};
export default StockChart;