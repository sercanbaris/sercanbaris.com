import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://sercanbaris.com:3001/data')

            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Data from MySQL Selamx</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.ad}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
