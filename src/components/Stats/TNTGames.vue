<template>
  <h1 class="accordion-subtitle">Overview</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          
          <h1>Wins</h1>
          <h2>{{ tnt.wins}}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          
          <h1>Playtime</h1>
          <h2>{{ tnt.playtime }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          
          <h1>Winstreak</h1>
          <h2>{{ tnt.winstreak }}</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat mini center-horz  inline">
        <div class="content">
          
          <h1>Coins</h1>
          <h2>{{ tnt.coins }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat mini center-horz  inline">
        <div class="content">
          
          <h1>Equipped Hat</h1>
          <h2>{{ tnt.hat }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat mini center-horz  inline">
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
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.tntRun.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.tntRun.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Win/Loss</h1>
          <h2><Number :number="tnt.modes.tntRun.winLossRatio" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat mini center-horz  inline">
        <div class="content">
          <h1>Blocks Ran</h1>
          <h2><Number :number="tnt.modes.tntRun.blocksRan" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Record</h1>
          <h2>{{ tnt.modes.tntRun.record }}</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat mini center-horz  inline">
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
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.tntTag.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Kills</h1>
          <h2><Number :number="tnt.modes.tntTag.kills" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.tntTag.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Tags</h1>
          <h2><Number :number="tnt.modes.tntTag.tags" :big="true" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Tag/Kill Ratio</h1>
          <h2><Number :number="tnt.modes.tntTag.tagKillRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Kill/Win Ratio</h1>
          <h2><Number :number="tnt.modes.tntTag.killWinRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
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
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.bowSpleef.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.bowSpleef.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Shots Landed</h1>
          <h2><Number :number="tnt.modes.bowSpleef.shotsLanded" :big="true" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Win/Loss</h1>
          <h2><Number :number="tnt.modes.bowSpleef.winLossRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
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
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.pvpRun.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Kills</h1>
          <h2><Number :number="tnt.modes.pvpRun.kills" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.pvpRun.deaths" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Win/Loss Ratio</h1>
          <h2><Number :number="tnt.modes.pvpRun.winLossRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Kill/Death ratio</h1>
          <h2><Number :number="tnt.modes.pvpRun.killDeathRatio" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
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
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="tnt.modes.wizards.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Kills</h1>
          <h2><Number :number="tnt.modes.wizards.kills" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Deaths</h1>
          <h2><Number :number="tnt.modes.wizards.deaths" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz  inline">
        <div class="content">
          <h1>Assists</h1>
          <h2><Number :number="tnt.modes.wizards.assists" :big="true" /></h2>
        </div>
      </div>
    </div>
  </div>
  <table class="stat-table">
    <tr class="row head">
      <th class="col">Class</th>
      <th class="col">Kills</th>
      <th class="col">Deaths</th>
      <th class="col">Assists</th>
      <th class="col">K/D</th>
      <th class="col">Healed</th>
      <th class="col">Damage Taken</th>
      <th class="col">Power</th>
      <th class="col">Mana</th>
      <th class="col">Prestiged</th>
    </tr>
    <tr class="row" v-for="wizard in tnt.modes.wizards.classes" :key="wizard.class">
      <td class="col">{{ wizard.class }}</td>
      <td class="col"><Number :number="wizard.kills" /></td>
      <td class="col"><Number :number="wizard.deaths" /></td>
      <td class="col"><Number :number="wizard.assists" /></td>
      <td class="col"><Number :number="wizard.killDeathRatio" /></td>
      <td class="col"><Number :number="wizard.healed" /></td>
      <td class="col"><Number :number="wizard.damageRecieved" /></td>
      <td class="col"><Number :number="wizard.power" />/6</td>
      <td class="col"><Number :number="wizard.mana" />/6</td>
      <td class="col">{{ wizard.prestige }}</td>
    </tr>
  </table>
</template>

<script setup>
const props = defineProps(['stats']);
const tnt = props.stats?.games.tntGames;
</script>