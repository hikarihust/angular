export class Playlist {
  constructor(
    private _channelId   : string = "",
    private _description : string = "",
    private _id          : string = "",
    private _slug        : string = "",
    private _thumbnails  : string = "",
    private _title       : string = "",
  ) {
  }

  public get channelId(): string {
    return this._channelId;
  }

  public set channelId(v: string) {
    this._channelId = v;
  }

  public get description(): string {
    return this._description;
  }

  public set description(v: string) {
    this._description = v;
  }

  public get id(): string {
    return this._id;
  }

  public set id(v: string) {
    this._id = v;
  }

  public get slug(): string {
    return this._slug;
  }

  public set slug(v: string) {
    this._slug = v;
  }

  public get thumbnails(): string {
    return this._thumbnails;
  }

  public set thumbnails(v: string) {
    this._thumbnails = v;
  }

  public get title(): string {
    return this._title;
  }

  public set title(v: string) {
    this._title = v;
  }
}
