<template>
  <Accordion id="mm-modes-classic" title="Classic" v-if="props.stats">
    <h1 class="accordion-subtitle">Win Info</h1>
    <div class="divider center"></div>
    <div class="card-horz two-fix">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Wins</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.classic.wins"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Win/Loss Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.classic.winLossRatio
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
            <h1>Detective Wins</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.classic.detectiveWins
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Murderer Wins</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.classic.murdererWins
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Hero Wins</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.classic.heroWins"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <h1 class="accordion-subtitle">Kill Info</h1>
    <div class="divider center"></div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kills</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.classic.kills"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kill/Death Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.classic.killDeathRatio
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
                :number="props.stats.games.murderMystery.modes.classic.deaths"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Suicides</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.classic.suicides"
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
            <h1>Knife Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.classic.knifeKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Thrown Knife Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.classic.thrownKnifeKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Bow Kills</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.classic.bowKills"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Trap Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.classic.trapKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </Accordion>
  <Accordion id="mm-modes-double-up" title="Double Up!" v-if="props.stats">
    <h1 class="accordion-subtitle">Win Info</h1>
    <div class="divider center"></div>
    <div class="card-horz two-fix">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Wins</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.doubleUp.wins"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Win/Loss Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.winLossRatio
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
            <h1>Detective Wins</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.detectiveWins
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Murderer Wins</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.murdererWins
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Hero Wins</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.heroWins
                "
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <h1 class="accordion-subtitle">Kill Info</h1>
    <div class="divider center"></div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kills</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.doubleUp.kills"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kill/Death Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.killDeathRatio
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
                :number="props.stats.games.murderMystery.modes.doubleUp.deaths"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Suicides</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.suicides
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
            <h1>Knife Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.knifeKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Thrown Knife Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp
                    .thrownKnifeKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Bow Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.bowKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Trap Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.trapKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </Accordion>
  <Accordion id="mm-modes-infection" title="Infection" v-if="props.stats">
    <h1 class="accordion-subtitle">Win Info</h1>
    <div class="divider center"></div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Wins</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.infection.wins"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Win/Loss Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.infection.winLossRatio
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Survivor Wins</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.infection.survivorWins
                "
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <h1 class="accordion-subtitle">Kill Info</h1>
    <div class="divider center"></div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kills</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.infection.kills"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kill/Death Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.infection.killDeathRatio
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
                :number="props.stats.games.murderMystery.modes.infection.deaths"
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
            <h1>Kills As Infected</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.infection
                    .killsAsInfected
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kills As Survivor</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.doubleUp.killsAsSurvivor
                "
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </Accordion>
  <Accordion id="mm-modes-assassins" title="Assassins" v-if="props.stats">
    <h1 class="accordion-subtitle">Win Info</h1>
    <div class="divider center"></div>
    <div class="card-horz two-fix">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Wins</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.assassins.wins"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Win/Loss Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.assassins.winLossRatio
                "
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <h1 class="accordion-subtitle">Kill Info</h1>
    <div class="divider center"></div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kills</h1>
            <h2>
              <Number
                :number="props.stats.games.murderMystery.modes.assassins.kills"
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kill/Death Ratio</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.assassins.killDeathRatio
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
                :number="props.stats.games.murderMystery.modes.assassins.deaths"
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
            <h1>Knife Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.assassins
                    .knifeKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Thrown Knife Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.assassins.thrownKnifeKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Bow Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.assassins.bowKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Trap Kills</h1>
            <h2>
              <Number
                :number="
                  props.stats.games.murderMystery.modes.assassins.trapKills
                "
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </Accordion>
</template>

<script setup>
const props = defineProps(["stats"]);
</script>
