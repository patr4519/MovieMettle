import React from 'react'

const MainInput = () => {
    const [inputValue, setInputValue] = React.useState('')

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="mainInput">
            <input value={inputValue} onChange={inputHandler} placeholder='Movie title...'/>
        </div>
    );
}

export default MainInput;