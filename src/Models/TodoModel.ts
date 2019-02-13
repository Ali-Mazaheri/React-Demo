export class TodoModel { 
    id:number;
    title:string;
    done:boolean = false;
    constructor(title: string) { 
        this.title = title;
        this.id = Math.random();
    }
}