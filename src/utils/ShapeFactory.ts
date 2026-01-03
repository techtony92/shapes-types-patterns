import type { Square, Circle, Triangle, Rectangle, ShapeType } from "../types/Shape";

class ShapeFactory {
    #instance: ShapeFactory | null = null;
    #shapes: Map<string, new (...args: []) => keyof ShapeType> | null = null;
    constructor() {
        if (this.#instance) {
            return this.getInstance();
        };
        this.#instance = this;
        this.#shapes = new Map<string, keyof ShapeType>();
    }

    getInstance() {
        return this.#instance as ShapeFactory;
    }

    // Register new shapes
    register(type: keyof ShapeType, creatorInit: new (...args: any[]) => keyof ShapeType) {

        /**
         * TODO
         *  Generate an ID based on @@type 
         * 
        */
        let id: string = "circle_001"
        this.#shapes!.set(id, creatorInit)
    }

    // Create shape instance
    create() {

    }

    // Check if type is registered
    has(shapeId: string) {
        return this.#shapes!.has(shapeId);
    }
    // Get all registered types
    getTypes() {
        return Array.from(this.#shapes!.keys())
    }
}