import React, { Component } from 'react';
import Chart from 'react-apexcharts';

interface ISeries {
  name: string;
  data: number[];
}

interface IReports {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

const getDays = (reports: IReports[]) => {
  let cases: string[] = [];
  reports.map((report) => {
    const { date } = report;
    cases = [...cases, date];
  });
  return cases;
};

const getMaximumHeight = (cases: number[]) => {
  return Math.max(...cases);
};

const getMinimumHeight = (cases: number[]) => {
  return Math.min(...cases);
};

const getRecoveredCases = (reports: IReports[]) => {
  let cases: ISeries = { name: 'Recovered', data: [] };
  let { data } = cases;
  reports.map((report) => {
    const { recovered } = report;
    data = [...data, recovered];
  });
  cases = { name: 'Recovered', data };
  return cases;
};

const getDeathCases = (reports: IReports[]) => {
  let cases: ISeries = { name: 'Deaths', data: [] };
  let { data } = cases;
  reports.map((report) => {
    const { deaths } = report;
    data = [...data, deaths];
  });
  cases = { name: 'Deaths', data };
  return cases;
};

const getConfirmedCases = (reports: IReports[]) => {
  let cases: ISeries = { name: 'Confirmed', data: [] };
  let { data } = cases;
  reports.map((report) => {
    const { confirmed } = report;
    data = [...data, confirmed];
  });
  cases = { name: 'Confirmed', data };
  return cases;
};

class App extends Component<IReports[], {}> {
  render() {
    let { reports } = this.props;

    // console.log([getConfirmedCases(reports), getRecoveredCases(reports), getDeathCases(reports)]);
    // console.log(getDays(reports));
    // console.log(getMaximumHeight(getConfirmedCases(reports).data));
    // console.log(getMinimumHeight(getConfirmedCases(reports).data));
    const series = [getConfirmedCases(reports), getRecoveredCases(reports), getDeathCases(reports)];
    const options = {
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
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
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
        size: 0
      },
      xaxis: {
        categories: getDays(reports),
        title: {
          text: 'Days'
        }
      },
      yaxis: {
        title: {
          text: 'Cases'
        },
        min: getMinimumHeight(getConfirmedCases(reports).data),
        max: getMaximumHeight(getConfirmedCases(reports).data)
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="line" width="600" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
