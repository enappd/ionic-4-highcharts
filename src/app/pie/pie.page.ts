import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: 'pie.page.html',
  styleUrls: ['pie.page.scss'],
})
export class PiePage {
  constructor() { }

  ionViewDidEnter() {
    this.plotSimplePieChart();
    this.plotSimpleDonutChart();
    this.plotSemiDonutChart();
  }

  plotSimplePieChart() {
    let myChart = HighCharts.chart('simplePie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    });
  }

  plotSimpleDonutChart() {
    var colors = HighCharts.getOptions().colors,
      categories = [
        'Chrome',
        'Firefox',
        'Internet Explorer',
        'Safari',
        'Edge',
        'Opera',
        'Other'
      ],
      data = [
        {
          y: 62.74,
          color: colors[2],
          drilldown: {
            name: 'Chrome',
            categories: [
              'Chrome v65.0',
              'Chrome v64.0',
              'Chrome v63.0',
              'Chrome v62.0',
              'Chrome v61.0',
              'Chrome v60.0',
              'Chrome v59.0',
              'Chrome v58.0',
              'Chrome v57.0',
              'Chrome v56.0',
              'Chrome v55.0',
              'Chrome v54.0',
              'Chrome v51.0',
              'Chrome v49.0',
              'Chrome v48.0',
              'Chrome v47.0',
              'Chrome v43.0',
              'Chrome v29.0'
            ],
            data: [
              0.1,
              1.3,
              53.02,
              1.4,
              0.88,
              0.56,
              0.45,
              0.49,
              0.32,
              0.29,
              0.79,
              0.18,
              0.13,
              2.16,
              0.13,
              0.11,
              0.17,
              0.26
            ]
          }
        },
        {
          y: 10.57,
          color: colors[1],
          drilldown: {
            name: 'Firefox',
            categories: [
              'Firefox v58.0',
              'Firefox v57.0',
              'Firefox v56.0',
              'Firefox v55.0',
              'Firefox v54.0',
              'Firefox v52.0',
              'Firefox v51.0',
              'Firefox v50.0',
              'Firefox v48.0',
              'Firefox v47.0'
            ],
            data: [
              1.02,
              7.36,
              0.35,
              0.11,
              0.1,
              0.95,
              0.15,
              0.1,
              0.31,
              0.12
            ]
          }
        },
        {
          y: 7.23,
          color: colors[0],
          drilldown: {
            name: 'Internet Explorer',
            categories: [
              'Internet Explorer v11.0',
              'Internet Explorer v10.0',
              'Internet Explorer v9.0',
              'Internet Explorer v8.0'
            ],
            data: [
              6.2,
              0.29,
              0.27,
              0.47
            ]
          }
        },
        {
          y: 5.58,
          color: colors[3],
          drilldown: {
            name: 'Safari',
            categories: [
              'Safari v11.0',
              'Safari v10.1',
              'Safari v10.0',
              'Safari v9.1',
              'Safari v9.0',
              'Safari v5.1'
            ],
            data: [
              3.39,
              0.96,
              0.36,
              0.54,
              0.13,
              0.2
            ]
          }
        },
        {
          y: 4.02,
          color: colors[5],
          drilldown: {
            name: 'Edge',
            categories: [
              'Edge v16',
              'Edge v15',
              'Edge v14',
              'Edge v13'
            ],
            data: [
              2.6,
              0.92,
              0.4,
              0.1
            ]
          }
        },
        {
          y: 1.92,
          color: colors[4],
          drilldown: {
            name: 'Opera',
            categories: [
              'Opera v50.0',
              'Opera v49.0',
              'Opera v12.1'
            ],
            data: [
              0.96,
              0.82,
              0.14
            ]
          }
        },
        {
          y: 7.62,
          color: colors[6],
          drilldown: {
            name: 'Other',
            categories: [
              'Other'
            ],
            data: [
              7.62
            ]
          }
        }
      ],
      browserData = [],
      versionsData = [],
      i,
      j,
      dataLen = data.length,
      drillDataLen,
      brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

      // add browser data
      browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
      });

      // add version data
      drillDataLen = data[i].drilldown.data.length;
      for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
          name: data[i].drilldown.categories[j],
          y: data[i].drilldown.data[j],
          color: new HighCharts.Color(data[i].color).brighten(brightness).get()
        });
      }
    }

    // Create the chart
    HighCharts.chart('simpleDonut', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Browser market share, January, 2018'
      },
      subtitle: {
        text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      tooltip: {
        valueSuffix: '%'
      },
      series: [{
        name: 'Browsers',
        type: undefined,
        data: browserData,
        size: '60%',
        dataLabels: {
          formatter: function () {
            return this.y > 5 ? this.point.name : null;
          },
          color: '#ffffff',
          distance: -30
        }
      }, {
        name: 'Versions',
        type: undefined,
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          formatter: function () {
            // display only if larger than 1
            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
              this.y + '%' : null;
          }
        },
        id: 'versions'
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            series: [{
              type: undefined,
            }, {
              id: 'versions',
              type: undefined,
              dataLabels: {
                enabled: false
              }
            }]
          }
        }]
      }
    });
  }

  plotSemiDonutChart() {
    HighCharts.chart('semi', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%'
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Chrome', 58.9],
          ['Firefox', 13.29],
          ['Internet Explorer', 13],
          ['Edge', 3.78],
          ['Safari', 3.42],
          {
            name: 'Other',
            y: 7.61,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });
  }

}
