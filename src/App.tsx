import React, {useState, useEffect} from 'react';
import './App.css';

type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [users, setUsers] = useState<Array<PropsType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    const onClickHandler = () => {
        setUsers([])
    }
    return (
        <div className="App">
            <button onClick={onClickHandler}>clean posts</button>
            <ul>
                {users.map((u, index) => {
                    return <li key={index}>
                        <span>{u.id} </span>
                        <span>{u.title} </span>
                        <span>{u.completed} </span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default App;
