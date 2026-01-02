/*
* @jsx jsx
*/

/// <reference lib="DOM" />

declare namespace JSX {
    // return type of our JSX factory
    type Element = HTMLElement;

    // IntrinsicElementMap grabs all the standard HTML tags in the TS DOM lib.
    type IntrinsicElementMap = {
        [K in keyof HTMLElementTagNameMap]: {
            [k: string]: string | number | boolean | ((arg?: string) => unknown) | HTMLElement;
        }
    }

    interface IntrinsicElements extends IntrinsicElementMap { }

    type Tag = keyof JSX.IntrinsicElements;

    interface Component {
        (property?: { [key: string]: any }, children?: Node[]): Node;
    }
}

declare function jsx<T extends JSX.Tag = JSX.Tag>(tag: T, attributes: { [key: string]: any } | null, ...children: Node[]): JSX.Element;
declare function jsx(tag: JSX.Component, attributes: Parameters<typeof tag> | null, ...children: Node[]): Node; 