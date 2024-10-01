import { type StateCreator } from "zustand";
import CounterStore from "./CounterStore";

const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
});

export default counterStoreCreator;
