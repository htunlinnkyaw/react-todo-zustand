import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () =>
    set((state) => {
      return { count: state.count + 1 };
    }),
  decrement: () =>
    set((state) => {
      return { count: state.count - 1 };
    }),
  reset: () =>
    set(() => {
      return { count: 0 };
    }),
}));

export default useCounterStore;
