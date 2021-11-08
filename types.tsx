export interface Colour {
  name: string;
  value: string;
}

export type Palette = Array<Colour>;

export interface ImageData {
  name: string;
  page: string;
  src: string;
}
