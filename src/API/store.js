import create from "zustand";
// or for IE compatibility
// import create from 'zustand/index.cjs.js'

const [useStore] = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 }))
}));

export { useStore };
