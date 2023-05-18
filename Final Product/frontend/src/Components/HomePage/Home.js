import React, { Component } from 'react'
import Wallpaper from './Wallpaper'
import QuickSearch from './QuickSearch'
import '../../Styles/Home.css'
import '../../Styles/bootstrap.min.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Wallpaper/>
        <QuickSearch/>
      </div>
    )
  }
}
