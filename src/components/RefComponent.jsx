import React, {useRef} from 'react'


const RefComponent = () => {
    const inputRef = useRef()

const checkRef = () => {
    alert(`Your input has the string: ${inputRef.current.value}`)
    inputRef.current.value = ""
    inputRef.current.focus()
    // 8-10  alerts what you wrote, clears input, focuses curser on input
    
}


    return (
        <div className='card'>
            <h2>UseRef</h2>
            <input type="text"  ref={inputRef}/>
            <button>Whats my ref?</button>
        </div>
    )
}

export default RefComponent