<template>
  <div id="conteniner">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="所有订单" name="first">
        <el-table :data="formData.list" style="width: 100%">
          <el-table-column  prop="id"  label="订单编号"  width="180">
          </el-table-column>
          <el-table-column prop="orderTime"  label="下单时间" width="180">
          </el-table-column>
          <el-table-column prop="total" label="总价" width="150">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="180">
          </el-table-column>
          <el-table-column prop="customerId" label="顾客ID" width="180">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <el-button size="mini">详细</el-button>
          </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="待支付" name="待支付">
        <el-table :data="formData.list" style="width: 100%">
          <el-table-column  prop="id"  label="订单编号"  width="180">
          </el-table-column>
          <el-table-column prop="orderTime"  label="下单时间" width="180">
          </el-table-column>
          <el-table-column prop="total" label="总价" width="150">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="180">
          </el-table-column>
          <el-table-column prop="customerId" label="顾客ID" width="180">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <el-button size="mini">详细</el-button>
          </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="待派单" name="待派单">
         <el-table :data="formData.list" style="width: 100%">
          <el-table-column  prop="id"  label="订单编号"  width="180">
          </el-table-column>
          <el-table-column prop="orderTime"  label="下单时间" width="180">
          </el-table-column>
          <el-table-column prop="total" label="总价" width="150">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="180">
          </el-table-column>
          <el-table-column prop="customerId" label="顾客ID" width="180">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <template slot-scope="slot">
                <el-button @click="toWaiter(slot.row.id)" size="mini">派单</el-button>
            </template>
          </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="待接单" name="待接单">
        <el-table :data="formData.list" style="width: 100%">
          <el-table-column  prop="id"  label="订单编号"  width="180">
          </el-table-column>
          <el-table-column prop="orderTime"  label="下单时间" width="180">
          </el-table-column>
          <el-table-column prop="total" label="总价" width="150">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="180">
          </el-table-column>
          <el-table-column prop="customerId" label="顾客ID" width="180">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <el-button size="mini">详细</el-button>
          </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="待服务" name="待服务">
        <el-table :data="formData.list" style="width: 100%">
          <el-table-column  prop="id"  label="订单编号"  width="180">
          </el-table-column>
          <el-table-column prop="orderTime"  label="下单时间" width="180">
          </el-table-column>
          <el-table-column prop="total" label="总价" width="150">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="180">
          </el-table-column>
          <el-table-column prop="customerId" label="顾客ID" width="180">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <el-button size="mini">详细</el-button>
          </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="待确认" name="待确认">
        <el-table :data="formData.list" style="width: 100%">
          <el-table-column  prop="id"  label="订单编号"  width="180">
          </el-table-column>
          <el-table-column prop="orderTime"  label="下单时间" width="180">
          </el-table-column>
          <el-table-column prop="total" label="总价" width="150">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="180">
          </el-table-column>
          <el-table-column prop="customerId" label="顾客ID" width="180">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <el-button size="mini">详细</el-button>
          </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="已完成">
        <el-table :data="formData.list" style="width: 100%">
          <el-table-column  prop="id"  label="订单编号"  width="180">
          </el-table-column>
          <el-table-column prop="orderTime"  label="下单时间" width="180">
          </el-table-column>
          <el-table-column prop="total" label="总价" width="150">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="180">
          </el-table-column>
          <el-table-column prop="customerId" label="顾客ID" width="180">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <el-button size="mini">详细</el-button>
          </el-table-column>
      </el-table>
      </el-tab-pane>
    </el-tabs>
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
      <el-dialog title="请选择服务员" :visible="dialogFormVisible">
  
         <el-select v-model="waitervalue" placeholder="请选择员工">
          <el-option
            v-for="item in waiterList"
            :key="item.id"
            :label="item.username"
            :value="item.id">
          </el-option>
        </el-select>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handlerTo">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
 import {mapState,mapActions} from "vuex"


  export default {
  
  data() {
    return {
      tableData:[],
      activeName:"first",
      querylist:{
                  page:0,
                  pageSize:5,
              },
      newlist:{},
      dialogFormVisible:false,
      waitervalue:{},
      parmes:{}  
    }
  },
  computed:{
     ...mapState("form",["formData","waiterList"]),
  },
  created(){
      this.newlist=this.querylist
      this.findByPage(this.newlist)
  },
  methods: {
    ...mapActions("form",["findByPage","findAllWaiter","toHaveWaiter"]),
    //点击卡片改变
      handleClick(){
         
        if(this.activeName==="first"){
          
          this.newlist={...this.querylist}
            this.findByPage(this.newlist)
        }else{
         
          this.newlist={...this.querylist,status:this.activeName}
          this.findByPage(this.newlist)
        }
        
      },
      // 改变页数
      handlechangepage(val){
        this.newlist.page=val-1
        this.findByPage(this.newlist)
      },
      // 派单
      toWaiter(row){
        this.parmes.orderId=row
        this.dialogFormVisible=true
        this.findAllWaiter()
      },
      // 点击确定
      handlerTo(){
        this.parmes.waiterId=this.waitervalue
        this.toHaveWaiter(this.parmes).then(()=>{
          this.findByPage(this.newlist)
        })
        this.dialogFormVisible=false
      }
  }
}
</script>

<style scoped>
#conteniner{
  margin:20px ;
  text-align: center;
}
</style>

