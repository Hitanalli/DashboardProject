import { Component } from '@angular/core';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  ngOnInit() {
    let root = am5.Root.new("chartdiv2");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart:any = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true
    }));

    chart.get("colors").set("step", 3);


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.3,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value1",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueX}: {valueY}\n{previousDate}: {value2}"
      })
    }));

    series.strokes.template.setAll({
      strokeWidth: 2
    });

    series.get("tooltip").get("background").set("fillOpacity", 0.5);

    let series2 = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series 2",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value2",
      valueXField: "date"
    }));
    series2.strokes.template.setAll({
      strokeDasharray: [2, 2],
      strokeWidth: 2
    });

    // Set date fields
    // https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
    root.dateFormatter.setAll({
      dateFormat: "yyyy-MM-dd",
      dateFields: ["valueX"]
    });


    // Set data
    let data = [{
      date: new Date(2019, 5, 12).getTime(),
      value1: 50,
      value2: 48,
      previousDate: new Date(2019, 5, 5)
    }, {
      date: new Date(2019, 5, 13).getTime(),
      value1: 53,
      value2: 51,
      previousDate: "2019-05-06"
    }, {
      date: new Date(2019, 5, 14).getTime(),
      value1: 56,
      value2: 58,
      previousDate: "2019-05-07"
    }, {
      date: new Date(2019, 5, 15).getTime(),
      value1: 52,
      value2: 53,
      previousDate: "2019-05-08"
    }, {
      date: new Date(2019, 5, 16).getTime(),
      value1: 48,
      value2: 44,
      previousDate: "2019-05-09"
    }, {
      date: new Date(2019, 5, 17).getTime(),
      value1: 47,
      value2: 42,
      previousDate: "2019-05-10"
    }, {
      date: new Date(2019, 5, 18).getTime(),
      value1: 59,
      value2: 55,
      previousDate: "2019-05-11"
    }]

    series.data.setAll(data);
    series2.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);

  }
}
