import React, {useState} from "react"
import './Style.css'

const Tabs = (props) => {
    const [tabsArray, setTabsArray] = props

    return (
        tabsArray.map((tab, idx) => (
        <div className="tab">{tab.label}</div>
        ))
    )
}

export default Tabs