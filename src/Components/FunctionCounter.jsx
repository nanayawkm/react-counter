import React , {useState}from 'react'
 

const FunctionCounter = () => {
    const [number, SetNumber] = useState(0)

    const handleIncrease = (e) => {
        e.preventDefault(

            SetNumber(number + 1)
        )
    }

    const handledecrease = (e) => {
        e.preventDefault(

            SetNumber(number - 1)
        )
    }

  return (
    <div>
         <h1>Function State</h1>
                <br />
                <h1>{number}</h1>
                <br />
                <button onClick={handledecrease}>Decrease</button>
                <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default FunctionCounter