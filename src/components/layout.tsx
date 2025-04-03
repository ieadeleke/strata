import React from "react";
import Footer from "./footer";
import Navigation from "./nav";

interface LayoutPropsInterface {
    hideExtra?: boolean
    children: React.ReactElement
}

const DisplayLayout = (props: LayoutPropsInterface) => {
    return (
        <div>
            <Navigation hideExtra={props.hideExtra} />
            {props.children}
            <Footer hideExtra={props.hideExtra} />
        </div>
    )
}

export default DisplayLayout;