import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card.jsx'

const App = () => {

  const [allUsers, setAllUsers] = useState([])

  async function getAPi(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

setAllUsers(response.data)
console.log(response.data)
  }



  return (
    <div className='h-full w-full bg-black flex items-center flex-col py-10 text-white'>
  <button onClick={getAPi} className='py-1 px-5 bg-emerald-500 rounded text-white w-fit'>click</button>
  <div className='flex gap-2 mt-10 flex-wrap justify-center'>
  {allUsers.map((elem, index) => (
  <Card key={index} elem={elem} />
))}
</div>
  </div>
  );
};

export default App; 