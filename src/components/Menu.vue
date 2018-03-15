<template>
    <div class="menu">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
           
          <el-menu-item index="2">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">待办</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">归档</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">通讯录</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
    
    }
  }
</script>

<style lang="scss" scoped="">
    .menu {
        height: 100%;
        //display:inline-block;
        float:left;
        background-color: #fff;

        .el-menu {
            border-right: none;
        }
    }
</style>