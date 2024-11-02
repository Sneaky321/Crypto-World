import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useGetHistoricalChartQuery } from '../config/cryptoApiSlice';
import { Button, CircularProgress, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register scales and other components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const CoinsPage = () => {
  const { coinId } = useParams(); // Get the coinId from the URL parameters
  const currentCurrency = useSelector((state) => state.currency.currency); // Get the current currency from Redux state
  const [days, setDays] = useState(1); // Default to 1 day

  // Fetch historical chart data
  const { data: historicData, isLoading, error } = useGetHistoricalChartQuery({
    id: coinId,
    days,
    currency: currentCurrency,
  });

  // Handle loading state
  if (isLoading) return <CircularProgress />;
  
  // Handle error state
  if (error) return <Typography color="error">Error fetching data: {error.message}</Typography>;

  // Handle no historical data
  if (!historicData || !historicData.prices.length) {
    return <Typography>No historical data available.</Typography>;
  }

  // Prepare data for the chart
  const chartData = {
    labels: historicData.prices.map((price) => {
      const date = new Date(price[0]);
      return days === 1 ? date.toLocaleTimeString() : date.toLocaleDateString();
    }),
    datasets: [{
      label: `Price (Past ${days} Days) in ${currentCurrency.toUpperCase()}`,
      data: historicData.prices.map((price) => price[1]),
      borderColor: '#B68DC2', // Green color for the line
      backgroundColor: 'rgba(76, 175, 80, 0.2)', // Light green for the area under the line
      borderWidth: 2,
      pointRadius: 2, // Small radius for points
    }],
  };

  return (
    <Paper elevation={6} style={{ padding: '30px', backgroundColor: '#ffffff', borderRadius: '12px', maxWidth: '800px', margin: '50px auto', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
        {coinId.toUpperCase()} Price Chart
      </Typography>
      <div style={{ position: 'relative', height: '400px', marginBottom: '20px' }}>
        <Line 
          data={chartData} 
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: '#333', // Dark text for the legend
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                },
              },
              tooltip: {
                backgroundColor: '#fff', // White tooltip background
                titleColor: '#333', // Dark tooltip title color
                bodyColor: '#333', // Dark tooltip body color
                borderColor: '#B68DC2', // Green border for tooltip
                borderWidth: 1,
              },
            },
            scales: {
              x: {
                grid: {
                  color: '#e0e0e0', // Light gray grid lines
                },
                ticks: {
                  color: '#333', // Dark x-axis tick color
                },
              },
              y: {
                grid: {
                  color: '#e0e0e0', // Light gray grid lines
                },
                ticks: {
                  color: '#333', // Dark y-axis tick color
                },
              },
            },
          }} 
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
        {[1, 7, 30, 365].map((day) => (
          <Button 
            key={day} 
            onClick={() => setDays(day)} 
            variant={days === day ? "contained" : "outlined"}
            style={{
              margin: '0 10px 10px', // Add space around buttons
              color: days === day ? '#fff' : '#B68DC2', // Text color
              backgroundColor: days === day ? '#B68DC2' : '#ffffff',
              borderColor: '#4CAF50',
              borderRadius: '20px', // Rounded button edges
              padding: '10px 20px', // Padding inside buttons
              transition: 'background-color 0.3s, color 0.3s', // Transition effects
              '&:hover': {
                backgroundColor: days === day ? '#B68DC2' : '#B68DC2', // Slightly darker green for hover
                color: days === day ? '#fff' : '#B68DC2',
              },
            }}
          >
            {day} {day === 1 ? 'Day' : 'Days'}
          </Button>
        ))}
      </div>
    </Paper>
  );
};

export default CoinsPage;
