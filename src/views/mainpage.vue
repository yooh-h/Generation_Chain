<template>
    <div >
    <el-container>
      <el-header>
        语言模型：
        <el-tree-select
        v-model="value"
        :data="data"
        :render-after-expand="false"
        style="width: 200px"
        />
      </el-header>

    <el-main>
        <div>
            <el-row style="margin-top:30px;margin-left: 300px;">
                <el-col :span="12">
                    <el-row>
                        <el-icon :size="180" @click="create"><CirclePlus /></el-icon>
                    </el-row>
                    <el-row>
                        <p style="margin-left: 40px;font-size: 60px;margin-top: 10px;height: 60px">新建</p>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <el-row>
                        <el-icon :size="180" ><Search /></el-icon>
                    </el-row>
                    <el-row>
                        <p style="margin-left: 40px;font-size: 60px;margin-top: 10px;height: 60px">查询</p>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-row style="margin-top:20px;margin-left: 300px;">
                <el-col :span="12">
                    <el-row>
                        <el-icon :size="180" ><Setting /></el-icon>
                    </el-row>
                    <el-row>
                        <p style="margin-left: 50px;font-size: 40px;margin-top: 10px;height: 60px">工具</p>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <el-row>
                        <el-icon :size="180"><More /></el-icon>
                    </el-row>
                    <el-row>
                        <p style="margin-left: 40px;font-size: 60px;margin-top: 10px;height: 60px">其他</p>
                    </el-row>
                </el-col>
            </el-row>
        </div>

    </el-main>

    </el-container>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}

import { ref } from 'vue'

const value = ref()

const data = [
  {
    value: '1',
    label: 'ChatGPT3.5',
  },{
    value: '2',
    label: 'ChatGPT4.0',
  },{
    value: '3',
    label: 'ChatGLM2',
  },{
    value: '4',
    label: 'BaiChuan',
  }
]
  
//跳转-新建页面
import {useRouter} from 'vue-router'
const router=useRouter()
const create=()=>{
  router.push('/stepOne')
}

</script>

<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>