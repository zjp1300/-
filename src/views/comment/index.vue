<template>
    <div class="colums">
      <h3>评论管理</h3>
      <!--表格-->
        <el-table :data="formData.list" style="width: 100%">
            <el-table-column  prop="id"  label="编号"  width="180">
            </el-table-column>
            <el-table-column prop="orderId"  label="订单编号" width="180">
            </el-table-column>
            <el-table-column prop="cusId" label="顾客ID" width="150">
            </el-table-column>
            <el-table-column prop="commentTime" label="下单时间" width="180">
            </el-table-column>
              <el-table-column prop="content" label="评价内容" width="180">
            </el-table-column>
            <el-table-column label="操作"  width="150">
            <template slot-scope="scope" >
                <el-button @click="handleDelect(scope.row.id)" type="danger" size="small" >删除</el-button>
            </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
           <template>
        <el-pagination
          @current-change="handlechangepage"
          background
          layout="prev, pager, next"
          :current-page="querylist.page+1"
          :page-size="querylist.pageSize"
          :total="formData.total"
          >
        </el-pagination>
      </template>
    </div>
</template>

<script>
 import {mapState,mapActions} from "vuex"

  export default {
    data() {
        return {
            querylist:{
                  page:0,
                  pageSize:5,
              },
        }
    },
    computed: {
      ...mapState("comment",["formData"])
    
    },
    created(){
      this.findByPage(this.querylist)
    },
    methods:{
      ...mapActions("comment",["findByPage","delectByID"]),
      //点击编辑
      handleClick(){

        },
      //点击删除  
      handleDelect(id){
        console.log(id)
        this.delectByID(id).then(()=>{
          this.findByPage(this.querylist)
        })
      },
      //点击添加 
      addcustomer(){

      },
      //点击批量删除
      delectAllCustomerById(){

      },
      // 点击下一页
      handlechangepage(val){
        this.querylist.page=val-1;
        this.findByPage(this.querylist)
      }
    }
  
  }
</script>

<style lang="scss" scoped>
  .colums{
    margin: 40px;
  }
</style>
