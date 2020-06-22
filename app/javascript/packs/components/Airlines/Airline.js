import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`

    border: 1px solid #efefef;
    background: #fff;
    text-align :center;


`
const AirLogo = styled.div`
    width : 50px;
    text-align :center;
    margin: 0 auto;
    img{
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
        margin-top: 16px
    }
`
const AirName = styled.div`
    padding: 16px 0 8px 0;
`
const LinkWrapper = styled.div`
    padding: 32px 0 16px 0;
    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 8px 16px;
        border: 1px solid #000
        width: 100%;
        text-decoration: none;
    }
`

const Airline = (props) => {
    return (
    <Card>
       <AirLogo>
           <img width="100" src={props.attributes.image_url} alt={props.attributes.avg_score} />
       </AirLogo>
       <AirName>{props.attributes.name}</AirName>
       <div className="airline-score">{props.attributes.avg_score}</div>
       <LinkWrapper>
           <Link to={ `/airlines/${props.attributes.slug}`}>
                View Airline
           </Link>
       </LinkWrapper>
    </Card>
    )
}

export default Airline