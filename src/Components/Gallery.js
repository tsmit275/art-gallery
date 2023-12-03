import React from "react"

function Gallery (props) {
    return (
        <div style={{'width':'80%'}}>
            <img style={{'maxWidth' : '100w'}} src={props.objectImg} alt={props.title} />
        </div>
    )
}

export default Gallery