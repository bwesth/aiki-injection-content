<!-- 
  Test model of the Charts component for the main app.
 -->
<script>
  import FusionCharts from "fusioncharts";
  import Charts from "fusioncharts/fusioncharts.charts";
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

  fcRoot(FusionCharts, Charts);

  let dataSource = {
      "chart": {
        "caption": "Recommended Portfolio Split",
        "subCaption": "For a net-worth of $1M",
        "showValues": "1",
        "showPercentInTooltip": "0",
        "numberPrefix": "$",
        "enableMultiSlicing": "1",
        "theme": "fusion"
      },
      "data": [{
        "label": "Equity",
        "value": "300000"
      }, {
        "label": "Debt",
        "value": "230000"
      }, {
        "label": "Bullion",
        "value": "180000"
      }, {
        "label": "Real-estate",
        "value": "270000"
      }, {
        "label": "Insurance",
        "value": "20000"
      }]
    },
    chartConfig = {
      type: 'pie2d',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
      dataSource
    };
</script>

<div id="chart-container" >
  <SvelteFC {...chartConfig} />
</div>
