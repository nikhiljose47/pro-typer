export enum TyperState {
    blink,
    done,
    undone
}

export class Cell {
    val: string;
    state: TyperState;
    stateId: number;
    status: string[] = [];
}