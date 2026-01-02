import { JSX } from "./JSXTransformer";
import { sq1, rect1, circle1, tri1 } from "./constants";
import { appendRef } from "./useVanilla/refSystem";
import { Navbar } from "./components/navigation/Navbar";
import { SideMenu } from "./components/Menus/SideMenu";
import { Playground } from "./components/Playground";
export default function ComponentRoot() {

    return (
        <div id="root">
            <Navbar />
            <main id="main" class="">
                <SideMenu />
                <Playground />

            </main>
            <div class=""></div>
        </div>
    )
}

