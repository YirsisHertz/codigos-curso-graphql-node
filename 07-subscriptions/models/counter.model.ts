export class Counter {
  private _count: number;

  constructor() {
    this._count = 0;
  }

  public increment() {
    this._count++;

    return this._count;
  }

  public decrement() {
    this._count--;

    return this._count;
  }

  public get count() {
    return this._count;
  }
}
