import {get,post} from "../../utils/axios"
import Vue from "vue"
import ElementUI from 'element-ui'
Vue.use(ElementUI)

const waiters={
    namespaced: true,
    state(){
        return{
            list:null,
            total: 0,
            listQuery: {
              page: 1,
              limit: 5
            },
            dialogVisible:false,
            waiter_info:{}
        }
    },
    actions:{
        // 分页查询（当前页）
        fetchData(context){
            post("/waiter/query",{
                page:context.state.listQuery.page-1,
                pageSize:context.state.listQuery.limit
            }).then((resp)=>{
                     context.state.list=resp.data.list
                     context.state.total=resp.data.total
            })
        },
        // 打开
        handleAdd(context){
            context.state.waiter_info={}
            context.state.dialogVisible=true
        },
        // 关闭
        handleClose(context){
            context.state.dialogVisible=false
        },
        // 保存
        handleSave(context){
            post("/waiter/saveOrUpdate",context.state.waiter_info)
            .then((resp)=>{
                context.dispatch("fetchData")
                ElementUI.Notification({
                    title: '保存',
                    message: '保存成功',
                    type: 'success',
                    duration: 2000
                })
            })
            context.state.dialogVisible=false
        },
        handleClick(context,data){
            context.state.dialogVisible=true
            context.state.waiter_info={...data}
        },
        handleDelect(context,id){
            get("/waiter/deleteById?id="+id).then((resp)=>{
                context.dispatch("fetchData")
                ElementUI.Notification({
                    title: '删除',
                    message: '删除成功',
                    type: 'warning',
                    duration: 2000
                })
            })
        }
    }


}

export default waiters