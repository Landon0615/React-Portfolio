import React, { Component } from 'react'

export default class Summary extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-3 z-depth-0">
            <div className="card-content">
                <h6 className="no-pad mt-bottom brown-text text-darken-4">
                    <strong>SUMMARY</strong>
                </h6>
                <p className="pt brown-text text-darken-4">
                  <list>
                    <li>Familiar with Windows, Mac, and some Linux. </li>
                    <li>Problem-solver, dedicated, loyal.</li>
                    <li>Technical thinking, self-starter, team player.</li>
                  </list>
                </p>
            </div>
        </div>
      </div>
    )
  }
}
