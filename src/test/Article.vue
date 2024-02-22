<template>
  <el-card class="box-card">
    <div class="card-header">
      <span>文章管理</span>
      <el-button type="primary ">发布文章</el-button>
    </div>

    <div style="margin-top:20px;">
      <hr>
    </div>
    <div class="text item">
      <el-form :model="formInline" :inline="true">
        <el-form-item label="文章分类">
          <el-select
            v-model="formInline.user"
            placeholder="请选择.."
            class="el-select"
            clearable
          >
            <el-option label="时事" value="时事" />
            <el-option label="新闻" value="新闻" />
          </el-select>
        </el-form-item>
        <el-form-item label="发布状态">
          <el-select
            v-model="formInline.region"
            placeholder="请选择.."
            class="el-select"
            clearable
          >
            <el-option label="草稿" value="草稿" />
            <el-option label="已发布" value="已发布" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="default" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="文章标题" />
        <el-table-column prop="category" label="分类" />
        <el-table-column prop="time" label="发表时间" />
        <el-table-column prop="state" label="状态" />
        <el-table-column label="操作" width="180">
          <el-row>
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="danger" :icon="Delete" circle />
          </el-row>
        </el-table-column>
      </el-table>

      <el-pagination
        class="el-p"
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[5, 10, 15, 20]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="jumper,total, sizes, prev, pager, next"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { Delete, Edit } from "@element-plus/icons-vue";

const tableData = [
  {
    title: "2016-05-03",
    category: "Tom",
    time: "No. 189, Grove St, Los Angeles",
    state: "已发布",
  },
  {
    title: "2016-05-03",
    category: "Tom",
    time: "No. 189, Grove St, Los Angeles",
    state: "已发布",
  },
  {
    title: "2016-05-03",
    category: "Tom",
    time: "No. 189, Grove St, Los Angeles",
    state: "已发布",
  },
  {
    title: "2016-05-03",
    category: "Tom",
    time: "No. 189, Grove St, Los Angeles",
    state: "已发布",
  },
  {
    title: "2016-05-03",
    category: "Tom",
    time: "No. 189, Grove St, Los Angeles",
    state: "已发布",
  },
];

import { reactive, ref } from "vue";

const formInline = reactive({
  user: "",
  region: "",
  date: "",
});

const onSubmit = () => {
  console.log("submit!");
};
const currentPage1 = ref(5);
const currentPage2 = ref(5);
const currentPage3 = ref(5);
const currentPage4 = ref(4);
const pageSize2 = ref(100);
const pageSize3 = ref(100);
const pageSize4 = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>

<style scoped>
.el-p {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.el-select {
  width: 200px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
