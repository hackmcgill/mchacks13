import React from "react"

import Container from "./Container"
import Text from "./Text"
import { Content } from "./Content"

const About = ({ scrollRef }) => (
  <Container ref={scrollRef} style={{}}>
    <Content>
      <Text>
        <h1>Dream, develop, deploy!</h1>
        <p>
          For 24 hours, over 500 of the boldest young minds come 
          together at McGill University for a jam-packed weekend 
          of beginner-to-pro workshops, networking, and epic hacking.
        </p>
        <p>
          Whether you're writing your first line of code, playing around
          with APIs, or building the next blockchain, McHacks is the place 
          for you. We'll see you this January at the 12th annual rendition 
          of Canada's original collegiate hackathon!
        </p>
      </Text>
    </Content>
  </Container>
)

export default About
