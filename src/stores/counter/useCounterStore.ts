import { create } from "zustand";
import CounterStore from "./CounterStore";
import counterStoreCreator from "./counterStoreCreator";

const useCounterStore = create<CounterStore>()(counterStoreCreator);

export default useCounterStore;
