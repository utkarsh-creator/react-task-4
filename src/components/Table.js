import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./styles.css"

export function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://dummyjson.com/users")
        .then((res) => {
            if(res.status === 200)
            {
                setData(res.data.users);
                console.log(res.data.users);
            }
            else
            {
                Promise.reject();
            }
        })
        .catch((err) => {alert(err)})
    }, [])
    return(
        <div className='container'>
            <table className='text-light'>
                <tr>
                    <th>Sno</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
                {data.map((val) => (
                    <tr>
                        <td>{val.id}</td>
                        <td><img src={val.image} alt={val.id} style={{width:"50px"}}></img></td>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.gender}</td>
                        <td>{val.email}</td>
                        <td>{val.username}</td>
                        <td>{val.domain}</td>
                        <td>{val.ip}</td>
                        <td>{val.university}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}