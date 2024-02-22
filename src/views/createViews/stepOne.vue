<template>
  <div >
    <div  style="margin-top: 100px;">
        <el-row >
          <el-col :span="8"><p class='p'>产品名称： &nbsp;</p></el-col>
          <el-col :span="8"><el-input  size="large" type="text" placeholder="请输入名称..."  style="margin-top: 20px;"/></el-col>
        </el-row>
        <el-row >
          <el-col :span="8" ><p class='p'>产品类别： &nbsp;</p></el-col>
          <el-col :span="8" ><el-input  size="large" type="text" placeholder="请输入类别..."  style="margin-top: 20px;"/></el-col>
        </el-row> 
        <el-row :gutter="24" style="margin-top:40px">
          <el-col :span="11"></el-col>
          <el-col  :span="2"><el-button  @click="next" >下一步</el-button></el-col>
          
        </el-row>

    </div>
   
    
  </div>
</template>

<script setup>

  
//跳转-新建页面
import { getCurrentInstance} from 'vue'


import {useRouter} from 'vue-router'
const router=useRouter()
const next=()=>{
  router.push('/stepTwo')
  
}

</script>


<style>
.p{
  font-size: 20px;
  display: flex;
  justify-content: right;
  margin-top: 25px;
}

</style>
