import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { messageChange, messageSave } from '../../actions/actionCreators';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function MessageEditForm() {
    // react-redux:
    // - useSelector -> позволяет выбирать кусочек state
    // - useDispatch -> позволяет получать dispatch
    const { item, loading, error } = useSelector(state => state.messages.edit);
    // const { loading : loadingList } = useSelector(state => state.messages.list);
    const { items } = useSelector(state => state.messages.list);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'end'
        });
        }, 1000);
        // if (loadingList === true) {
        //     return;
        // }
        
    }, [items.length])

    const inputRef = useRef(null);

    const handleSubmit = evt => {
        evt.preventDefault();
        // messageSave(dispatch, item);
        dispatch(messageSave(item)); // благодаря redux thunk
    };

    const handleChange = evt => {
        const { value } = evt.target;
        dispatch(messageChange({ content: value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} onChange={handleChange} value={item.content} />
            <button>Ok</button>
        </form>
    )
}





