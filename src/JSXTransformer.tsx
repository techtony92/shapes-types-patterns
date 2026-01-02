export function JSX(
    tag: JSX.Tag | JSX.Component,
    attributes: { [key: string]: any } | null,
    ...domElementChildren: Node[]
) {
    if (typeof tag === "function") {
        return tag({ ...attributes ?? {}, children: domElementChildren });
    }
    type Tag = typeof tag;
    const domElement: HTMLElementTagNameMap[Tag] = document.createElement(tag);

    // Assign Attributes
    let attributeMap = attributes ?? {};
    let attribute: keyof typeof attributeMap;

    for (attribute of Object.keys(attributeMap) as any) {
        //Extract Values:
        attribute = attribute.toString();
        const attributeValue = attributeMap[attribute] as any;
        const domElementReference = domElement as any;
        if (typeof domElementReference[attribute] === "undefined") {
            // As a fallback, attempt to set attribute:
            domElement.setAttribute(attribute, attributeValue);
        } else {
            domElementReference[attribute] = attributeValue;
        }
    }

    // Append Children
    for (let domElementChild of domElementChildren) {
        if (typeof domElementChild === "string") {
            domElement.innerText += domElementChild;
            continue;
        }
        if (Array.isArray(domElementChild)) {
            domElement.append(...domElementChild);
            continue;
        }
        domElement.appendChild(domElementChild);
    }
    return domElement;
}