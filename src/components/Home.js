import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>

        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          leftBtnText="Customer Order"
          rightBtnText="Existing inventory"
          backgroundImg="model-s.jpg"
        />

        <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          leftBtnText="Customer Order"
          rightBtnText="Existing inventory"
          backgroundImg="model-y.jpg"
        />

        <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          leftBtnText="Customer Order"
          rightBtnText="Existing inventory"
          backgroundImg="model-3.jpg"
        />

        <Section 
          title="Model X"
          description="Order Online for Touchless Delivery"
          leftBtnText="Customer Order"
          rightBtnText="Existing inventory"
          backgroundImg="model-x.jpg"
        />


        <Section 
          title="Lowest Cost Solar Panels in America"
          description="Money-back Guarantee"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
          backgroundImg="solar-panel.jpg"
        />

        <Section 
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roofs"
          leftBtnText="Order Now"
          rightBtnText="Learn more"
          backgroundImg="solar-roof.jpg"
        />

        <Section 
          title="Accessories"
          leftBtnText="Shop Now"
          backgroundImg="accessories.jpg"
        />

    </Container>
  )
} 

export default Home

const Container = styled.div`
    height: 100vh;
` 