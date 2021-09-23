import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card grey z-depth-0 mt">
            <div className="card-content contactInfo">
                <p className="brown-text text-darken-4 pt">
                    <i className="fas fa-map-marker-alt"></i> Franktown, Colorado, 80116
                    <br/>
                    <i className="fas fa-phone"></i>  720-665-4139
                    <br />
                    <i className="fas fa-envelope-square"></i> Landon.waddell@gmail.com​
                    <br />
                </p>
            </div>
        </div>
      </div>
    )
  }
}
