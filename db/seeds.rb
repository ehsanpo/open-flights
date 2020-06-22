airlines = Airline.create([
    { 
      name: "United Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
    }, 
    { 
      name: "Southwest",
      image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
    },
    { 
      name: "Delta",
      image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
    }, 
    { 
      name: "Alaska Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
    }, 
    { 
      name: "JetBlue",
      image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
    }, 
    { 
      name: "American Airlines",
      image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
    }
  ])

  Review.create([
    {
        title: 'Good airline',
        description: "I hade fun day",
        score: 5,
        airline: airlines.first

    },
    {
        title: 'Good airline',
        description: "I hade fun day",
        score: 2,
        airline: airlines.first

    }
  ])