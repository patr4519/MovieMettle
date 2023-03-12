import React from 'react'
import { useDispatch } from 'react-redux';
import { searchMovie } from '../redux/slices/movieSlice';

const MainInput = () => {
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }


    return (
        <div className="mainInput">
            <input value={inputValue} onChange={inputHandler} placeholder='Movie title...'/>
            <button onClick={() => dispatch(searchMovie(inputValue))}>Go</button>
        </div>
    );
}

export default MainInput;