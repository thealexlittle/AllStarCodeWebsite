import React from 'react';
import Card from 'react-bootstrap/Card';




function Sidebar(){
    return (
        <Card bg = "dark" variant = "dark">
  <Card.Img variant="top" src="../images/me.jpg" />
  <Card.Body>
    <Card.Title>Alexander Little </Card.Title>
    <Card.Text>
      I'm still trying to  figure it all out.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

    )
}

export default Sidebar;
