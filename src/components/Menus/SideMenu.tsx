import { JSX } from "../../JSXTransformer";
import { Heading } from "../Heading";
import { Panel } from "../Panels";
export function SideMenu() {
    return (
        <aside id="aside" class="structure design">
            <Panel id={"headerPanel"}>
                <Heading level={"h2"} textContent="Controls" />
            </Panel>
            <Panel id={"skeleton"}></Panel>
            <Panel id={"skeletonlg"}></Panel>
        </aside>
    )
}