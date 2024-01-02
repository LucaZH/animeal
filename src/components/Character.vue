<template>
  <div class="character-section">
    <div v-for="char in characters" :key="char.name" class="mb-5">
      <div class="character">
        <img
          :src="'/src/assets/img/' + char.image"
          alt="Character Image"
          class="character-img"
        />
        <div class="info-character" :class="{ reversed: char.reversed }">
          <p class="character-title">{{ char.title }}</p>
          <h1 :style="{ color: char.color }" class="character-name">
            {{ char.name }}
          </h1>
          <div class="listsimple">
            <p>Powers:</p>
            <div v-for="img in char.imgpower" :key="img.img">
              <img :src="'/src/assets/img/' + img.img" alt="" />
            </div>
          </div>

          <div v-for="power in char.power" :key="power.name">
            <strong>{{ power.name }}:</strong>
            <p>{{ power.description }}</p>
          </div>
        </div>
      </div>
      <div class="citation-section">
        <div class="citation-content" :class="char.customclass">
          <p :style="{ color: char.color }">{{ char.citation.pre_title }}</p>
          <h3 :style="{ color: char.color }">{{ char.citation.content }}</h3>
          <span>{{ char.citation.description }}</span>
        </div>
        <div class="illustration-content">
          <img
            v-for="illustration in char.illustrations"
            :key="illustration.img"
            :src="'/src/assets/img/' + illustration.img"
            :alt="illustration.img"
            :class="illustration.class"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { defineProps } from "vue";
import { Character } from "@/types/Character";

const props = defineProps(["characters"]);
</script>
  
  <style scoped>
.character-section {
  /* margin-left: 10%;
    margin-right: 10%; */
  margin-top: 10%;
}
.mb-5 {
  margin-bottom: 5%;
}

.info-character {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 39%; */
}

.zoro {
  margin-top: 20%;
}
.character-title {
  font-size: 1.6em;
  font-family: "Jura", sans-serif;
  margin-block-start: 0;
  margin-block-end: 0;
}
.character {
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
  /* flex-wrap: wrap; */
}

.character-name {
  font-size: 3em;
  font-family: "Jura", sans-serif;
  margin-block-start: 0;
  margin-block-end: 0;
}

.character.reversed {
  flex-direction: row-reverse;
}

.character-img {
  position: relative;
  left: -10%;
}

.reversed .character-img {
  position: relative;
  left: 10%;
}
.listsimple {
  display: flex;
  gap: 2%;
  margin-top: 4%;
  margin-bottom: 4%;
}
.citation-section {
  margin-top: 10%;
}
.citation-content {
  max-width: 35%;
  margin-left: 10%;
  margin-right: 10%;
  position: relative;
  z-index: 2;
}
.citation-content h3 {
  font-family: "Trade Winds", sans-serif;
  font-size: 2em;
  margin-block-start: 0;
  margin-block-end: 0;
}
.citation-content p {
  margin-block-start: 0;
  margin-block-end: 0;
}
.illustration-content {
  position: relative;
  margin: 0;
  margin-top: -10%;
  z-index: 1;
  width: 98%;
}
.text-bg {
  position: absolute;
  margin-top: 20%;
  width: 70%;
  margin-left: 15%;
  animation: moveUpDown 2s ease-in-out infinite alternate;
}
.character-illustration {
  position: absolute;
  margin-left: 20%;
  margin-top: 5.8%;
  /* animation: fallUpDown 2s ease-in-out infinite; */
}
.opponement {
  margin-top: 0%;
  width: 102%;
  padding: 0;
}
.bg-fume {
  margin-top: 10%;
  padding: 0;
  width: 102%;
  animation: smokeAnimation 3s infinite ease-in-out;
}
.opponement-zoro {
  position: absolute;
  margin-top: -20%;
  margin-left: 37%;
  width: 65%;
}
.character-illustration-zoro {
  position: absolute;
  margin-top: 25%;
}
.sanji {
  margin-left: 60%;
  display: flex;
  flex-direction: column;
}
.illustration-sanji {
  position: absolute;
  margin-top: -10%;
  z-index: 2;
  width: 102%;
}
.fume {
  position: absolute;
  z-index: 1;
  width: 102%;
  animation: smokeAnimation 3s infinite ease-in-out;
}
.up-background {
  position: absolute;
  margin-top: 44%;
  z-index: 3;
  width: 102%;
}
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(30px);
  }
}
@keyframes fallUpDown {
  0% {
    transform: translateY(-90%);
  }
  100% {
  }
}

@keyframes smokeAnimation {
  0% {
    opacity: 0.3;
    transform: translateY(0);
    filter: blur(2px);
  }
  50% {
    opacity: 0.6;
    transform: translateY(-20px);
    filter: blur(6px);
  }
  100% {
    opacity: 0.3;
    transform: translateY(0);
    filter: blur(2px);
  }
}
</style>
  