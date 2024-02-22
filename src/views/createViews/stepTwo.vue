<template>
<div >
<el-card>
    <template #header>
      <div class="card_header">
        <span>产品信息</span>
        <el-button size="large">查询</el-button>
      </div>
    </template>
    <div style="margin-top: 20px;">
        <el-row >
          <el-col :span="1"></el-col>
          <el-col :span="8">
            <div>
                <el-row >
                <el-col :span="12">数据来源：</el-col>
                <el-col :span="12">谷歌API</el-col>
                </el-row>

                <el-row style="margin-top: 100px;">
                    <el-col :span="12">下载新闻数量：</el-col>
                    <el-col :span="12"><el-input placeholder="请输入..."></el-input></el-col>
                </el-row>
            </div>
          </el-col>
          <el-col :span="8" :offset="4">
             <div>
                <el-row>
                    <el-col :span="12">查询语句：</el-col>
                    <el-col :span="12">
                        <el-checkbox v-model="checked1" label="产品组成结构"  />
                        <el-checkbox v-model="checked2" label="产品构成" size="large" />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"></el-col>
                    <el-col :span="12"><el-input placeholder="或输入其他查询语句..." style="margin-top:10px;"></el-input></el-col>
                </el-row>
             </div>
          </el-col>
        </el-row>
        
    </div>
</el-card>
</div>

<div style="margin-top: 30px;">
<el-card>
    <template #header>
      <div class="card_header">
        <span>查询结果</span>
        <el-button size="large">处理</el-button>
      </div>
    </template>


    <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    >
    <el-table-column type="selection" width="55" />
    <el-table-column label="日期" width="150">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="title" label="题目" width="200" />
    <el-table-column property="content" label="内容" show-overflow-tooltip />
  </el-table>


  <div style="margin-top: 20px;" class="card_header">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="getData"
      @current-change="getData"
    />
  </div>



</el-card>
    
</div>
</template>

<script setup lang="ts">
import {ref,reactive,onMounted} from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
import { ElTable } from 'element-plus'

interface User {
  date: string
  title: string
  content: string
}
// 分页器
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}


const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const currentPage = ref(1)
const pageSize = ref(5)
const total =ref(0)

const handleSizeChange = (val: number) => {
  pageSize.value=val
  console.log(`${val} items per page`)
} 
const handleCurrentChange = (val: number) => {
  currentPage.value=val
  console.log(`current page: ${val}`)
}



// tableData-表格数据列表，total-数据总长度
const tableData=ref([])
const Data=ref([])
// searchData-向后端分页查询的对象，即当前页和每页总数
const searchData=reactive({
    current:currentPage.value,
    size:pageSize.value
})
//数据生成
function tableAddData(){
    var index=0
    Data.value=[]
    for(var i=1;i<=10;i++){
        let data= {
        date: '',
        title: '',
        content: ''}
        data.date="2024-2-"+i
        data.title=`${i}篇`
        data.content="这里是内容"
        Data.value.push(data)
        index+=1
    }
    total.value=index
    console.log(Data.value)
}
//传入分页参数
function pageQuery(current,size){
    let begin=current*size-size
    let end=current*size
    tableData.value=Data.value.slice(begin,end)
}

function getData(){
    searchData.current=currentPage.value
    searchData.size=pageSize.value
    // 先把数据搞上
    tableAddData()
    pageQuery(searchData.current,searchData.size)
}
  
onMounted(()=>{
    getData()
})


</script>

<style scoped>
 :deep(.el-chexkbox) {
    margin-top:0px;

 }
.card_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>