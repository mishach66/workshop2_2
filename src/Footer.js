import React from "react"

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'gray',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        bottom: 0,
        position: 'fixed',
        width: '100%'
    }
    return(
        <>
            <div style={footerStyle}>
                <h2>Footer</h2>
            </div>
        </>
    )
}

export default Footer
