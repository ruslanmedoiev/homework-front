import React from "react";
import { Box } from "./components/Box.styled";
import { Card } from "./components/Card.styled";
import { Image } from "./components/Image.styled";
import { Container } from "./components/Container.styled";
import { Button } from "./components/Button.styled";

function App() {
  return (
    <div className="App">
      <Box>
        <Card rounded width="300px">
          <Image src="Training SC.svg" />
          <Container flexDirection="column">
            <h2>Headline</h2>
            <p>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
              ornare in venen.
            </p>
          </Container>
          <Container flexDirection="row">
            <Button type="filled" textColor="#fff" rounded>
              See more
            </Button>
            <Button type="outlined" textColor="#4E71FE" rounded>
              Save
            </Button>
          </Container>
        </Card>
      </Box>
    </div>
  );
}

export default App;
