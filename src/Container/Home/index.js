import React from "react"

import Feedback from "../Feedbacks"
import Footer from "../Footer"
import InPersonService from "../InPersonService"
import Main from "../Main"
import OnlineService from "../OnlineService"
import Plan from "../Plan"
import Who from "../WhoAbout"
import Planning from "../Planning"

export default function Home() {
  return (
    <div>
      <Main />
      {/* <Plan /> */}
      <Who />
      <Planning />
      <OnlineService />
      <InPersonService />
      <Feedback />
      <Footer />
    </div>
  )
}
