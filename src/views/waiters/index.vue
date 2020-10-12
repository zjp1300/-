<template>
  <div class="app-container">
    <h3>员工管理</h3>
     <el-button @click="handleAdd" type="primary" size="small">新增</el-button>
     <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column prop="username" label="用户名" width="120">
    </el-table-column>
    <el-table-column prop="telephone" label="手机号" width="120">
    </el-table-column>
    <el-table-column prop="idCard"  label="身份证号"  width="180">
    </el-table-column>
    <el-table-column prop="status"  label="状态"   width="120">
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
    <pagination  :total="total"  :page.sync="listQuery.page"  :limit.sync="listQuery.limit"
     @pagination="fetchData" />
    </template>
    <!-- 模态框 -->
    <el-dialog
      title="保存员工信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <p>用户名 <el-input v-model="waiter_info.username" placeholder="请输入内容"></el-input></p>
      <p>密码 <el-input v-model="waiter_info.password" placeholder="请输入内容"></el-input></p>
       <p>状态  <el-select v-model="waiter_info.status" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></p>
      <p>手机号 <el-input v-model="waiter_info.telephone" placeholder="请输入内容"></el-input></p>
      <p>身份证号 <el-input v-model="waiter_info.idCard" placeholder="请输入内容"></el-input></p>
      
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
      listLoading: false,
        options:[{
         value: '启用',
          label: '启用'
      },{
         value: '禁用',
          label: '禁用'
      }],
    }
  },
  // 计算属性
  computed: {
    ...mapState("waiters",["list","total","listQuery","dialogVisible","waiter_info"]),

  },
  //生命周期钩子函数  
  created() {
    this.fetchData()
  },
  methods: {
   ...mapActions("waiters",["fetchData","handleAdd","handleClose","handleSave","handleClick","handleDelect"])
  },
  
}
</script>
