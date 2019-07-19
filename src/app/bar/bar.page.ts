import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: 'bar.page.html',
  styleUrls: ['bar.page.scss'],
})
export class BarPage {
  constructor() { }

  ionViewDidEnter() {
    this.plotSimpleBarChart();
    this.plotStackedBarChart();
    this.plotNegativeBarChart();
    this.plotVerticalBarChart();
  }

  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }

  plotStackedBarChart() {
    let myChart = HighCharts.chart('stacked', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Stacked bar chart'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'John',
        type: undefined,
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        type: undefined,
        data: [2, 2, 3, 2, 1]
      }, {
        name: 'Joe',
        type: undefined,
        data: [3, 4, 4, 2, 5]
      }]
    });
  }

  plotNegativeBarChart() {
    let myChart = HighCharts.chart('negative', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Column chart with negative values'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'John',
        type: undefined,
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        type: undefined,
        data: [2, -2, -3, 2, 1]
      }, {
        name: 'Joe',
        type: undefined,
        data: [3, 4, 4, -2, 5]
      }]
    });
  }

  plotVerticalBarChart() {
    let myChart = HighCharts.chart('vertical', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }

}
