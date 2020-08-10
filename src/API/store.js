/*
 * @Author: Dongchen Xie
 * @Date: 2020-08-10 10:25:25
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-08-10 13:46:46
 * @Description: file content
 */
import create from "zustand";
import axios from "axios"
// or for IE compatibility
// import create from 'zustand/index.cjs.js'
const baseURL="https://wordpress.northwesternimmigration.com/wp-json"
const [useStore] = create((set,get) => ({
  count: 1,
  language:"en",
  loading:false,
  startLoading:set((state) => ({ loading: true })),
  stopLoading:set((state) => ({ loading: false })),
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  setLanguage:function(lang){
    return set((s)=>({language:lang}))
  },
  getBlogs:async function(language,search,page=1,perpage=10,){
    set((state) => ({ loading: true }))
    const result=await axios.get(`${baseURL}/wp/v2/blogs`,{
      params: {
        search: search,
        page:page,
        per_page:perpage,
        lang:language
      }
    }).catch((e)=>{
      set((state) => ({ loading: false }))
      return {status:400,message:"server error"}
    })
    if(result.status==200){
      set((state) => ({ loading: false }))
      return {status:200,data:result}
    }else{
      set((state) => ({ loading: false }))
      return {status:400,message:"server error"}
    }
  }
}));

export { useStore };
