import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   padding: 46px 46px 46px 0;
   img{
        height: 64px;
        width: 64px;
        border-radius: 100%;
        margin-bottom: -16px;
        margin-right: 16px;
   }
`

const Header  = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length
    return(
        <Wrapper>
            <h1> <img src={image_url} alt={name}/>{name}</h1>
            <div>
                <div className="totalReviews">{total} User Reviews</div>
                <div className="starReviews"></div>
                <div className="totalOutOf">{avg_score} out of 5</div>
            </div>
        </Wrapper>
    )
}
export default Header;