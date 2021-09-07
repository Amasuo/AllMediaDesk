import ApexCharts from 'apexcharts'
import React from 'react';
import ReactApexChart from "react-apexcharts";


class ApexChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      
        series: [{
          name: 'Y',
          data: []
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            animations: {
              enabled: false
            }
          },
          stroke: {
            width: [5,5,4],
            curve: 'straight'
          },
          labels: [],
          
          xaxis: {
          },
        },
      
      
      };
    }

  componentDidUpdate(prevProps){
    if (this.props.y !== prevProps.y) {
        console.log("y",this.props.y)
        this.setState({series:[{name:'Y',data:this.state.series[0].data.push(this.props.y)}]})
    }else if (this.props.x !== prevProps.x) {
        console.log("x",this.props.x)
        this.setState({options:[{name:'Y',data:this.state.options.data.push(this.props.y)}]})
    }
  }
    render() {
        console.log("porps",this.props)
        let table =[]
        table.push({'x':parseInt(this.props.x),'y':parseInt(this.props.y)})
        console.log("table ",table)

      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
  );
}
}

export default ApexChart;
