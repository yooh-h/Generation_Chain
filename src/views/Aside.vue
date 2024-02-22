<template>
    <el-row >
        <p class="text">新建产业链</p>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <el-icon  :size="40" style="margin-top :31px;"><CirclePlus /></el-icon>
    </el-row>
    <div class="dashed"></div>
    

    <el-row style="margin-top: 15px;  display: flex;justify-content: right;">
    <el-col :span="18"><div class="grid-content "><el-input  placeholder="请输入查询的产业链名称" /></div></el-col>
    <el-col :span="2"><div class="grid-content ">
        <el-icon style="margin-top: 6px;margin-left: 2px;"><Search /></el-icon></div></el-col>
    </el-row>
    <el-row style="margin-top: 15px;  display: flex;justify-content: left;">
        <el-col :span="8"><div class="grid-content "><p class="smalltext">最近记录</p></div></el-col>
    </el-row>
    <div>
        <el-table :data="tableData" style="width: 100%;font-size: 17px;" 
         :cell-style="{background:'#000',color:'#fff',border:'none'}"
         :header-cell-style="{background:'#000',color:'#fff'}"
         class="styleTable"
        >
        <el-table-column prop="date" label="日期" width="130px" />
        <el-table-column prop="chainName" label="产品名称" width="120px"  />
        </el-table>
    </div>

    <div style="width: 100%;height: 30px;">
    <el-row :gutter="24"   style="position:fixed;bottom:1px;" >
    <el-col :span="4"><div style="margin-top: 7px;"><el-icon :size="30"><UserFilled /></el-icon></div></el-col>
    <el-col :span="9" :offset="2"><div class="userNameText">{{userName}}</div></el-col>
    <el-col :span="8">
        <el-button type="info" style="margin-top: 7px;">退出登录</el-button>
    </el-col>
    </el-row>
    </div>
    
    
        
    
</template>


<script lang="ts" setup>
    const userName='崔子博'
    const tableData = [
    {
        date: '2022-05-01',
        chainName: '小米汽车'
    },{
        date: '2022-05-02',
        chainName: '华为手机'
    },{
        date: '2022-05-03',
        chainName: 'Sora大模型'
    },{
        date: '2022-05-04',
        chainName: '问界汽车'
    },{
        date: '2022-05-05',
        chainName: '问界汽车'
    },{
        date: '2022-05-06',
        chainName: '问界汽车'
    },{
        date: '2022-05-07',
        chainName: '问界汽车'
    }
    ]



</script>

<style scoped>
 .el-row {
  margin-bottom:0px;
  justify-content: center;
}
.text{
    font-size: 30px;
}
.smalltext{
    font-size: 20px;
    margin-top: 2px;
}
.dotted{
     color:  #fff;
}
.dashed {
  border-top: 2.5px dashed #fff;
}

.grid-content {
  min-height: 15px;
  border-color: #fff;
}

.userNameText{
    font-size: 20px;
    margin-top: 9px;
}


</style>

