export interface SingleResponse<T> {
    data: {
        data: T;
        meta: null
    }
}