import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppStore = useStore<AppState>

export enum DataStatus {
    INITIAL = 'initial',
    PENDING = 'pending',
    SUCCESS = 'success',
    FAILED = 'failed'
}

export interface HasStatus<T> {
    status: DataStatus;
    data: T | null;
};

export const initialData = { data: null, status: DataStatus.INITIAL };
export const pendingData = { data: null, status: DataStatus.PENDING };
export const rejectedData = { data: null, status: DataStatus.FAILED };