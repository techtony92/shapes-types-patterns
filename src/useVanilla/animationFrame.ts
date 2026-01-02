import type { PolyDefs, Offset } from "../types/Canvas";

export function animationFrame(context: CanvasRenderingContext2D, PolyDefs: PolyDefs, color: string, Offset: Offset = [0, 0]) {
    //context.setTransform(1, 0, 0, 1, 0, 0);
    //context.translate(0.001, 0);
    let range = 21; // Offset by 1. Grid is between 0 & 20 
    let activeSeek = 1; // Start @ 1
    let direction = "FORWARDS";
    let rotationAngle = 0;
    let scaleValue = 1;
    let scaleDirection = "GROW";
    function executeFrameOperations() {
        clearCanvas(context);
        window.requestAnimationFrame(executeFrameOperations);

        /****** Standard ******/
        /**********************/
        context.beginPath()
        for (let iterator = 0; iterator < PolyDefs.length; iterator++) {
            context.lineTo((PolyDefs[iterator][0] + (activeSeek)) + Offset[0], PolyDefs[iterator][1] + Offset[1])
        }

        context.fillStyle = color;
        context.fill();
        context.closePath();
        context.save(); // Save Current State

        // Calculate rotation center [e.g center of said shape]
        const centerX = 1 + activeSeek / 2 + Offset[0]; // Center of Box
        const centerY = 1 + Offset[1];

        context.translate(centerX, centerY); // Move origin to rotation point
        context.rotate(rotationAngle); // Apply rotation
        context.translate(-centerX, -centerY); // Move origin back

        /***** Rotate *****/
        /******************/
        context.beginPath()
        for (let iterator = 0; iterator < PolyDefs.length; iterator++) {
            context.lineTo((PolyDefs[iterator][0] + (activeSeek / 2)) + Offset[0], PolyDefs[iterator][1] + Offset[1])
        }
        //context.rotate((45 * Math.PI) / 180);
        context.fillStyle = "grey";
        context.fill();
        context.closePath()
        context.restore(); // Restore to save data

        /***** Scale *****/
        /*****************/
        context.save();
        const scaleCenterX = 1 + activeSeek / 4 + Offset[0];
        const scaleCenterY = 1 + Offset[1] + 3;
        context.translate(scaleCenterX, scaleCenterY);
        context.scale(scaleValue, scaleValue);
        context.translate(-scaleCenterX, -scaleCenterY);
        context.beginPath();
        for (let iterator = 0; iterator < PolyDefs.length; iterator++) {
            context.lineTo((PolyDefs[iterator][0] + (activeSeek / 2)) + Offset[0], PolyDefs[iterator][1] + Offset[1])
        }
        //context.rotate((45 * Math.PI) / 180);
        context.fillStyle = "purple";
        context.fill();
        context.closePath();
        context.restore(); // Restore to save data

        /******UPDATES******/
        /*******************/

        // Update scale
        if (scaleValue >= 2) {
            scaleDirection = "SHRINK";
        } else if (scaleValue <= 0.5) {
            scaleDirection = "GROW";
        }
        if (scaleDirection === "GROW") {
            scaleValue += 0.01;
        } else {
            scaleValue -= 0.01;
        }
        // Update rotation angle
        rotationAngle += 0.02;

        if (activeSeek >= range) {
            direction = "BACKWARDS"
        } else if (activeSeek <= 0) {
            direction = "FORWARDS"
        }
        if (direction === "FORWARDS") {
            activeSeek += 0.01;
        } else if (direction === "BACKWARDS") {
            activeSeek -= 0.01;
        }
    }

    executeFrameOperations()
}

function clearCanvas(context: CanvasRenderingContext2D) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

}