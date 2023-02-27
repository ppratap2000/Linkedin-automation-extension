import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

function App() {
  function handleClick() {
    /* eslint-disable no-undef */
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        // function: () => console.log("React chrome extension alert"),
        function: () => {
          let list1 = [];
          const connectButtons =
            document.getElementsByClassName('artdeco-button');

          for (let i = 0; i < connectButtons.length; i++) {
            if (
              connectButtons[i].firstElementChild &&
              connectButtons[i].innerText === 'Connect'
            ) {
              list1.push(connectButtons[i]);
            }
          }
          for (let i = 0; i < list1.length; i++) {
            setTimeout(() => {
              // console.log(list1[i]);
              list1[i].click();
              setTimeout(() => {
                let sendButtonList =
                  document.getElementsByClassName('ember-view ml1');
                console.log(sendButtonList);
                sendButtonList[0].click();
              }, 2000);
            }, 100);
          }
        },
      });
    });
  }

  return (
    <div className="App">
      <Card align="center">
        <CardHeader>
          <Heading size="md">Linkedin Automator</Heading>
        </CardHeader>
        <CardBody>
          <Text>Click the button to automate connection request.</Text>
        </CardBody>
        <CardFooter>
          <Button onClick={handleClick} colorScheme="blue">
            Connect!
          </Button>
        </CardFooter>
      </Card>
      {/* <button onClick={handleClick}>Connect</button> */}
    </div>
  );
}

export default App;
