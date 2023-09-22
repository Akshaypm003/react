import React from 'react'

function Child() {
    return(
        <>
            <h2>Hii.. i'm child</h2>
            <form action="/path">
                <label htmlFor="mail">Enter Email</label> <br />
                <input type='email' name='mail'/> <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Child