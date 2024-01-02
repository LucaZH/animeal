<template>
    <div class="character-section">
      <div v-for="char in characters" :key="char.name" class="character" :class="{ 'reversed': char.reversed }">
        <img :src="'/src/assets/img/' + char.image" alt="Character Image" class="character-img" />
        <div class="info-character">
            <p class="character-title">{{ char.title }}</p>
            <h1 :style="{ color: char.color }" class="character-name">{{ char.name }}</h1>
            <div class="listsimple">
                <p>Powers:</p>
                <div v-for="img in char.imgpower" :key="img.img">
                    <img :src="'/src/assets/img/' + img.img" alt="">
                </div>
            </div>
            
            <div v-for="power in char.power" :key="power.name">
              <strong>{{ power.name }}:</strong> 
              <p>{{ power.description }}</p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { Character } from '@/types/Character';
  
  const props = defineProps(['characters']);
  </script>
  
  <style scoped>
  .character-section {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 10%;
  }
  .character-title{
    font-size: 1.6em;
    font-family: 'Jura', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .character {
    display: flex;
    justify-content: space-between;
  }
  
  .character-name {
    font-size: 3em;
    font-family: 'Jura', sans-serif;
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
  .listsimple{
    display: flex;
    gap: 2%;
    margin-top: 4%;
    margin-bottom: 4%;
  }
  </style>
  