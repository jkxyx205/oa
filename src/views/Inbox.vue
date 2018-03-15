<template>
    <div class="inbox">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有" name="all">
                <all-inbox></all-inbox>
            </el-tab-pane>
            <el-tab-pane label="便签" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="任务" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="会议" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="审批" name="five">定时任务补偿</el-tab-pane>
          </el-tabs>


       <!--    <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
 -->

    </div>
</template>


<script>
    import All from '@/components/inbox/All.vue'

    export default {
      data() {
        return {
          activeName: 'all',
          dialogVisible: false,
        };
      },
      components: {
        allInbox: All
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    };
</script>

<style lang="scss">
    @import "../assets/scss/_variable.scss";
    .inbox, .el-tabs, #pane-all {
      height: 100%;
    }

    .el-tabs__content {
      height: calc(100% - 50px);
    }

    .content {
        height: 100%;
        width: calc(100% - 64px);
        float: left;
        background-color: rgb(249, 249, 249);
    }

    .el-tabs__nav-wrap::after {
      height: 1px;
    }

    .content-breadcrumb {
      padding: 15px;
    }

    .el-tabs__header {
      margin: 0;
    }

    .content-detail {
      margin: 0 15px;
      background-color: #fff;
      height: calc(100% - 59px);


      .el-tabs__nav-scroll {
        text-align: center;
      }

      .el-tabs__nav {
        display: inline-block;
        float: none;
        .el-tabs__item {
          height: 50px;
          line-height: 50px;
        }
      }
    }
</style>