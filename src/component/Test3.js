import React ,{ useState,useEffect} from 'react'
import axios from 'axios'


function Test3() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const renderHeader = () => {
        let headerElement = ['id', 'phone', 'username', 'email']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return users && users.map(({ id, phone, username, email }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{phone}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }







    return (

    <div>
        <h1 id='title'>User Data</h1>
        <table style={{border:'solid',padding:25}}>
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    </div>

        /*
        <div>
        
         

            <table style={{border:'dotted'}}>
                <tr>
                    Id
                </tr>
                <td style={{border:'dashed'}} >
                <ul>
                {
                    users.map(user => <li key={user.id}>{user.id}</li>)
                }
            </ul>
                </td>
                <tr>
                    Number
                </tr>
                <td style={{border:'dotted'}} >
                <ul>
                {
                    users.map(user => <li key={user.id}>{user.phone}</li>)
                }
            </ul>
                </td>
                <tr>
                    UserName
                </tr>
                <td style={{border:'dashed'}} >
                <ul>
                {
                    users.map(user => <li key={user.id}>{user.username}</li>)
                }
            </ul>
                </td>
                <tr>
                    Email
                </tr>
                <td style={{border:'dotted'}} >
                <ul>
                {
                    users.map(user => <li key={user.id}>{user.email}</li>)
                }
            </ul>
                </td>
            </table>
        </div> */
    )
}

export default Test3
