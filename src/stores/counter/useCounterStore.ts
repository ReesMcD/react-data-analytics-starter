import { create, StateCreator } from "zustand";
import CounterStore from "./CounterStore";

export const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
});

export const useCounterStore = create<CounterStore>()(counterStoreCreator);
