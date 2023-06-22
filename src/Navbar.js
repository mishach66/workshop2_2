import React from "react"

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: 'gray',
        color: 'white',
        display: 'flex',
        justifyContent: 'center'
    }
    return(
        <>
            <div style={navbarStyle}>
                <h1>Navbar</h1>
            </div>
        </>
    )
}

export default Navbar
