import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card grey z-depth-0">
            <div className="card-content">
                <h6 className="brown-text text-darken-4">
                    <strong>
                        <i className="fas fa-graduation-cap"></i> EDUCATION
                    </strong>
                </h6>
                <hr />
                <div className="row mt">
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>  Software Development MERN Stack</strong>
                                <span>Graduation October 2021</span>
                                <p>
                                University of Denver Coding Boot Camp | Denver, Colorado
                                </p>
                            </h6>
                        </blockquote>
                    </div>
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>  Associates of Applied Science in Automotive Technology</strong>
                                <span>  Graduation: December 2018 </span>
                                <p>
                                San Juan College | Farmington, New Mexico​
                                </p>
                            </h6>
                        </blockquote>
                    </div>
                    <div className="col s12">
                        <blockquote>
                            <h6 className="brown-text text-darken-4">
                                <strong>Ponderosa High School​</strong>
                                <span>Graduation: May 2011 </span>
                                <p>
                                    Parker, Colorado
                                </p>
                            </h6>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
