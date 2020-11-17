import React ,{ useState,useEffect} from 'react'
import axios from 'axios'


function Test2() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const renderHeader = () => {
        let headerElement = ['user_Id', 'id', 'title', 'body']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return users && users.map(({ user_Id, id, title, body }) => {
            return (
                <tr key={id}>
                    <td>{user_Id}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            )
        })
    }







    return (

        <>
        <h1 id='title'>Post Data</h1>
        <table style={{border:'solid',padding:12}}>
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    </>

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

export default Test2
