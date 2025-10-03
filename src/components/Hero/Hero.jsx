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
import Portal from "../../assets/images/designs/hero_portal.svg"

const interestForm = () => {
  window.location = "https://forms.gle/Xp6Li1dXW4uNEQxp8"
}

// const live = () => {
//   window.location = "/live"
// }

const apply = () => {
  console.log("apply_clicked")
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
        <div className="hero__grid__location">
          <h2 className="hero__grid__subheading">Jan 17-18, 2026</h2>
        </div>
        <div className="hero__grid__date">
          <h2 className="hero__grid__subheading">McGill University</h2>
        </div>
      </div>
      <div className="grid__clouds"></div>
      <Button disabled={false} onClick={apply}>
        Click to apply!
      </Button>
      <div className="hero__grid__signup">
        {/* <SignUpForm className="hero__signup" /> */}
        {/* <Button onClick={interestForm}>Interest Form</Button> */}
      </div>
      {/* <Button onClick={live}>Live Site →</Button> */}
      <img 
        src={Portal} 
        className="hero__portal" 
        alt="Portal" 
      />
    </div>
  </HeroStyles>
)

export default Hero
