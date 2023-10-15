import React, { useState } from 'react'
import "./Myapp.css"
function Myapp() {
    const [click, setclick] = useState({
        email: " ",
        password: " "
    })

    const [record, setrecord] = useState([])

    const submit = (x) => {
        x.preventDefault();

        setrecord([...record, { ...click }])

        setclick({
            email: '',
            password: ""
        })
    }

    const deleted = (y) => {
        const onedelete = record.filter((x) => (x !== y))
        setrecord(onedelete)
    }
    return (
        <div>
            <div className='box'>
                <form onSubmit={submit}>
                    <label>Email: </label>
                    <input type='text' autoComplete='off' name="email" value={click.email} onChange={(x) => { setclick({ ...click, [x.target.name]: x.target.value }) }} /><br /><br />
                    <label>Password: </label>
                    <input type='password' autoComplete='off' name="password" value={click.password} onChange={(x) => { setclick({ ...click, [x.target.name]: x.target.value }) }} /><br /><br />
                    <button type='submit' className='btn'>Submit</button>
                </form>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((x) => {
                            return <tr>
                                <td>{x.email}</td>
                                <td>{x.password}</td>
                                <button type='delete' className='btnn' onClick={() => { deleted(x) }}>Delete</button>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button type='delete' onClick={() => { setrecord([]) }} className='btnnn'>delete all</button>
        </div>
    )
}

export default Myapp