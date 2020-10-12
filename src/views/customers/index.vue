<template>
  <div class="app-container">
    <h3>顾客管理</h3>
     <el-button @click="handleAdd" type="primary" size="small">新增</el-button>
     <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="realname" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="telephone" label="手机号" width="120">
    </el-table-column>
    <el-table-column prop="idCard"  label="身份证号"  width="180">
    </el-table-column>
    <el-table-column prop="bankCard"  label="银行卡号"   width="180">
    </el-table-column>
    <el-table-column  label="注册时间"   width="180">
      <template v-slot="slot">
            {{slot.row.registerTime|dateFormat}}
      </template>
    </el-table-column>
    <el-table-column prop="status"  label="状态"   width="120">
    </el-table-column>
     <el-table-column label="操作"  width="150">
      <template v-slot="scope" >
        <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
        <el-button @click="handleDelect(scope.row.id)" type="danger" size="small" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <template>
    <pagination  :total="total"  :page.sync="listQuery.page"  :limit.sync="listQuery.limit"
     @pagination="fetchData" />
    </template>
    <!-- 模态框 -->
    <el-dialog
      title="保存顾客信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <p>姓名 <el-input v-model="waiter_info.realname" placeholder="请输入内容"></el-input></p>
      <p>手机号 <el-input v-model="waiter_info.telephone" placeholder="请输入内容"></el-input></p>
      <!-- <p>状态 <el-input v-model="waiter_info.status" placeholder="请输入内容"></el-input></p> -->
      <p>状态  <el-select v-model="waiter_info.status" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></p>
      <p>身份证号 <el-input v-model="waiter_info.idCard" placeholder="请输入内容"></el-input></p>
      <p>银行卡号 <el-input v-model="waiter_info.bankCard" placeholder="请输入内容"></el-input></p>
      <!-- <p>注册时间 <el-input v-model="waiter_info.registerTime" placeholder="请输入内容"></el-input></p> -->
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </span>
</el-dialog>
  </div> 
</template>

<script>
import {mapState,mapActions} from "vuex"
import Pagination from '../../components/Pagination'

export default {
 components: { Pagination },
  data() {
    return {
      options:[{
         value: '正常',
          label: '正常'
      },{
         value: '禁用',
          label: '禁用'
      }],
      listLoading: false
    }
  },
  // 计算属性
  computed: {
    ...mapState("customers",["list","total","listQuery","dialogVisible","waiter_info"]),

  },
  //生命周期钩子函数  
  created() {
    this.fetchData()
  },
  methods: {
   ...mapActions("customers",["fetchData","handleAdd","handleClose","handleSave","handleClick","handleDelect"])
  },
  
}
</script>