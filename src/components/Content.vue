<template>
    <div class="content">
        <div class="content-breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>待办</el-breadcrumb-item>
              <el-breadcrumb-item>所有</el-breadcrumb-item>
            </el-breadcrumb> 
        </div>

        <div class="content-detail">
            <router-view/> 
        </div>
    </div>
</template>

<script>
  export default {
  
  }
</script>
