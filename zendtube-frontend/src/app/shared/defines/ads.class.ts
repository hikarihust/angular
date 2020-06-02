export class Ads {
  constructor(
    private _url      : string = "",
    private _link     : string = "",
    private _text     : string = "",
    private _position : string = "",
  ) {
  }

  public get url(): string {
    return this._url;
  }

  public set url(v: string) {
    this._url = v;
  }

  public get link(): string {
    return this._link;
  }

  public set link(v: string) {
    this._link = v;
  }

  public get text(): string {
    return this._text;
  }

  public set text(v: string) {
    this._text = v;
  }

  public get position(): string {
    return this._position;
  }

  public set position(v: string) {
    this._position = v;
  }
}