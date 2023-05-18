import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/bootstrap.min.css'

export default class MealType extends Component {
  
  render() {
    const {name,content,image}=this.props.item
    return (
        
          <div className="col-sm-12 col-md-12 col-lg-4">
          <div className="tileContainer">
            <div className="tileComponent1">
                <img src= {`./${image}`} height="150" width="140" />
            </div>
            <div className="tileComponent2">
                <div className="componentHeading">
                    <Link className='filters-link' to="/filters/1"> {name}</Link>
                <div className="componentSubHeading">
                    {content}
                </div>
                </div>
            </div>
          </div>
          </div>
    )
  }
}
