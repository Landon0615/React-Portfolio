import React, { Component } from 'react'

export default class Summary extends Component {
  render() {
    return (
      <div>
        <div className="card grey  z-depth-0">
            <div className="card-content">
                <h6 className="no-pad mt-bottom grey text-darken-4">
                    <strong>SUMMARY</strong>
                </h6>
                <p className="pt grey text-darken-4">
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
