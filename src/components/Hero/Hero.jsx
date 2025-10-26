import React from "react"
import Button from "./Button"
import HeroStyles from "./HeroStyles"
import SignUpForm from "./SignUpForm"
import McHacksLogo from "../../assets/images/designs/mchacks13-heroLogo.svg"
import Moon from "../../assets/images/designs/mchacks13-moon.svg"
import LeftCloud from "../../assets/images/designs/mchacks13-leftCloud.svg"
import RightCloud from "../../assets/images/designs/mchacks13-rightCloud.svg"
import Saturn from "../../assets/images/designs/mchacks13-saturn.svg"
import star1 from "../../assets/images/designs/mchacks13-star1.svg"
import star2 from "../../assets/images/designs/mchacks13-star2.svg"
import star3 from "../../assets/images/designs/mchacks13-star3.svg"
import star4 from "../../assets/images/designs/mchacks13-star4.svg"
import Portal from "../../assets/gifs/mchacks13-portal.gif"
import clickToApply from "../../assets/images/designs/click-apply.svg"

const interestForm = () => {
  window.location = "https://forms.gle/Xp6Li1dXW4uNEQxp8"
}

// const live = () => {
//   window.location = "/live"
// }

const apply = () => {
  window.location = "https://app.mchacks.ca/"
}

const Hero = () => (
  <HeroStyles>
    <div className="hero__wrapper">
      <div className="hero__clouds"></div>
      <h1 className="hero__heading">McHacks 13</h1>
      <div className="hero__images-container">
        <div className="hero__leftCloud-container">
          <img src={LeftCloud} className="hero__leftCloud" alt="Cloud" />
          <div className="hero__leftMoon-stars">
            <img src={star1} className="hero__star1" alt="Star" />
            <img src={Moon} className="hero__moon" alt="Moon" />
            <img src={star2} className="hero__star2" alt="Star" />
          </div>
        </div>
        <img
          className="hero__heading-image"
          src={McHacksLogo}
          alt="McHacks 12"
        />
        <div className="hero__rightCloud-container">
          <img src={RightCloud} className="hero__rightCloud" alt="Cloud" />
          <img src={Saturn} className="hero__saturn" alt="Saturn" />
          <img src={star3} className="hero__star3" alt="Star" />
          <img src={star4} className="hero__star4" alt="Star" />
        </div>
        {/* <h1 className="hero__temp-heading">McHacks 13</h1> */}
      </div>
      <div className="hero__grid">
        <div className="hero__grid__date">
          <h2 className="hero__grid__subheading">Jan. 17-18, 2026 | In-Person | McGill University</h2>
        </div>
      </div>
      <div className="grid__clouds"></div>
      <img
        src={clickToApply}
        className="hero__apply"
        alt="Click to apply"
      />
      {/*<Button disabled={false} onClick={apply}>*/}
      {/*  Click to apply!*/}
      {/*</Button>*/}
      {/* <Button onClick={live}>Live Site →</Button> */}
      {/*Necessary for clicking to work*/}
      <div className="invisible-apply" onClick={apply} />
      <img
        src={Portal}
        onClick={apply}
        className="hero__portal" 
        alt="Portal" 
      />
    </div>
  </HeroStyles>
)

export default Hero
