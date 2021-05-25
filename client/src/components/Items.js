import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Items = () => {
    const [data, setItem] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            const { data } = await axios.get('/api/post');
            setItem(data);
            console.log(data);
        };

        getDetails();
    }, []);

    return (
        <>
            <div className="card text-white bg-primary mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Items;
