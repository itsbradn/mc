<template>
  <h1 class="accordion-subtitle">Overview</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2>{{ tnt.wins }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Playtime</h1>
          <h2>{{ tnt.playtime }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Winstreak</h1>
          <h2>{{ tnt.winstreak }}</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat mini center-horz inline">
        <div class="content">
          <h1>Coins</h1>
          <h2>{{ tnt.coins }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat mini center-horz inline">
        <div class="content">
          <h1>Equipped Hat</h1>
          <h2>{{ tnt.hat }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat mini center-horz inline">
        <div class="content">
          <h1>Equipped Particles</h1>
          <h2>{{ tnt.particleEffect }}</h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">TNT Run</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.tntRun.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.tntRun.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Win/Loss</h1>
          <h2><Number :number="tnt.modes.tntRun.winLossRatio" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat mini center-horz inline">
        <div class="content">
          <h1>Blocks Ran</h1>
          <h2><Number :number="tnt.modes.tntRun.blocksRan" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Record</h1>
          <h2>{{ tnt.modes.tntRun.record }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat mini center-horz inline">
        <div class="content">
          <h1>Players hit by potions</h1>
          <h2><Number :number="tnt.modes.tntRun.potionsLanded" /></h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">TNT Tag</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.tntTag.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Kills</h1>
          <h2><Number :number="tnt.modes.tntTag.kills" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.tntTag.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Tags</h1>
          <h2><Number :number="tnt.modes.tntTag.tags" :big="true" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Tag/Kill Ratio</h1>
          <h2><Number :number="tnt.modes.tntTag.tagKillRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Kill/Win Ratio</h1>
          <h2><Number :number="tnt.modes.tntTag.killWinRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Win/Loss Ratio</h1>
          <h2><Number :number="tnt.modes.tntTag.winLossRatio" /></h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">Bow Spleef</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.bowSpleef.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.bowSpleef.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Shots Landed</h1>
          <h2>
            <Number :number="tnt.modes.bowSpleef.shotsLanded" :big="true" />
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Win/Loss</h1>
          <h2><Number :number="tnt.modes.bowSpleef.winLossRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Shots hit per game</h1>
          <h2><Number :number="tnt.modes.bowSpleef.shotsGameRatio" /></h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">PVP Run</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.pvpRun.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Kills</h1>
          <h2><Number :number="tnt.modes.pvpRun.kills" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.pvpRun.deaths" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Win/Loss Ratio</h1>
          <h2><Number :number="tnt.modes.pvpRun.winLossRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Kill/Death ratio</h1>
          <h2><Number :number="tnt.modes.pvpRun.killDeathRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Kills/Game ratio</h1>
          <h2><Number :number="tnt.modes.pvpRun.killGameRatio" /></h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">Wizards</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.wizards.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Kills</h1>
          <h2><Number :number="tnt.modes.wizards.kills" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.wizards.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center" style="margin-bottom: 32px">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Assists</h1>
          <h2><Number :number="tnt.modes.wizards.assists" :big="true" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div
    class="wizards-class-display"
    v-for="wizard in tnt.modes.wizards.classes"
    :key="wizard.class"
  >
    <div class="display__header">
      <div class="header__title">{{ wizard.class }}</div>
      <div class="prestiged" v-if="wizard.prestige === 'True'">prestiged</div>
    </div>
    <div class="display__stats">
      <div class="display-stat">
        <div class="stat__title">Kills</div>
        <div class="stat__value"><Number :number="wizard.kills" /></div>
      </div>
      <div class="display-stat">
        <div class="stat__title">Deaths</div>
        <div class="stat__value"><Number :number="wizard.deaths" /></div>
      </div>
      <div class="display-stat">
        <div class="stat__title">Assists</div>
        <div class="stat__value"><Number :number="wizard.assists" /></div>
      </div>
      <div class="display-stat">
        <div class="stat__title">K/D</div>
        <div class="stat__value">
          <Number :number="wizard.killDeathRatio" />
        </div>
      </div>
      <div class="display-stat">
        <div class="stat__title">Healed</div>
        <div class="stat__value">
          <Number :number="wizard.healed" :big="true" />
        </div>
      </div>
      <div class="display-stat">
        <div class="stat__title">Damage Taken</div>
        <div class="stat__value">
          <Number :number="wizard.damageRecieved" :big="true" />
        </div>
      </div>
    </div>
    <div class="display__bars">
      <div class="bar">
        <div class="bar__title">Mana {{ wizard.mana }}/6</div>
        <div class="bar-wrapper">
          <div
            class="bar mana"
            :style="`width: ${(wizard.mana / 6) * 100}%`"
          ></div>
        </div>
      </div>
      <div class="bar">
        <div class="bar__title">Power {{ wizard.power }}/6</div>
        <div class="bar-wrapper">
          <div
            class="bar power"
            :style="`width: ${(wizard.power / 6) * 100}%`"
          ></div>
        </div>
      </div>
    </div>
    <div class="divider center" v-if="wizard.class !== 'Wither'"></div>
  </div>
</template>

<script setup>
const props = defineProps(["stats"]);
const tnt = props.stats?.games.tntGames;
</script>
