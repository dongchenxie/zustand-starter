/*
 * @Author: Dongchen Xie
 * @Date: 2020-08-10 10:25:25
 * @LastEditors: Dongchen Xie
 * @LastEditTime: 2020-08-10 10:55:35
 * @Description: file content
 */
import create from "zustand";
// or for IE compatibility
// import create from 'zustand/index.cjs.js'

const [useStore] = create((set) => ({
  count: 1,
  language:"en",
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  setLanguage:function(lang){
    return set((s)=>({language:lang}))
  }
}));

export { useStore };
