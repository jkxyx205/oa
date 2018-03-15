<template>
    <header>
        <div class="logo">
            <router-link to="/dashboard"><img src="../assets/images/logo.png" alt=""></router-link>
        </div>
        <div class="bar-right">
            <!-- <div class="item"><i class="el-icon-date"></i></div> -->
             <el-badge class="item" style="line-height: 1;">
              <i class="el-icon-date"></i>
            </el-badge>
            <el-badge is-dot class="item" style="line-height: 1;">
              <i class="iconfont icon-message" @click="dialogTableVisible = true"></i>
            </el-badge>
            
            <!-- <div class="avatar" :style="'background-image: url('+avatar+')'"> -->
                <div class="avatar"><img src="https://avatars0.githubusercontent.com/u/5242715?s=40&v=4" alt=""></div>
           <!--  <div class="avatar">
               
            </div> -->

        </div>


        <el-dialog title="消息" :visible.sync="dialogTableVisible" :fullscreen="true">
          <el-table :data="gridData">
            <el-table-column property="address" label="消息"></el-table-column>
            <el-table-column property="date" label="日期" width="150"></el-table-column>
          </el-table>
        </el-dialog>

    </header>
</template>

<script>
    export default {
        data() {
            return {
                dialogTableVisible: false,
                 gridData: [{
                      date: '2016-05-02',
                      name: '王小虎',
                      address: 'Mike 指派给了 hello'
                    }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: 'hello 将你添加到项目 测试tb'
                    }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: 'hello 将你添加到项目 测试tb'
                    }, {
                      date: '2016-05-03',
                      name: '王小虎',
                      address: 'Mike 指派给了 hello'
                    }],
                avatar: 'https://avatars0.githubusercontent.com/u/5242715?s=40&v=4'
            }
        }
    }
</script>

<style>
     .el-badge__content.is-fixed.is-dot {
        right: 10px;
        top: 3px;
    }

</style>

<style lang="scss" scoped>
    @import "../assets/scss/_variable.scss";

    $height: 50px;
    header {
        height: $height;
        padding: 0 15px;

        .logo {
            display: inline-block;
            height: 100%;
            img {
                height: 100%;
            }
        }
    }



    .bar-right {
        height: 100%;
        float: right;

        .item {
            float: left;
            top: 15px;
            margin-right: 15px;
            i {
                font-size: 25px;
                color: $h1-color;  
            }
            cursor: pointer;
        }

        &>div {
            float: left;
            line-height: 50px;
            height: 50px;
        }

        .avatar {
            img {
                width: 30px;
                height: 30px;
                border-radius: 30px;
                vertical-align: middle;
                background-color: $background-color;
            }
        }
    }

   
    
</style>