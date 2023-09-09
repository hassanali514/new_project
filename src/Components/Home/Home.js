import React,{Fragment} from "react"
import SliderComp from "../Layout/Slider/Slider"
import ScrollToTopButton from "../ScollToTopButton/ScrollToTopButton"
import Organization from "../Layout/Organization/Organization"

const Home = () => {
    return (
        <Fragment>
            <ScrollToTopButton/>
            <SliderComp/>
            <Organization/>
        </Fragment>
    )
}

export default Home