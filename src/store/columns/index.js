import {get,post} from "../../utils/axios"

const columns={
    namespaced:true,
    state(){
        return{
            formData:[],
            allcolumns:[]
        }
    },
    mutations:{
        resetFormData(state,formData){
            state.formData=formData
        },
        resetAllColumns(state,allcolumns){
            state.allcolumns=allcolumns
        }
   },
    actions:{
        // 分页查询
        findByPage({commit},querylist){
            post("/category/query",querylist)
            .then((resp)=>{
                commit("resetFormData",resp.data)
            })
        },
        // 查找父栏目
        findParent({commit}){
            get("/category/findCategoryTree").then((resp)=>{
                commit("resetAllColumns",resp.data)
            })
        },
        // 保存或更新
        saveNewColumns({commit}){
            post("/category/saveOrUpdate")
        }
    }
}

export default columns