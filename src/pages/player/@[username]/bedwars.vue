<template>
  <div class="player-content">
    <div class="content-main">
      <div class="player-header">
        <div class="details">
          <h1 v-if="props.hypixel">
            <Rank
              :username="props.mojang.username"
              :rank="props.hypixel.newPackageRank"
              :monthly="props.hypixel.monthlyPackageRank"
              :plusColor="props.hypixel.rankPlusColor"
              :monthlyColor="props.hypixel.monthlyRankColor"
              :otherRank="props.hypixel.rank"
              :otherPrefix="props.hypixel.prefix"
            />
          </h1>
          <h1 v-else>{{ props.mojang.username }}</h1>
          <h2>500 views / month</h2>
          <div class="divider" v-if="props.hypixel"></div>
          <div class="overview-stats" v-if="props.hypixel">
            <div class="header-stat">
              <h1>W/L</h1>
              <h2>
                <Number
                  v-bind:number="props.hypixel.games.bedwars.winLossRatio"
                />
              </h2>
            </div>
            <div class="header-stat">
              <h1>Final K/D</h1>
              <h2>
                <Number
                  v-bind:number="props.hypixel.games.bedwars.killDeathRatio"
                />
              </h2>
            </div>
            <div class="header-stat">
              <h1>Beds Broken/Lost</h1>
              <h2>
                <Number
                  v-bind:number="
                    props.hypixel.games.bedwars.bedsBrokenBedsLostRatio
                  "
                />
              </h2>
            </div>
            <div class="header-stat">
              <h1>Winstreak</h1>
              <h2>
                <Number v-bind:number="props.hypixel.games.bedwars.winstreak" />
              </h2>
            </div>
          </div>
        </div>
        <div class="skin">
          <canvas id="skin_container"></canvas>
        </div>
      </div>
      <div class="card-horz space nomarg" v-if="props.hypixel">
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Final Kills</h1>
              <h2>
                <Number
                  v-bind:number="props.hypixel.games.bedwars.finalKills"
                />
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Final Deaths</h1>
              <h2>
                <Number
                  v-bind:number="props.hypixel.games.bedwars.finalDeaths"
                />
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Final Kill/Death</h1>
              <h2>
                <Number
                  v-bind:number="
                    props.hypixel.games.bedwars.finalKillDeathRatio
                  "
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="card-horz space nomarg" v-if="props.hypixel">
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Wins</h1>
              <h2>
                <Number v-bind:number="props.hypixel.games.bedwars.wins" />
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Losses</h1>
              <h2>
                <Number v-bind:number="props.hypixel.games.bedwars.losses" />
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Win/Loss</h1>
              <h2>
                <Number
                  v-bind:number="props.hypixel.games.bedwars.winLossRatio"
                />
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Winstreak</h1>
              <h2>
                <Number v-bind:number="props.hypixel.games.bedwars.winstreak" />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="card-horz space nomarg" v-if="props.hypixel">
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Kills</h1>
              <h2>
                <Number v-bind:number="props.hypixel.games.bedwars.kills" />
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Deaths</h1>
              <h2>
                <Number v-bind:number="props.hypixel.games.bedwars.deaths" />
              </h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="stat margin">
            <div class="content">
              <h1>Kill/Death</h1>
              <h2>
                <Number
                  v-bind:number="props.hypixel.games.bedwars.killDeathRatio"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Accordion title="More Stats" v-if="props.hypixel">
        <h1 class="accordion-subtitle">Overview</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Experience</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.experience"
                    :big="true"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Experience/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.experienceGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Experience/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.experienceWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Wins</h1>
                <h2>
                  <Number v-bind:number="props.hypixel.games.bedwars.wins" />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Losses</h1>
                <h2>
                  <Number v-bind:number="props.hypixel.games.bedwars.losses" />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Win Loss</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.winLossRatio"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Winstreak</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.winstreak"
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1 class="accordion-subtitle">Kills</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.finalKills"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.finalDeaths"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.finalKillDeath"
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.finalKillWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.finalKillGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills</h1>
                <h2>
                  <Number v-bind:number="props.hypixel.games.bedwars.kills" />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Deaths</h1>
                <h2>
                  <Number v-bind:number="props.hypixel.games.bedwars.deaths" />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.killDeathRatio"
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.killWinRatio"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.killGameRatio"
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion title="Solo Stats" v-if="props.hypixel">
        <h1 class="accordion-subtitle">Overview</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.bedsBroken
                    "
                    :big="true"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Lost</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.bedsLost
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken/Lost Ratio</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos
                        .bedsBrokenBedsLostRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Wins</h1>
                <h2>
                  <Number
                    v-bind:number="props.hypixel.games.bedwars.modes.solos.wins"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Losses</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.losses
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Win Loss</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.winLossRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Winstreak</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.winstreak
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1 class="accordion-subtitle">Kills</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.finalKills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.finalDeaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.finalKillDeath
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.finalKillWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.finalKillGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.kills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.deaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.killDeathRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.killWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.solos.killGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion title="Doubles Stats" v-if="props.hypixel">
        <h1 class="accordion-subtitle">Overview</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.bedsBroken
                    "
                    :big="true"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Lost</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.bedsLost
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken/Lost Ratio</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles
                        .bedsBrokenBedsLostRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Wins</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.wins
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Losses</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.losses
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Win Loss</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.winLossRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Winstreak</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.winstreak
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1 class="accordion-subtitle">Kills</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.finalKills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.finalDeaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.finalKillDeath
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles
                        .finalKillWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles
                        .finalKillGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.kills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.deaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.killDeathRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.killWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes.doubles.killGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion title="Threes Stats" v-if="props.hypixel">
        <h1 class="accordion-subtitle">Overview</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].bedsBroken
                    "
                    :big="true"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Lost</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].bedsLost
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken/Lost Ratio</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3']
                        .bedsBrokenBedsLostRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Wins</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].wins
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Losses</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].losses
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Win Loss</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].winLossRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Winstreak</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].winstreak
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1 class="accordion-subtitle">Kills</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].finalKills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].finalDeaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3']
                        .finalKillDeath
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3']
                        .finalKillWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3']
                        .finalKillGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].kills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].deaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3']
                        .killDeathRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].killWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['3v3v3v3'].killGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion title="Fours Stats" v-if="props.hypixel">
        <h1 class="accordion-subtitle">Overview</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].bedsBroken
                    "
                    :big="true"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Lost</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].bedsLost
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Beds Broken/Lost Ratio</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4']
                        .bedsBrokenBedsLostRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Wins</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].wins
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Losses</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].losses
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Win Loss</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].winLossRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Winstreak</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].winstreak
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <h1 class="accordion-subtitle">Kills</h1>
        <div class="divider center"></div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].finalKills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].finalDeaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4']
                        .finalKillDeath
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4']
                        .finalKillWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Final Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4']
                        .finalKillGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].kills
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Deaths</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].deaths
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kill/Death</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4']
                        .killDeathRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-horz two-fix">
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Won</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].killWinRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
          <div class="card mini transparent center">
            <div class="stat center-horz inline">
              <div class="content">
                <h1>Kills/Games Played</h1>
                <h2>
                  <Number
                    v-bind:number="
                      props.hypixel.games.bedwars.modes['4v4v4v4'].killGameRatio
                    "
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
    <div class="content-sub">
      <div class="card" v-if="props.hypixel">
        <div class="stat center">
          <div class="content">
            <h1>Level</h1>
            <h2>9,999</h2>
          </div>
        </div>
        <div class="stat center" v-if="props.hypixel.experience">
          <div class="content">
            <h1>Experience</h1>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.experience"
                :big="true"
              />
            </h2>
          </div>
        </div>
        <div class="stat center" v-if="props.hypixel.lastLogin">
          <div class="content">
            <h1>XP/Games Won</h1>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.experienceWinRatio"
              />
            </h2>
          </div>
        </div>
        <div class="stat center" v-if="props.hypixel.lastLogin">
          <div class="content">
            <h1>XP/Games Played</h1>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.experienceGameRatio"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card" v-if="props.hypixel">
        <div class="stat center">
          <div class="content">
            <h1>Resources Collected</h1>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.resources.iron"
              />
              Iron
            </h2>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.resources.gold"
              />
              Gold
            </h2>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.resources.diamonds"
              />
              Diamonds
            </h2>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.resources.emeralds"
              />
              Emeralds
            </h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Items Purchased</h1>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.itemsPurchased"
              />
            </h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Upgrades Purchased</h1>
            <h2>
              <Number
                v-bind:number="props.hypixel.games.bedwars.upgradesPurchased"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

const props = defineProps(["mojang", "hypixel", "renderSkin"]);
useSeoMeta({
  title: props.mojang
    ? props.mojang.username + " - Bedwars | bradn stats"
    : "bradn stats",
  ogTitle: props.mojang
    ? props.mojang.username + " - Bedwars | bradn stats"
    : "bradn stats",
  ogImage: `https://mc-heads.net/head/${
    props.mojang ? props.mojang.uuid : "MHF_Steve"
  }`,
  themeColor: "#FC5C7D",
  description: `View accurate and frequently updated Hypixel Bedwars and other modes stats.`,
  ogDescription: `View accurate and frequently updated Hypixel Bedwars and other modes stats.`
});

onMounted(() => {
  props.renderSkin();
});
</script>
