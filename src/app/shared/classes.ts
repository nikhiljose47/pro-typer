export enum TyperUnitState {
    blink,
    done,
    undone
}

export enum TyperMode {
    timer,
    practice,
    gameone,
    gametwo
}

export class TyperUnit {
    val: string;
    state: TyperUnitState;
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

