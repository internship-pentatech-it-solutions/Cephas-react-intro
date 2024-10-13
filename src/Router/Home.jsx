import React, {useState} from 'react'

const Home = () => {
  const [counter, setCounter] = useState(0);
  /*setCounter(5);*/
  return (
    <div className='px-16'>
      <h1>{counter}</h1>
      <button
  onClick={() => setCounter(counter + 1)}
  className="border border-black px-3 rounded"
>
  Increase
</button>
        </div>
  )
}

export default Home