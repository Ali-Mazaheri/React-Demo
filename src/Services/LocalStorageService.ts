export class LocalStorageService {
    private storage: any = {};
    private storageKey: string;
    constructor(storageKey: string) {
        this.storageKey = storageKey;
        let d = JSON.parse(localStorage.getItem(storageKey) || '{}');
        this.storage = d;
    }

    public getAll<T>(): T[] {
        let data = this.storage.data;
        return ((data && data.length) ? data : []) as T[];
    }

    public write(data) {
        let d = JSON.stringify({ data: data || [] });
        localStorage.setItem(this.storageKey, d);
    }
}