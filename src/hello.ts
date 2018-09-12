export class Hello{
    public name: string;


    constructor(name: string) {
        this.name = name;
    }

    print(name: string){
        console.log('my name is : ' + name);
    }
}