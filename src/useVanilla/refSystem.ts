import type { CachedElement } from "../types/Shape";
let refCache: Array<CachedElement | null> = [];


export function appendRef<T extends HTMLElement = HTMLElement>(element: T): void {
    refCache.push(element);
    console.log(refCache);
}

export function findById<T extends HTMLElement = HTMLElement>(id: string | number): T | null {
    const found = refCache.find(cachedElement => cachedElement?.id === id) ?? null;
    return (found as T) ?? null;
}
export function removeById(element: HTMLElement): HTMLElement {
    refCache = refCache.filter(cachedElement => element.id !== cachedElement?.id);
    return element;
}




