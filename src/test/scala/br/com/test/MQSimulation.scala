package br.com.test

import java.util.concurrent.ThreadLocalRandom

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class MQSimulation extends Simulation {


  val HTTP = http
    .baseUrl("http://localhost:8081")
    .doNotTrackHeader("1")
    .inferHtmlResources()
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:59.0) Gecko/20100101 Firefox/59.0")


  val userScenario = scenario("Create")
    .forever(
      exec(_.set("randomValue", ThreadLocalRandom.current.nextInt(20000)))
        .exec(
          http("create")
            .get("/put/${randomValue}")
            .check(status.is(200))
        )
    )


  setUp(
    userScenario.inject(
      atOnceUsers(2), //warm up
      nothingFor(30 seconds),
      rampUsers(10) during (30 seconds),
    )
  )
    .maxDuration(5.5 minutes)
    .protocols(HTTP)
}
