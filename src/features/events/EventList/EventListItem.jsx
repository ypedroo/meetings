import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";

class EventListItem extends Component {
  render() {
    return (
      <div>
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image size="tiny" circular src="./santa-claus.png"/>
                      <Item.Content>
                        <Item.Header as="a">Event Title</Item.Header>
                        <Item.Description>
                          posted by <a>somebody</a>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> date |
                    <Icon name="marker" /> time
                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                    {/* todo: attendees go here */}
                  </List>
                </Segment>
                <Segment clearing>
                  <Button as="a" color="orange" floated="right" content="View" />
                </Segment>
              </Segment.Group>
      </div>
    )
  }
}

export default EventListItem
