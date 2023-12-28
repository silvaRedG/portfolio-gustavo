import React from "react"

import InPersonService from "../InPersonService"
import OnlineService from "../OnlineService"
import Who from "../WhoAbout"
import Main from "../Main"
import Footer from "../Footer"

export default function Home() {
  return (
    <div>
      <Main />
      <Who />
      <OnlineService />
      <InPersonService />
      <Footer />
    </div>
  )
}
