import {get,post} from "../../utils/axios"
var moment = require('moment');
var qs=require("querystring")
const form={
    namespaced:true,
    state(){
        return{
            formData:[],
            waiterList:{}
        }
    },
    mutations:{
        resetFormData(state,formData){
            state.formData=formData
        },
        restwaiterList(state,waiterList){
            state.waiterList=waiterList
        }
    },
    actions:{
        //分页查询
        findByPage(context,querylist){
           
            post("/order/queryPage",querylist)
            .then((resp)=>{
                resp.data.list.map((item)=>{
                    item.orderTime= moment(item.orderTime).format("YYYY-MM-DD HH:mm:ss")
                })
                context.commit("resetFormData",resp.data)
            })
        },
        // 查询所有服务员
        findAllWaiter({commit}){
            get("/waiter/findAll").then((resp)=>{
                console.log(resp.data)
                commit("restwaiterList",resp.data)
            })
        },
        // 派单
        toHaveWaiter({commit},parmes){
          
           return get("/order/sendOrder?"+qs.stringify(parmes))
        }

    }
}

export default form