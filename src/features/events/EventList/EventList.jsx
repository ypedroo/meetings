import React, { Component } from 'react'
import EventListItem from '../EventList/EventListItem'

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>Event EventList</h1>
        <EventListItem/>
        <EventListItem/>   
      </div>
    )
  }
}

export default EventList
