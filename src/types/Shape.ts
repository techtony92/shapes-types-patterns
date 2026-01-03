type Sides = number;
type HexChars = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
type HexNumbs = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type ColorHex = `#${string}`;
type ColorRGBA = `rgba(${number},${number},${number},${number | undefined})`;
export type ShapeType = "Circle" | "Square" | "Triangle" | "Rectangle";
interface Shape {
    sides: Sides;
    color: ColorHex | ColorRGBA;
    type: ShapeType;
}

type ShapeMap<T extends ShapeType> = {
    type: T;

} & Shape;

export type Square = ShapeMap<"Square">
export type Circle = ShapeMap<"Circle">
export type Triangle = ShapeMap<"Triangle">
export type Rectangle = ShapeMap<"Rectangle">

export type CachedElement<T extends HTMLElement = HTMLElement> = T;