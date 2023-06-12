<template>
  <section>
    <div class="section-content">
      <div class="player-pages">
        <button class="page-btn active">Overview</button>
        <button class="page-btn">Bedwars</button>
        <button class="page-btn">Skyblock</button>
        <button class="page-btn">Skywars</button>
        <button class="page-btn">Duels</button>
      </div>
      <div class="player-content">
        <div class="content-main">
          <div class="player-header">
            <div class="details">
              <h1>username</h1>
              <h2>500 views / month</h2>
              <div class="divider"></div>
              <div class="overview-stats">
                <div class="stat">
                  <h1>Friends</h1>
                  <h2>345</h2>
                </div>
                <div class="stat">
                  <h1>Level</h1>
                  <h2>5,432</h2>
                </div>
                <div class="stat">
                  <h1>Karma</h1>
                  <h2>11,580,615</h2>
                </div>
              </div>
            </div>
            <div class="skin">
          <canvas id="skin_container"></canvas></div>
          </div>
          <div class="card"></div>
        </div>
        <div class="content-sub">
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { SkinViewer, PlayerAnimation } from "skinview3d";

onMounted(() => {
  class StillAnim extends PlayerAnimation {
    constructor() {
      super(...arguments);
    }

    animate(player) {
      // Multiply by animation's natural speed
      const t = this.progress * 1;
      // Leg swing
      // player.skin.leftLeg.rotation.x = Math.sin(t) * 0.5;
      // player.skin.rightLeg.rotation.x = Math.sin(t + Math.PI) * 0.5;
      // Arm swing
      // player.skin.leftArm.rotation.x = Math.sin(t + Math.PI) * 0.5;
      // player.skin.rightArm.rotation.x = Math.sin(t) * 0.5;
      const basicArmRotationZ = Math.PI * 0.005;
      player.skin.leftArm.rotation.z = Math.cos(t) * 0.03 + basicArmRotationZ;
      player.skin.rightArm.rotation.z =
        Math.cos(t + Math.PI) * 0.03 - basicArmRotationZ;
      // if (this.headBobbing) {
      //     // Head shaking with different frequency & amplitude
      //     player.skin.head.rotation.y = Math.sin(t / 4) * 0.2;
      //     player.skin.head.rotation.x = Math.sin(t / 5) * 0.1;
      // }
      // else {
      //     player.skin.head.rotation.y = 0;
      //     player.skin.head.rotation.x = 0;
      // }
      player.skin.head.rotation.y = 0.4;
      // player.skin.head.rotation.x = 0.1;
      // Always add an angle for cape around the x axis
      const basicCapeRotationX = Math.PI * 0.06;
      player.cape.rotation.x = Math.sin(t / 1.5) * 0.06 + basicCapeRotationX;
      player.rotation.y = -0.7;
    }
  }

  let skinViewer = new SkinViewer({
    canvas: document.getElementById("skin_container"),
    width: 225,
    height: 325,
    skin: "/img/demo-skin.png",
    cape: "/img/demo-cape.webp",
  });

  // skinViewer.loadCape("/img/demo-cape.webp", { backEquipment: "elytra" });
  skinViewer.animation = new StillAnim();

  Vibrant.from('/img/demo-skin.png').getPalette().then(function (palette) {
    let vib = palette['Vibrant'].getRgb();
    console.log(vib);
    document.documentElement.style.setProperty(
      "--skin-highlight",
      vib.join(", ")
    );
  });
});
</script>
