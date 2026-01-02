import type { PolyDefs, Offset } from "./types/Canvas";
import { animationFrame } from "./useVanilla/animationFrame";
// Traditional Approach, Based on below definition:
const poly1: PolyDefs = [
    [0, 0],
    [0, 3],
    [8, 3]
]

const poly2: PolyDefs = [
    [0, 0],
    [2, 0],
    [2, 2],
    [0, 2],
    [0, 0]

]

export function openCanvasSketch(gridContext: CanvasRenderingContext2D, drawContext: CanvasRenderingContext2D) {
    const rows = 20;
    const columns = 20;
    const cellSize = 50;
    drawGrid(gridContext, rows, columns, cellSize);
    //drawPoly(context, poly2);
    drawContext.canvas.width = columns * cellSize; // Evenly distributes cells vertically
    drawContext.canvas.height = rows * cellSize; // Evenly distributes cells horizontally
    drawContext.scale(cellSize, cellSize);
    animationFrame(drawContext, poly2, "red", [0, 1]);
}


function drawGrid(context: CanvasRenderingContext2D, rows: number, columns: number, cellSize: number, color = "white") {
    context.canvas.width = columns * cellSize; // Evenly distributes cells vertically
    context.canvas.height = rows * cellSize; // Evenly distributes cells horizontally
    context.scale(cellSize, cellSize);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            // Tetris like pixel colors
            // context.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`
            // context.fillRect(x, y, 1, 1);
            context.strokeStyle = color;
            context.lineWidth = 0.4 / cellSize;
            context.strokeRect(x, y, 1, 1);
        }
    }
}

function drawPoly(context: CanvasRenderingContext2D, polyDef: PolyDefs, color: string = "red", offset: Offset = [2, 2]) {
    context.beginPath()
    context.strokeStyle = color;
    for (let iterator = 0; iterator < polyDef.length; iterator++) {
        /*
        * Traditional approach: position is Solely based on diffined Coords inside polyDef
        * context.lineTo(...polyDef[iterator])  
        */

        /** Offset Approach */
        context.lineTo(polyDef[iterator][0] + offset[0], polyDef[iterator][1] + offset[1]);

    }
    context.fillStyle = color;
    context.fill();
    context.closePath();
}