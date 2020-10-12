import {get,post} from "../../utils/axios"
var moment = require('moment');

const comment={
    namespaced:true,
    state(){
        return{
            formData:[]
        }
    },
    mutations:{
        resetFormData(state,formData){
            state.formData=formData
        }
   },
    actions:{
        // 分页查询
        findByPage({commit},querylist){
            post("/comment/query",querylist)
            .then((resp)=>{
            
                resp.data.list.map((item)=>{
                    item.commentTime= moment(item.commentTime).format("YYYY-MM-DD HH:mm:ss")
                })
                commit("resetFormData",resp.data)
            })
        },
        // 删除功能
        delectByID(content,id){
          return  get("/comment/deleteById?id="+id)
        }
    }
}

export default comment