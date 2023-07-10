<template>
  <canvas :id="canvasId" ref="skinDisplay"> </canvas>
</template>

<script setup>
import { SkinViewer, PlayerAnimation } from "skinview3d";

const props = defineProps({
  skinUrl: String,
  capeUrl: String,
  canvasId: String,
  vibColorId: String,
});
const skinDisplay = ref(null);

class StillAnim extends PlayerAnimation {
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

onMounted(() => {
  let skinViewer = new SkinViewer({
    canvas: skinDisplay.value,
    width: 225,
    height: 325,
    skin: props.skinUrl ? props.skinUrl : "",
    cape: props.capeUrl ? props.capeUrl : "",
  });
  skinViewer.controls.enableZoom = false;
  skinViewer.animation = new StillAnim();

  if (props.skinUrl) {
    const v = new Vibrant(props.skinUrl, {
      quality: 1,
    });

    const palette = v.getPalette().then((p) => {
      let vibPal = p["Vibrant"];
      if (!vibPal) {
        document.documentElement.style.setProperty(
          "--skin-highlight",
          "160, 76, 192"
        );
        console.log("No vib pal?");
        return;
      }
      let vib = p["Vibrant"].getRgb();
      if (props.vibColorId !== undefined) {
      document.querySelector(`#${props.vibColorId}`).style.setProperty(
        "--skin-highlight",
        vib.join(", ")
      );
      } else {
        document.documentElement.style.setProperty(
          "--skin-highlight",
          vib.join(", ")
        );
      }
    });
  }
});
</script>
