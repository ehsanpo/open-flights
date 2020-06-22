import React, { useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Home = styled.div`
    text-align :center;
    max-width: 1200px;
    margin: 0 auto;
`
const Header = styled.div`
    padding : 15vh 15vw;
    h1 {
        font-size: 48px;
    }

`
const SubHeader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns : repeat(4, 1fr);
    grid-gap : 16px;
    width: 100%;
    padding:16px;

`

const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('/api/v1/airlines.json')
        .then(resp => {setAirlines(resp.data.data)})
        .catch(resp => console.log(resp) )
    }, [airlines.length])

    const grid= airlines.map( item => { 
        return (
            <Airline key={item.attributes.name} 
            attributes={item.attributes}     
            />
        )
    })
    return (
        <Home>
            <Header>
                <h1>OpenFlights</h1>
                <SubHeader>Airline Reviews</SubHeader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Airlines