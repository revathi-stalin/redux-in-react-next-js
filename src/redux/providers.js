"use client"

import {Provider} from "react-redux"
import reduxStore from "./store"

const Providers = (props) => {
    return <Provider store={reduxStore}>{props.children}</Provider>
}

export default Providers;