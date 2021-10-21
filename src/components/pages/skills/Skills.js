import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card grey  z-depth-0">
            <div className="card-content">
                <h6 className="grey-text">
                    <strong># PROFESSIONAL SKILLS</strong>
                </h6>
                <hr />
                <div className="row pt">
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">HTML</p>
                        <div className="progress white">
                            <div className="determinate teal" style={{ width: '89%' }}></div>
                        </div>
                    </div>
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">CSS</p>
                        <div className="progress white">
                            <div className="determinate teal " style={{ width: '99%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="row pt">
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">JAVASCRIPT</p>
                        <div className="progress white">
                            <div className="determinate teal" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">PHP</p>
                        <div className="progress white">
                            <div className="determinate teal" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="row pt">
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">GraphQL</p>
                        <div className="progress white">
                            <div className="determinate teal" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">Material-ui</p>
                        <div className="progress white">
                            <div className="determinate teal" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
