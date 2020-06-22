import React, { useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import ReviewForm from './ReviewForm'

const Wrapper = styled.div`
    margin : 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
`
const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow:scroll;

    &:last-child{
        background: #000
    }
`

const Airline = (props) => {

    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`
        axios.get(url)
        .then(resp => {
            setAirline(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp) )
    }, [airline.length])

    const handleChange = (e) =>{
        e.preventDefault;
        setReview({...review,[e.target.name]: e.target.value })
        console.log(review)
    }
    const handleSubmit = (e) =>{
        e.preventDefault;
    }

    return (
        <Wrapper>
            {loaded &&
            <Fragment>
                <Column>
                    <Header 
                        attributes={airline.data.attributes}
                        reviews={airline.included}
                    />
                    <div className="review">

                    </div>
                </Column>
                <Column>
                    <div className="review-form">
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes= {airline.data.attributes}
                            review={review}
                        />
                    </div>
                </Column>
            </Fragment>
            }
        </Wrapper>
    )
}

export default Airline