import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Cases',
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: 'Recovered',
          data: [1, 5, 6, 36, 17, 23, 3]
        },
        {
          name: 'Deaths',
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#adff2f', '#ff0000'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Coronavirus statistics',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month'
          }
        },
        yaxis: {
          title: {
            text: 'Temperature'
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={this.state.options} series={this.state.series} type="line" width="500" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;