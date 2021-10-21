import React, { Component } from 'react'

export default class Summary extends Component {
  render() {
    return (
      <div>
        <div className="card grey  z-depth-0">
            <div className="card-content">
                <h6 className="brown-text text-darken-4">
                <strong>
                        <i className="fas fa-graduation-cap"></i> SUMMARY
                    </strong>
                </h6>
                <hr />
                <h6 className="brown-text text-darken-4">
                  <list>
                    <li>Familiar with Windows, Mac, and some Linux. </li>
                    <li>Problem-solver, dedicated, loyal, eager to always learn more.</li>
                    <li>Technical thinking, self-starter, team player.</li>
                  </list>
                </h6>
            </div>
        </div>
      </div>
    )
  }
}
