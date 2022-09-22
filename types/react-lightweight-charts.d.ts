import {
  MouseEventHandler,
  TimeRangeChangeEventHandler,
  IChartApi,
  LogicalRangeChangeEventHandler,
} from 'lightweight-charts'
import React from 'react'

declare module '@qognicafinance/react-lightweight-charts' {
  interface Props {
    candlestickSeries?: Array<any>
    lineSeries?: Array<any>
    areaSeries?: Array<any>
    barSeries?: Array<any>
    histogramSeries?: Array<any>
    width?: number
    height?: number
    options?: object
    autoWidth?: boolean
    autoHeight?: boolean
    legend?: string
    from?: number
    to?: number
    onClick?: MouseEventHandler
    onCrosshairMove?: MouseEventHandler
    onVisibleTimeRangeChange?: TimeRangeChangeEventHandler
    onVisibleLogicalRangeChange?: LogicalRangeChangeEventHandler
    darkTheme?: boolean
    chartRef?: (chart: IChartApi) => void
  }

  export default class ChartWrapper extends React.Component<Props> {}
}
