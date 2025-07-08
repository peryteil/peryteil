import { Component } from "react";
import type { FC } from "react";
import App from "./App";


type ArrowComponentProps = {
    href: string
    text: string
};

const ArrowComponent: FC<ArrowComponentProps> = props => {
    return (
        <li>
            <a href={"href"}>
                <p>{"text"}</p>
            </a>
        </li>
    );
}

export default App;