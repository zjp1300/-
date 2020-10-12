<template>
    <div class="colums">
      <!--按钮组-->
      <h3>栏目管理</h3>
      <div class="butns">
        <el-button type="primary" size="small" @click="addcustomer">添加</el-button>
        <el-button type="danger" size="small" @click="delectAllCustomerById">批量删除</el-button>  
      </div>
      <!--表格-->
        <el-table :data="formData.list" style="width: 100%">
            <el-table-column  prop="id"  label="编号"  width="180">
            </el-table-column>
            <el-table-column prop="name"  label="栏目名称" width="180">
            </el-table-column>
            <el-table-column prop="num" label="序号" width="150">
            </el-table-column>
            <el-table-column prop="parentId" label="夫栏目" width="180">
            </el-table-column>
            <el-table-column label="操作"  width="150">
            <template slot-scope="scope" >
                <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
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
          <!-- 模态框 -->
          <el-dialog title="添加栏目信息" :visible="dialogFormVisible" width="36%">
            {{form}}
            <el-form :model="form">
              <el-form-item label="栏目名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label=" 所属栏目" :label-width="formLabelWidth">
                <el-select v-model="form.parentId" placeholder="请选择父栏目">
                  <el-option 
                  v-for="item in allcolumns"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          

    </div>
</template>

<script>
 import {mapState,mapActions} from "vuex"

  export default {
    data() {
        return {
            name:"栏目管理",
            querylist:{
                  page:0,
                  pageSize:5,
              },
            form:{},
            dialogFormVisible:false
        }
    },
    computed: {
      ...mapState("columns",["formData","allcolumns"])
    
    },
    created(){
      this.findByPage(this.querylist)
    },
    methods:{
      ...mapActions("columns",["findByPage","findParent"]),
      //点击编辑
      handleClick(){

        },
      //点击删除  
      handleDelect(){

      },
      //点击添加 
      addcustomer(){
        this.dialogFormVisible=true
        this.findParent()

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
