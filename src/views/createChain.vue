<template>
  <div>    
    <el-container style="height: 100%;" >
      <el-header style="margin-top: 30px;margin-bottom: 20px;">
        <el-steps :active="activeState" finish-status="success" :align-center="true" > 
            <el-step title="输入信息" />
            <el-step title="获取产品信息" />
            <el-step title="数据处理" />
            <el-step title="调用模型" />
            <el-step title="分类" />
            <el-step title="产品结构" />
            <el-step title="获取合作信息" />
            <el-step title="数据处理" />
            <el-step title="调用模型" />
            <el-step title="整理" />
            <el-step title="公司合作关系" />
            <el-step title="链接知识图谱" />
            <el-step title="完成" />
        </el-steps>
      </el-header>

      <el-main>
            <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>


<script setup>

</script>


<style scoped>
:deep(.el-step__title) {
    font-size: 14px;
    height: 28px;

 }
</style>

