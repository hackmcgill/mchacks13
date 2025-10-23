import React from "react"

import Container from "./Container"
import Content from "./Content"
import Text from "./Text"

const mailTo = () => {
  window.location = "mailto:sponsorship@mchacks.ca?Subject=Hello!"
}

const Sponsor = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content>
      <Text>
        <h2>Sponsoring McHacks</h2>
        <p>
          Imagine this: a room full of caffeine, creativity, and code. 500+
          students chasing the next big idea – using your tools, your tech, your
          spark.
        </p>
        <p>That’s McHacks.</p>
        <p>
          A 24-hour adrenaline rush where limits are tested and boundaries don’t
          exist. Your support fuels this magic, turning dreams into prototypes
          and imagination into impact. Bring your tech, your insight, and your
          energy, and let’s create something that lasts beyond just the 24
          Hours.
        </p>
        <p>
          View our sponsorship package at https://lnkd.in/gKyD7Jqj. Our
          sponsorship packages along with our add-ons are flexible and designed
          to meet your goals-whether it’s hiring, outreach, or community impact. <br/>
          Contact sponsor@mchacks.ca for more details.
        </p>
         {/*<Button onClick={mailTo}>Become a Sponsor</Button>*/}
      </Text>
    </Content>
  </Container>
)

export default Sponsor
