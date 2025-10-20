import styled from "styled-components"
import * as styleVars from "../variable"


export const HeroStyles = styled.section`
  padding-top: 50px;
  
  .hero__portal {
    width: 20%;
    margin: 200px 0px;

    @media (max-width: 1800px) {
      width: 22%;
      margin: 150px 0px;
    }

    @media (max-width: 1700px) {
      width: 20%;
      margin: 100px 0px;
    }

    @media (max-width: 1550px) {
      width: 18%;
      margin: 50px 0px;
    }

    @media (max-width: 1400px) {
      margin: 10px 0px;
    }

    @media (max-width: 1250px) {
      display: none;
    }
  }
  
  .hero__wrapper {
    margin-top: 50px;
  }

  .hero__images-container {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;

    .hero__star1, .hero__star2, .hero__star3, .hero__star4, .hero__moon, .hero__saturn {
      fill: white;
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.8));
      animation: shine 2.5s infinite ease-in-out, floatUpDown 3.5s ease-in-out infinite;
    }
    
    .hero__leftCloud, .hero__rightCloud {
      animation: floatUpDown 5s ease-in-out infinite;
    }
    
    .hero__leftCloud-container {
      position: relative;
    }
    
    .hero__leftCloud {
      animation-delay: 1.7s;
    }

    .hero__rightCloud {
      animation-delay: 3.3s;
    }

    .hero__star1 {
      animation-delay: 3s;
    }    
    
    .hero__star2 {
      animation-delay: 1.3s;
    }
    
    .hero__leftMoon-stars {
      position: absolute;
      top: -15%;
      left: 10%;
    }

    .hero__rightCloud-container {
      position: relative;
    }
    
    .hero__saturn {
      position: absolute;
      top: -27%;
      right: 20%;
      animation-delay: 1.5s;
    }

    .hero__star3 {
      position: absolute;
      top: 0;
      right: 250px;
      animation-delay: 1s;
    }

    .hero__star4 {
      position: absolute;
      top: 80px;
      right: 150px;
      animation-delay: 0.3s;
    }


    @keyframes shine {
      0%, 100% {
        filter: drop-shadow(0 0 4px rgba(255,255,255,0.6));
      }
      50% {
        filter: drop-shadow(0 0 12px rgba(255,255,255,1));
      }
    }

    @keyframes floatUpDown {
      0% {
        transform: translateY(0); /* Start at original position */
      }
      50% {
        transform: translateY(-10px); /* Move up by 10 pixels */
      }
    }


    .hero__heading-image {
      width: 45%;
      height: auto;
      margin-left: -70px;
      display: block;
      fill: white;
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.8));
    }

      @media only screen and (max-width: ${styleVars.mdUp}) {
        width: 8%;
      }

      @media only screen and (max-width: ${styleVars.smUp}) {
        width: 7%;
      }

      @media only screen and (max-width: ${styleVars.xsUp}) {
        width: 6%;
      }
    }
  }

  .hero__wrapper {
    display: flex;
    flex-direction: column;
    z-index: 1;
    text-align: center;
    width: 100%;
    padding-top: 240px;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .hero__grid {
    display: flex;
    gap: 300px;
    max-width: 100%;
    justify-content: space-between;
    margin-top: -50px;
    letter-spacing: 0.5px;
    word-spacing: 5px;
    margin-bottom: 50px;

    & > div {
      font-family: "Afacad", sans-serif;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .hero__heading-image {
      grid-column: 1 / span 3;
      width: 100%;
    }

    .hero__grid__shapes {
      grid-column: 1;
      grid-row: 2 / span 2;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .hero__grid__location {
      grid-column: 2;
      grid-row: 2;
    }

    .hero__grid__date {
      grid-column: 3;
      grid-row: 2;
    }

    .hero__grid__subheading {
      font-size: 35px;
      line-height: normal;
      margin: 0;
      font-weight: 400;
      text-align: center;
      color: #d9f1ff;
      letter-spacing: -1.2px;
    }
  }

  .hero__heading {
    display: none; /* Leave in h1 for SEO */
  }

  .hero__grass_image {
    width: 100%;
    margin-bottom: -10px;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    padding-top: 30px;

    .hero__wrapper {
      padding-top: 200px;
      gap: 20px;
    }

    .hero__grid {
      margin: 10px;
      max-width: 720px;
    }

    .hero__images-container {
      max-width: 450px;
    }

    .hero__grid__subheading {
      font-size: 20px;
    }

    button {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
  @media only screen and (max-width: ${styleVars.smUp}) {
    padding-top: 10px;
    .hero__wrapper {
      padding-top: 130px;
      gap: 15px;
    }

    .hero__grid {
      margin: 10px;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      max-width: 85%;

      .hero__heading-image {
        grid-column: 1 / span 2;
        width: 80%;
      }

      .hero__grid__location,
      .hero__grid__date {
        grid-column: 1;
        grid-row: auto;
        width: 100%;
      }

      .hero__grid__subheading {
        font-size: 18px;
      }
    }

    .hero__images-container {
      max-width: 300px;
      margin-top: 10vh;
    }

    button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    padding-top: 10px;
    .hero__wrapper {
      padding-top: 100px;
      gap: 10px;
    }

    .hero__grid {
      max-width: 90%;
      margin: 10px;

      .hero__grid__subheading {
        font-size: 16px;
      }
    }

    .hero__images-container {
      max-width: 250px;
    }

    button {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`

export default HeroStyles
