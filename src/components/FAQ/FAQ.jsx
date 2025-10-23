import React from "react"

import Container from "./Container"
import QuestionGroup from "./QuestionGroup"
import Question from "./Question"
import WindowStyles from "./WindowStyles"

const FAQ = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <WindowStyles>
      <div className="content">
        <h2>FAQ</h2>
        <div className="questions">
          <QuestionGroup>
            <Question question="What is a hackathon?">
              A hackathon is a 24-hour adrenaline rush where creativity meets
              code! It’s a social coding event where programmers, designers, and
              developers team up to solve real-world challenges. At McHacks,
              you’ll gain valuable insights from industry professionals, receive
              guidance from experienced mentors, and network with sponsors and
              fellow innovators – all while enjoying free food, great vibes, and
              maybe even walking away with an awesome prize (or an internship 👀).
            </Question>
            <Question question="When and Where is McHacks?">
              McHacks takes place on <strong>January 17th–18th</strong> at the downtown McGill
              University campus.
            </Question>
            <Question question="How can I participate in McHacks?">
              Simply apply through our website! Once accepted, bring your laptop
              and your ideas – we’ll provide the rest (snacks, mentors, and{' '}
              <em>unlimited coffee refills</em> included).
            </Question>
            <Question question="Who can participate? ">
              Anyone and everyone! Whether you’re a designer or a developer,
              from Montreal or New York, in university or CEGEP – McHacks
              welcomes hackers of all kinds.
            </Question>
            <Question question="What skills do I need to participate?">
              Whatever you know right now! McHacks is all about learning,
              experimenting, and creating. Whether you’re writing your first
              “Hello, World!”, designing your first prototype, or refining your
              machine learning model, we’ll have mentors and workshops to help
              you grow.
            </Question>
            <Question question="Do I need a team?">
              While you can work alone, McHacks is a social event and working
              with others is encouraged. If you don’t have one already, there
              are a few ways to find a team: Ask your friends and invite them to
              McHacks, ask around in the McHacks Discord server, or form a team
              at our team formation session at the beginning of McHacks.
            </Question>
            <Question question="How big can my team be?">
              Teams can be up to four people.
            </Question>
            <Question question="How are projects judged?">
              See our judging criteria{" "}
              <a
                href="https://docs.google.com/document/d/1N4i41ATAZFmWyADjulUxcGhgkOhRokwbFWWRwMFbB24/edit?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                here
              </a>{" "}
              for more information.
            </Question>
            <Question question="I have more questions!">
              We have answers! Feel free to send us a DM on Facebook, Instagram,
              or Twitter, or email us at{" "}
              <a href="mailto:contact@mchacks.ca">contact@mchacks.ca</a> if you
              have any questions or concerns.
            </Question>
          </QuestionGroup>
        </div>
      </div>
    </WindowStyles>
  </Container>
)

export default FAQ
