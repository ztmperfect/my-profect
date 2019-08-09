<template>
    <div class="echart-box" id="myChart" style=" width:90%; height:800px;">125</div>
</template>



<script>
export default {
    name: "eCharts",
    data () {
        return {
        }
    },
     mounted(){
        this.drawLine();
    },
    methods:{
        drawLine(){
             var myChart = this.$echarts.init(document.getElementById('myChart'))
              myChart.setOption({
                  title: {text: '8月工作完成进度',
     
     x:'center'},
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            name:'',
            data : ['黄文', '李成', '张三', '李四', '王二虎', '大麻子', '小辫子', '小辫子'],
            axisTick: {
                alignWithLabel: true
            }
        },
        
    ],
    yAxis : [
        {
            type : 'value',
            name:'',
            min:'0',
            max:'100',
            axisLabel: {
            formatter: '{value}%'
            }
            
            
        }
    ],
    series : [
        {
            name:'完成率',
            type:'bar',
            barWidth: '55%',
            data:[10, 52,78,100, 60, 60, 80 ,70]
        }
    ]

              })
        }
    }
}

</script>



<style  scoped>
.echart-box{
    width: 1200px;
    height: 700px;
    background-color: #f8f8f8;
    
}
</style>

