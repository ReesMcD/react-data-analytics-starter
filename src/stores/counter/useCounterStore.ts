import { create } from "zustand";
import CounterStore from "./CounterStore";
import counterStoreCreator from "./counterStoreCreator";

export const useCounterStore = create<CounterStore>()(counterStoreCreator);
