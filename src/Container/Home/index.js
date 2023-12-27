import React from "react"

import InPersonService from "../InPersonService"
import OnlineService from "../OnlineService"
import Who from "../WhoAbout"

export default function Home() {
  return (
    <div>
      <Who />
      <OnlineService />
      <InPersonService />
    </div>
  )
}
