import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const goRhymes = [
  "Bio", "Blow", "Bo", "Bow", "Bro", "Bros", "Crow", "Crowe", "Doh", "Dough", "Faux", "Flow", "Foe", "Glow", , "Go",
  "Grow", "Hoe", "Jo", "Joe", "Know", "Low", "Moe", "Mow", "No", "Oh", "Pro", "Row", "Schmoe", "Sew", "Show", "Slow",
  "Snow", "So", "Sow", "Stow", "Though", "Throw", "Toe", "Tow", "Whoa", "Woe", "Yo"]

const teamRhymes = [
  "Beam", "Bream", "Cream", "Creme", "Dream", "Gleam", "Ream", "Scheme", "Scream", "Seam", "Seem", "Steam", "Stream",
  "Team", "Theme"
]

const wholeRhymes = [
  "Agleam", "Airstream", "Beseem", "Blaspheme", "Bloodstream", "Crossbeam", "Daydream", "Downstream", "Esteem", "Extreme",
  "Inseam", "Mainstream", "Midstream", "Millstream", "Moonbeam", "Pipedream", "Racemeredeem", "Regime", "Sunbeam",
  "Supreme", "Upstream"
]


const getRandom = (list) => {
  const rndIndex = Math.floor(Math.random() * (list.length - 1))
  return list[rndIndex]
}

export default class App extends Component {

  constructor() {
    super()
    this.state = { show: false }
  }

  render() {
    let phrase = ""
    const percentageWholeRhymes = wholeRhymes.length / (goRhymes.length + teamRhymes.length)
    if (Math.random() > percentageWholeRhymes) {
      phrase = `${getRandom(goRhymes)} ${getRandom(teamRhymes)}`
    } else {
      phrase = getRandom(wholeRhymes)
    }

    if (!this.state.show) return <button onClick={() => this.setState({ show: true })}>GO!</button>
    return <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={false}
      transitionLeave={false}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ marginTop: 200, fontSize: "100px", maxWidth: "50%" }}>{phrase}</span>
      </div>
    </ReactCSSTransitionGroup >
  }
}
