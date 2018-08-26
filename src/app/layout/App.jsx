import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css'
import { Container } from 'semantic-ui-react'
import EventDashboad from '../../features/events/EventDashboard/EventDashboad'
import NavBar from '../../nav/navBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Container className="main">
          <h1>Meetings</h1>
          <EventDashboad></EventDashboad>
        </Container>
      </div>
    );
  }
}

export default App;

