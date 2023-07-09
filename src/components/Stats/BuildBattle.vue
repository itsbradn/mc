<template>
  <h1 class="accordion-subtitle">Overview</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="bb.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Score</h1>
          <h2><Number :number="bb.score" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Games Played</h1>
          <h2><Number :number="bb.gamesPlayed" /></h2>
        </div>
      </div>
    </div>
  </div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat mini center-horz inline">
        <div class="content">
          <h1>Coins</h1>
          <h2><Number :number="bb.coins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Win %</h1>
          <h2><Number :number="(bb.winsGamesPlayed ?? 0) * 100" />%</h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat mini center-horz inline">
        <div class="content">
          <h1>Times Voted</h1>
          <h2><Number :number="bb.timesVoted" /></h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">Normal</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Solo Wins</h1>
          <h2><Number :number="bb.modes.soloNormal.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Teams Wins</h1>
          <h2><Number :number="bb.modes.teamsNormal.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Teams Highest Points</h1>
          <h2><Number :number="bb.modes.teamsNormal.highestPoints" /></h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">Pro</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="bb.modes.soloPro.wins" /></h2>
        </div>
      </div>
    </div>
  </div>
  <h1 class="accordion-subtitle">Guess The Build</h1>
  <div class="divider center"></div>
  <div class="card-horz">
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Wins</h1>
          <h2><Number :number="bb.modes.guessTheBuild.wins" /></h2>
        </div>
      </div>
    </div>
    <div class="card mini transparent center">
      <div class="stat center-horz inline">
        <div class="content">
          <h1>Correct Guesses</h1>
          <h2><Number :number="bb.modes.guessTheBuild.correctGuesses" /></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["stats"]);
const bb = props.stats?.games.buildBattle;
</script>
