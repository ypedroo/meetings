import React, { Component } from 'react'
import { List, Image,  } from "semantic-ui-react";

class EventListAtendee extends Component {
  render() {
    return (
     <List.Item>
       <Image as='a'size='mini' circular src='./santa-claus.png'></Image>
     </List.Item>
    )
  }
}

export default EventListAtendee
