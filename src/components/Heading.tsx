import { JSX } from "../JSXTransformer";
/*
props: {
level:union
textContent:string
}
**/
type HeadingProps = {
    level: 'h1' | 'h2' | 'h3' | 'h4',
    textContent: string
}
export function Heading({ level, textContent }: HeadingProps) {
    return (
        <h2 class={`headerStructure headerDesign ${level}Structure ${level}Design`}>{textContent}</h2>
    )
}