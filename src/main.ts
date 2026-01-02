import './styles/main.css';
import { JSX } from "./JSXTransformer";
import ComponentRoot from "./ComponentRoot"
import { appendRef, findById } from './useVanilla/refSystem';
import { initializeCanvas } from './useVanilla/canvas';
import { openCanvasSketch } from './canvas_sketchbook';
const app = document.querySelector("#app")?.appendChild(ComponentRoot())
const staticGrid = document.querySelector("#staticGrid") as HTMLCanvasElement;
const drawCanvas = document.querySelector("#drawCanvas") as HTMLCanvasElement;
let staticGridRef: HTMLCanvasElement | null = null;
let staticContext: CanvasRenderingContext2D | null = null;
let drawCanvasRef: HTMLCanvasElement | null = null;
let drawContext: CanvasRenderingContext2D | null = null;

if (staticGrid) {
    appendRef(staticGrid);
}

if (findById("staticGrid")) {
    staticGridRef = findById<HTMLCanvasElement>("staticGrid");
}


if (staticGridRef) {
    staticGridRef.width = staticGridRef.parentElement!.clientWidth;
    staticGridRef.height = staticGridRef.parentElement!.clientHeight;
    staticGridRef.style.cssText = `
    position:absolute;
    top:0;
    left:0;
    border:1px solid green;
    border-radius:10px;
    background:var(--raven);
    z-index:1;
    `
    staticContext = initializeCanvas(staticGridRef);
}



if (drawCanvas) {
    appendRef(drawCanvas);
}
if (findById("drawCanvas")) {
    drawCanvasRef = findById<HTMLCanvasElement>("drawCanvas");
}

if (drawCanvasRef) {
    drawCanvasRef.width = drawCanvasRef.parentElement!.clientWidth;
    drawCanvasRef.height = drawCanvasRef.parentElement!.clientHeight;
    drawCanvas.style.cssText = `
    position:absolute;
    top:0;
    left:0;
    border:1px solid grey;
    border-radius:10px;
    background:transparent;
    z-index:10;
    `
    drawContext = initializeCanvas(drawCanvasRef);
}




if (staticContext && drawContext) {
    openCanvasSketch(staticContext, drawContext);
}