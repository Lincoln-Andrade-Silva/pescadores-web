export class Response<T> {
    public code?: string;
    public message?: string;
    public data?: T;
    public totalPages?: number;
    public totalData?: number;
}