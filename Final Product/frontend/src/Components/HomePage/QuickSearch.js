import React, { Component } from 'react'
import MealType from './MealType'

export default class QuickSearch extends Component {

  constructor(){
    super();
    this.state={
      mealtypes:[]
    }
  }

  componentDidMount(){
    fetch(`http://localhost:7001/zomato/mealtypes`)
    .then((response)=>response.json())
    .then((data)=>{this.setState({mealtypes:data.data});console.log(data.data)})
  }

  render() {
    let quickSearchList=this.state.mealtypes.length && this.state.mealtypes.map((item)=><MealType item={item} key={item.name}/>)
    return (
      <div>
        <div className="quicksearch">
                <p className="quicksearchHeading">
                    Quick Searches
                    </p>
                <p className="quicksearchSubHeading">
                    Discover restaurants by type of meal
                    </p>
                <div className="container-fluid">
                    <div className="row">
                    {quickSearchList}
                    </div>
                </div>
        </div>
      </div>
    )
  }
}
