import React from "react"

import InPersonService from "../InPersonService"
import OnlineService from "../OnlineService"

export default function Home() {
  return (
    <div>
      <OnlineService />
      <InPersonService />
    </div>
  )
}
