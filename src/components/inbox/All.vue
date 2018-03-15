<template>
    <div class="all">
        <div class="inbox-list">
                <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search">
                </el-input>
                <div class="list-bar">
                  <span>待办事项</span>
                </div>

                <div class="list-container">
                  <router-link :to="{ name: 'inboxDetail', params: { id: 123 }}">
                    <div class="item">
                       <div class="user-avatar">
                          <img src="../../assets/images/1.jpg" alt="">
                       </div>
                       <div class="list-content-detail">
                         <div class="user-name">马丹丹</div>
                         <div class="title">发起周三晚上会议</div>
                         <div class="content-short">人民解放军为西藏解放、建设、发展所做出的巨大努力</div>
                       </div>
                    </div>
                  </router-link>
                  <router-link :to="{ name: 'inboxDetail', params: { id: 456 }}">
                    <div class="item normal-level">
                       <div class="user-avatar">
                          <img src="../../assets/images/2.jpg" alt="">
                       </div>
                       <div class="list-content-detail">
                         <div class="user-name">江山</div>
                         <div class="title">请假审批</div>
                         <div class="content-short">人民解放军为西藏解放、建设、发展所做出的巨大努力</div>
                       </div>
                    </div>
                  </router-link>
                   <router-link :to="{ name: 'inboxDetail', params: { id: 789 }}">
                    <div class="item warn-level">
                       <div class="user-avatar">
                          <img src="../../assets/images/3.jpg" alt="">
                       </div>
                       <div class="list-content-detail">
                         <div class="user-name">司马图</div>
                         <div class="title">请假审批</div>
                         <div class="content-short">人民解放军为西藏解放、建设、发展所做出的巨大努力</div>
                       </div>
                    </div>
                  </router-link>
                </div>
               
        </div>
          <div class="inbox-panel">
            <router-view/>
          </div>
    </div>
</template>

<script>
   import router from '@/routers/inbox-router'

   export default {
      router,
      data() {
        return {
          input: ''
        }
      }
   } 
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_variable.scss";

  .el-icon-search {
    
  }

  .router-link-active .item {
    background-color: $background-color;
  }

   .all {
     display: flex;
     height: 100%;
   }

   .inbox-list {
      //height: 100%;
   }

   .inbox-list {
      width: 300px;
      //height: 760px;
      padding: 10px 5px;
      border-right: 1px solid $split-color;

      .list-bar {
        line-height: 40px;
        padding-left: 5px;
        background-color: $background-color;

      }
  
      .list-container {
        //margin-top: 15px;
      }

      .item {
        display: flex;
        border-left: 4px solid red;
        border-bottom: 1px solid $split-color;
        padding: 10px 5px;
        cursor: pointer;
        &:hover {
          background-color: $background-color;
        }
        &.normal-level {
          border-left-color: green;
        }
        &.warn-level {
          border-left-color: yellow;
        }
        .user-avatar {
          width: 50px;

          img {
            width: 40px;
            height: 40px;
            border-radius: 40px;
            margin-right: 10px;
          }

        }
      }
   } 

   .inbox-panel {
      padding: 15px;
      flex: 1;
   }

   .list-content-detail {
      overflow:hidden;
      &> div {
        line-height: 1.4;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
      }

     .content-short {
      color: $desc-color;
     } 
   }
</style>