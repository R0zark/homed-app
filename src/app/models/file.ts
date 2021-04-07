export class DFile {
    constructor(
        private _name: string,
        private _extension: string,
        private _capacity: number,
        private _file:boolean
    ) { }

    get name(): string {
        return this._name;
    }
    get extension():string{
        return this._extension;
    }
    get capacity():number{
        return this._capacity;
    }
    get isAFile():boolean{
        return this._file;
    }

    set name(name:string){
        this._name = name;
    }
    set extension(extension:string){
        this._extension = extension;
    }
    set capacity(capacity:number){
        this._capacity = capacity;
    }
    set file(file:boolean){
        this._file = file
    }

}