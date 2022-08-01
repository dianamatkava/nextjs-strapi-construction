export class Recipe {
  public id?: number;
  public name?: string;
  public description?: string;
  public imgPath?: string;

  constractor(id: number, name: string, desc: string, imgPath: string ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
  }
}








