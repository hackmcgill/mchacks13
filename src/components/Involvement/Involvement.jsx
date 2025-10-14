import React from "react"

import Container from "./Container"
import QuestionGroup from "./QuestionGroup"
import Question from "./Question"
import WindowStyles from "./WindowStyles"

const Involvement = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <WindowStyles>
      <div className="content">
        <h2>Other ways to get involved</h2>
        <div className="questions">
          <QuestionGroup>
            <Question question="Become a Judge">
              A hackathon is a social coding event where programmers, designers,
              and developers collaborate to solve a problem.
            </Question>

            <Question question="Become a Mentor">
              This year, we'll be running McHacks for 24 hours! It will be on
              the weekend of January 25-26.
            </Question>

            <Question question="Volunteer with us">
              This year McHacks is taking place in person at the University
              Centre Building on the McGill University campus. We’ll provide
              more details on the specifics as we get closer to McHacks, but
              right now all you need to do is apply.
            </Question>
          </QuestionGroup>
        </div>
      </div>
    </WindowStyles>
  </Container>
)

export default Involvement
