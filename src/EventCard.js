import React from 'react'
import styled from 'styled-components'

const EventCardWrapper = styled.div`

@font-face {
  font-family: 'IBM Plex Sans', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,500;1,500&family=Inter&display=swap');
}
  box-sizing: border-box;
  border-radius: 8px;
  justify-content: left;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: #e8e8e8;
  width: auto;
  min-height: 380px;
  font-family: 'IBM Plex Sans', sans-serif;

  .EventCardImage{
    border-radius: 8px 8px 0 0;
  }

  .EventDetails{
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 16px;
    justify-content: flex-start;
  }

  .EventDetails .EventType{
    font-weight: 600;
    margin-bottom: 2%;
    font-size: 14px;
    color: #0079bd;
    letter-spacing: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5%;
  }
  .EventDetails .EventDescription{
    line-height: 140%;
    font-weight: 400;
    font-size: 16px;
    justify-content: flex-start;
  }

  .EventDetails .EventCTA{
    padding-top:5%;
    font-weight: 500;
    margin-top: auto;
    line-height: 160%;
    display: flex;
    flex-direction: row;
    gap: 5%;
    align-items: center;
  }

`

export default function EventCard(props) {
  return (
    <EventCardWrapper>
      <img src={props.img} className='EventCardImage'/>

      <div className='EventDetails'>

          <div className='EventType'>
            <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#0079BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 15.5V8.5L16.5 12L9.5 15.5Z" fill="#0079BD"/></svg></div>
            {props.type}
          </div>

          <div className='EventDescription'>
            GraphQL Observability to Diagnose & Improve Query Performance for your Hasura apps
          </div>

        <div className='EventCTA'>
          View Recordings
          <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.99988 8L11.9999 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.1665 12.5001L12.6665 8.00008L8.1665 3.50003" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          </div>

      </div>
    </EventCardWrapper>
  )
}
