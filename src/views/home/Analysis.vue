<template>
  <div class="analysis">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card style="margin-top:20px;">
          <ve-line :data="chartData" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card style="margin-top:20px;">
          <ve-histogram :data="chartDatah" :settings="chartSettings" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Analysis',
  data() {
    this.chartSettings = {
      xAxisType: 'value'
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户'],
        rows: [
          { '日期': '周一', '访问用户': 1393, '下单用户': 1032 },
          { '日期': '周二', '访问用户': 3530, '下单用户': 3126 },
          { '日期': '周三', '访问用户': 2923, '下单用户': 2676 },
          { '日期': '周四', '访问用户': 1723, '下单用户': 1449 },
          { '日期': '周五', '访问用户': 3792, '下单用户': 3433 },
          { '日期': '周六', '访问用户': 4593, '下单用户': 4278 },
          { '日期': '周日', '访问用户': 4123, '下单用户': 3258 }
        ]
      },
      chartDatah: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': 1, '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': 2, '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': 5, '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': 10, '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': 20, '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': 22, '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.analysis{
  padding: 0 20px;
}
</style>
