export interface ListResponse<T> {
    data: {
        data: T[];
        meta: {
            pagination: {
                limit: number,
                page: number,
                pages: number,
                total: number
            }
        }
    }
}