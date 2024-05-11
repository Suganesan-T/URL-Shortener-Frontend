// URLTable.js (new component)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function URLTable() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        fetchURLs();
    }, []);

    const fetchURLs = async () => {
        try {
            const response = await axios.get('http://localhost:4000/geturl');
            setUrls(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching URLs:', error);
        }
    };

    return (
        <div>
            <Header/>
            <div className='d-flex flex-column  align-items-center vh-100 w-100 mt-5'>
            <h1>List Of URL Created</h1>
            <div className='w-80 rounded bg-white border shadow p-4'>
                <table className='table table-striped'>
                    <thead>
                        <tr className='text-center'>
                            <th>SNO.</th>
                            <th>LONG URL</th>
                            <th>SHORT URL</th>
                            <th>VISITED COUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls.map((url, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{ maxWidth: '800px', overflowWrap: 'break-word' }}>{url.longurl}</td>
                                <td>{url.shorturl}</td>
                                <td className='text-center'>{url.visit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
        </div>
    );
}

export default URLTable;
