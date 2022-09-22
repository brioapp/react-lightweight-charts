<!-- markdownlint-disable no-inline-html first-line-h1 -->

<div align="center">
  <p>React.js wrapper for <a href="https://github.com/tradingview/lightweight-charts">Lightweight Charts</a> to build interactive financial charts in react.</p>
  <p>Based on <a href="https://github.com/Kaktana/kaktana-react-lightweight-charts">Kaktana react lightweight charts</a>, modified by Qognica Finance</p>
  
  [![](https://img.shields.io/badge/lightweight--charts-v3.7.0-brightgreen)](https://github.com/tradingview/lightweight-charts/tree/3.7.0)
[![npm version](https://badge.fury.io/js/@comp%2Freact-lightweight-charts.svg)](https://badge.fury.io/js/@comp%2Freact-lightweight-charts)
[![npm downloads](https://img.shields.io/npm/dm/@comp%2Freact-lightweight-charts.svg
)](https://badge.fury.io/js/@comp%2Freact-lightweight-charts)
</div>

<!-- markdownlint-enable no-inline-html -->

# 2.0.0 Refactor

2.0.0 will be rewritten from the ground up and thus this will no longer be a fork of Kaktana. You can follow the work on the new version at https://github.com/Qognica/react-lightweight-charts, which will be replacing this repository when it is finished

## Download and Installation

##### Installing via npm

```bash
npm install --save @comp/react-lightweight-charts
```

##### Installing via yarn

```bash
yarn add @comp/react-lightweight-charts
```

## Usage

```js
import Chart from '@comp/react-lightweight-charts'
```

To create a basic candlestick chart, write as follows:

```javascript
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        alignLabels: true,
        timeScale: {
          rightOffset: 12,
          barSpacing: 3,
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
          rightBarStaysOnScroll: true,
          borderVisible: false,
          borderColor: '#fff000',
          visible: true,
          timeVisible: true,
          secondsVisible: false,
        },
      },
      candlestickSeries: [
        {
          data: [
            { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
            { time: '2018-10-22', open: 180.82, high: 181.4, low: 177.56, close: 178.75 },
            { time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
            { time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
            { time: '2018-10-25', open: 177.52, high: 180.5, low: 176.83, close: 179.07 },
            { time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
            { time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.2 },
            { time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
            { time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
            { time: '2018-11-01', open: 176.84, high: 180.86, low: 175.9, close: 180.46 },
            { time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
            { time: '2018-11-05', open: 181.02, high: 182.41, low: 179.3, close: 182.19 },
          ],
        },
      ],
    }
  }

  render() {
    return (
      <Chart options={this.state.options} candlestickSeries={this.state.candlestickSeries} autoWidth height={320} />
    )
  }
}
```

## Wrapper props

| Name                | Type                          | Description                                                                                                                                                                                              |
| ------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options`           | `object`                      | Defines the global options of the chart. [Refer to the official Docs](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/customization.md)                                               |
| `autoWidth`         | `boolean`                     | If true, the chart resizes automatically to 100% of its container width                                                                                                                                  |
| `autoHeight`        | `boolean`                     | If true, the chart resizes automatically to 100% of its container height                                                                                                                                 |
| `width`             | `number`                      | if `autoWidth` is false, defines the width of the chart in px                                                                                                                                            |
| `height`            | `number`                      | if `autoHeight` is false, defines the height of the chart in px                                                                                                                                          |
| `legend`            | `string`                      | Display a global legend on the top-left corner of the chart (can be considered as a title)                                                                                                               |
| `candlestickSeries` | `SeriesObject list`           | List of candlestick series to be displayed                                                                                                                                                               |
| `barSeries`         | `SeriesObject list`           | List of bar series to be displayed                                                                                                                                                                       |
| `lineSeries`        | `SeriesObject list`           | List of line series to be displayed                                                                                                                                                                      |
| `areaSeries`        | `SeriesObject list`           | List of area series to be displayed                                                                                                                                                                      |
| `histogramSeries`   | `SeriesObject list`           | List of histogram series to be displayed                                                                                                                                                                 |
| `onClick`           | `MouseEventHandler`           | Subscribe to click events. The callback function is defined in [the official Docs](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/events.md#mouseeventhandler)                       |
| `onCrosshairMove`   | `MouseEventHandler`           | Subscribe to crosshair move events. The callback function is defined in [the official Docs](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/events.md#mouseeventhandler)              |
| `onTimeRangeMove`   | `TimeRangeChangeEventHandler` | Subscribe to time range change events. The callback function is defined in [the official Docs](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/events.md#timerangechangeeventhandler) |
| `from`              | `Date`                        | Sets visible range from the specified date. Date object is defined in [the official Docs](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/time.md)                                    |
| `to`                | `Date`                        | Sets visible range to the specified date. Date object is defined in [the official Docs](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/time.md)                                      |
| `darkTheme`         | `boolean`                     | If true, a custom dark theme palette is applied to the chart                                                                                                                                             |
| `chartRef`          | `function`                    | Access to the chart ref to use Chart API function defined in [the official Docs](https://github.com/tradingview/lightweight-charts/blob/v3.3.0/docs/time-scale.md)                                       |

### SeriesObject

`SeriesObject` is an object with the following fields:

- `options`: the series-specific options. Please see the reference for the different serie types:
  - [`candlestickSeries`](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/candlestick-series.md#customization)
  - [`barSeries`](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/bar-series.md#customization)
  - [`lineSeries`](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/line-series.md#customization)
  - [`areaSeries`](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/area-series.md#customization)
  - [`histogramSeries`](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/histogram-series.md#customization)
- `data`: the series data. please refer to [the official Docs](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/series-basics.md#data)
- `markers`: List of [Marker](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/series-basics.md#setmarkers) to be displayed on the series.
- `priceLines`: List of [PriceLine](https://github.com/tradingview/lightweight-charts/tree/v3.3.0/docs/series-basics.md#createpriceline) to be displayed on the series.
- `legend`: the series legend to be displayed on the top-left corner of the chart. The value of the series at the selected time is displayed beside the text legend.
- `linearInterpolation`: A number in seconds to auto-fill series data if no data has been provided between two data points for more than the provided time range.

## License

@comp/react-lightweight-charts is released under MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.
