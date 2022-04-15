import React from 'react'
import EventCard from './EventCard'
import {HostMod} from './dapi-card'
import { ThreeColumnWrapper } from './ThreeColumn'

export default function Compage() {
  return (
            <>
            
            <HostMod
              title="Hasura Super App: Building custom authentication with Hasura Actions"
              description="In today's show we'll look at the login actions for the Hasura Super App and talk about which behaviours could or should live in custom business logic handlers"
              imgsrc="https://i.imgur.com/tGDtsHE.png"
              imgsrc2="https://i.imgur.com/tGDtsHE.png"
              />
              <ThreeColumnWrapper>
              <EventCard
                img="https://i.imgur.com/Cf5lhtS.png"
                type="WEBINAR"
              />
              <EventCard
                img="https://i.imgur.com/Cf5lhtS.png"
                type="WEBINAR"
              />
              <EventCard
                img="https://i.imgur.com/Cf5lhtS.png"
                type="WEBINAR"
              />
              </ThreeColumnWrapper>
            

              </>
  )
}
