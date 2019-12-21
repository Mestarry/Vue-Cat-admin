<template>
  <div class="analysis">
    <el-card>
      <ve-line :data="chartData" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Analysis',
  data() {
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.analysis{
  padding: 20px;
}
</style>
