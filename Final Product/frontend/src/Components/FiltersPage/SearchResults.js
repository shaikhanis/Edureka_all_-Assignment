import React from 'react'
import { Link } from 'react-router-dom';

export default function SearchResults(props) {
    console.log(props);
    const cuisineList=props.item.Cuisine.length &&props.item.Cuisine.map((item)=><span key={item.name}>{item.name}.&nbsp;</span>)
  return (
    <div className="Item">
    <div className='small-big'>
        <div className="small-item vertical">
            <img className="img" src={props.item.thumb} />
        </div>
        <div className="big-item">
            <div className="rest-name"><Link className='filter-details-link' to={`/details/${props.item.name}`}>{props.item.name}</Link> </div>
            <div className="rest-location">{props.item.locality}</div>
            <div className="rest-address">{props.item.address}</div>
        </div>
    </div>
    <hr />
    <div>
        <div className="margin-left">
            <div className="Bakery">CUISINES : {cuisineList}</div>
            <div className="Bakery">COST FOR TWO :&nbsp;&#8377;{props.item.cost} </div>
        </div>
    </div>
    </div>
  )
}
