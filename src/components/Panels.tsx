import { JSX } from "../JSXTransformer";

type PanelProps = {
    id?: string,
    children?: Array<JSX.Element> | JSX.Element;
}
export function Panel({ id = "panel", children }: PanelProps) {
    return (
        <div id={id} class={`panelStructure panelDesign ${id}Structure ${id}Design`}>{children}</div>
    )
}