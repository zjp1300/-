 <template>
   <div class="app-container">
    <h3>产品管理</h3>
     <!-- <el-button  type="primary" size="small" @click="addProduct">新增</el-button> -->
     <el-row>
           <el-col :span="11">
                <el-form :inline="true">
                    <el-form-item label="产品名称">
                        <el-input size="small" v-model="listQuery.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="small" @click="hanlerQuery" type="primary" >搜索</el-button>
                    </el-form-item>
                </el-form>  
           </el-col>
           <el-col :span="6">
               <div style="text-align:right;margin-right:400px">
                     <el-button size="small" type="primary" @click="addProduct">添加</el-button>
               </div>
           </el-col>
       </el-row>
     <el-table  :data="pagelist.list"  v-loading="loading" style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column> -->
        <!-- <el-table-column prop="username" label="编号" width="120">
        </el-table-column> -->
         <el-table-column prop="name" label="产品名称" width="120">
        </el-table-column>
        <el-table-column prop="price"  label="价格"  width="100">
        </el-table-column>
        <el-table-column prop="description"  label="描述"   width="200">
        </el-table-column>
        <el-table-column prop="category.name"  label="所属栏目"  width="150">
        </el-table-column>
        <el-table-column label="操作"  width="250">
        <template v-slot="slot">
            <el-button @click="changeProduct(slot.row)" type="primary" size="small">编辑</el-button>
            <el-button @click="delectProduct(slot.row.id)" type="danger" size="small" >删除</el-button>
            <el-button @click="changerouter(slot.row)"   type="primary" size="small" >详细</el-button>
        </template>
        </el-table-column>
  </el-table>
  <!-- 分页 -->
    <template>
         <el-pagination  
          background layout="prev, pager, next" 
          :current-page="listQuery.page+1"
          :page-size="listQuery.pageSize"
          :total="pagelist.total" 
          @current-change="handlechangepage">
         </el-pagination>
    </template>
    <!-- 模态框 -->
    <el-dialog
      title="保存产品信息" :visible="dialogVisible" width="30%" @close="handleClose">
      <p>产品名称 <el-input v-model="product_info.name" placeholder="请输入内容"></el-input></p>
      <p>价格 <el-input v-model="product_info.price" placeholder="请输入内容"></el-input></p>
      <p>所诉栏目 <el-input v-model="product_info.categoryId" placeholder="请输入内容"></el-input></p>
      <p>产品描述 <el-input v-model="product_info.description" placeholder="请输入内容"></el-input></p>
      <!-- <p>产品图片 <el-input v-model="product_info.idCard" placeholder="请输入内容"></el-input></p> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </span>
    </el-dialog> 
  </div> 
</template>
<script>
import {mapActions,mapState} from "vuex"
export default {
    data() {
        return{
           listQuery:{
                page:0,
                pageSize:5,
            },
            product_info:{},
        }
    },
    computed: {
        ...mapState("product",["pagelist","dialogVisible","loading"])
    },
    methods: {
        ...mapActions("product",["findByPage","opendialog","closedialog","saveproduct","delectproduct","searchProduct"]),
        //点击详细
        changerouter(row){
          
          this.$router.push({ name: 'about', params:{row:[1,2,3]}})
        },
      // 改变查询分页页数
        handlechangepage(val){
          this.listQuery.page=val-1
          this.findByPage(this.listQuery)
        },
        // 点击新增按钮
        addProduct(){
          this.product_info={}
          this.opendialog();
        },
        // 关闭模态框
        handleClose(){
          this.closedialog()
        },
        // 点击确定触发保存
        handleSave(){
          this.saveproduct(this.product_info)
          .then(()=>{
            this.findByPage(this.listQuery)
          })
        },
        // 点击编辑按钮
        changeProduct(row){
          this.opendialog();
          this.product_info={...row}
        },
        // 点击删除按钮
        delectProduct(id){
          this.delectproduct(id).then(()=>{
            this.findByPage(this.listQuery)
          })
        },
        //点击搜索按钮
          hanlerQuery(){
              this.findByPage(this.listQuery)
          }
    },

  
    created() {
        this.findByPage(this.listQuery);
    },
}
</script>
