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

export enum GameTwoUnitState {
    blink,
    done,
    undone,
    gBlink,
    gDone,
    gUndone
}

export class TyperUnit {
    val: string;
    state: TyperUnitState = TyperUnitState.undone;
    status: string[] = [];
    progressValue: number;
}

export class GameOneUnit {
    userId: string;
    userName: string;
    topScore: number;
    text: string;
    typerDelays: number[]=[];
}

export class GameTwoUnit {
    val: string;
    state: GameTwoUnitState = GameTwoUnitState.undone;
    status: string[] = [];
    progressValue: number;
}

export class GameBot {
    name: string;
    hardness: number;
}

