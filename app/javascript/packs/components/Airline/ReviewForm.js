import React from 'react'
import styled from 'styled-components'

const ReviewForm  = (props) => {
    return(
       <div> 
           <form onSubmit={props.handleSubmit}>
            <div>Did you fly with { props.attributes.name} ?</div>
            <div><input onChange={props.handleChange} value={props.review.title} type="text" name="title"/></div>
            <div><input onChange={props.handleChange} value={props.review.description} type="text" name="description"/></div>
            <div><input onChange={props.handleChange} value={props.review.score} type="number" min="1" max="5" /></div>
            <button type="submit">
                Submit your Rating
            </button>
           </form>
       </div>
    )
}
export default ReviewForm;