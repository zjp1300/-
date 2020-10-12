import {get,post} from "../../utils/axios"
const product={
    namespaced:true,
    state(){
        return{
            pagelist:[],
            dialogVisible:false,
            message:"",
            loading: true
        }
    },
    mutations:{
        resetPagelist(state,pagelist){
            state.pagelist=pagelist
        },
        changeVisible(state,Visible){
            state.dialogVisible=Visible
        },
        changemessage(state,message){
            state.message=message
        },
        resetloading(state,loading){
            state.loading=loading
        }
    },
    actions:{
        // 查询产品信息
        findByPage({commit,dispatch},parmse){
        // 查询所有
            // get("/product/findAll").then((resp)=>{
            //     console.log(resp.data)
            //     commit("resetlist",resp.data)
            // })
        //分页查询    
            post("/product/queryProductCascadeCategory",parmse)
            .then((resp)=>{
                commit("resetPagelist",resp.data)
                commit("resetloading",false)
            })
            .then(commit("resetloading",true))
        },
        // 保存产品
        saveproduct({commit,dispatch},newProduct){
            return  post("/product/saveOrUpdate",newProduct)
            .then((resp)=>{
                console.log(resp)
                commit("changemessage",resp.message)
                dispatch("closedialog")
            })
        },
        // 删除产品
        delectproduct({commit},id){
          return  get("/product/deleteById?id="+id).then((resp)=>{
                commit("changemessage",resp.message)
            })
        },
        // 打开模态框
        opendialog({commit}){
            commit("changeVisible",true)
        },
        // 关闭模态框
        closedialog({commit}){
            commit("changeVisible",false)
        },
       
       
    }
}

export default product