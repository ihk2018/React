import React from 'react';
import './App.css';
import delivery from './f-delivery.png';
import coin from './coin.png';
import chat from './chat.png';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import Counter from './Counter';

function App() {
  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
  return (
    <div className="App">
      <h2>Exercise 1: Extreme hobbies</h2>
      <HobbyList hobby={hobbies}></HobbyList>
      <h2>Exercise 2: Perfect customer service!</h2>
      <div className='guaranteeDiv'> 
      <Guarantee image={delivery} title='Free Shipping' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque elit, egestas quis placerat vitae, rutrum vel erat. Aliquam a nisi ac ligula dictum malesuada et sit amet lectus.'/>
      <Guarantee image={coin} title='100% Money Back' description = 'Maecenas in purus suscipit, ultrices leo eget, mollis mi. Praesent mollis nulla non nunc gravida vehicula. Praesent ante enim, vehicula in finibus non, placerat et quam.'/>
      <Guarantee image={chat} title='Online Support 7/24' description = 'Nulla est lacus, faucibus vel molestie eget, vehicula consequat felis. Suspendisse erat lorem, hendrerit euismod blandit ut, fringilla vel nunc. '/>
      </div>
      <h2>Exercise 3: It is higher than 10!</h2>
      <Counter buttonContent= {'Add 1'}></Counter>

    </div>
  );
}

export default App;
