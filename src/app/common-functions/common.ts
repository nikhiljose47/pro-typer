export enum TyperState {
    blink,
    done,
    undone
}

export class TyperUnit {
    val: string;
    state: TyperState;
    status: string[] = [];
    bgColor: string;
    progressValue: number;
}

export class GameOneUnit {
    userId: string;
    userName: string;
    progressValue: number;
    typerUnit: TyperUnit[]=[];
}


export class GameBot {
    name: string;
    hardness: number;
}