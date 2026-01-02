
let context: CanvasRenderingContext2D | null = null;

export function initializeCanvas(canvas: HTMLCanvasElement) {
    return context = canvas.getContext("2d");
}

export function getContext2D() {
    if (context !== null) {
        return context;
    }
    return null;
}