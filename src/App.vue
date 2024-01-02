<template>
  <navbar/>
  <hero/>
  <Character :characters="characters"/>
</template>

<script setup lang="ts">
import navbar from './components/Navbar.vue';
import hero from './components/Hero.vue';
import Character from './components/Character.vue';
import CharacterType from './types/Character';

const characters: CharacterType[] = [
  {
    title: 'Emperor of the sea “strawhat”',
    name: 'Monkey D. Luffy',
    power: [
      { name: 'Busoshoku Haki', description: 'A form of haki that allows the user to use their own spiritual energy to create, in essence, an invisible piece of armor around themself, providing incredible offensive and defensive capabilities.' },
      { name: 'Advanced Busoshoku Haki', description: 'An advanced version of busoshoku that is able to bypass any external armor, it delivers devastating damage as it is capable of destroying an enemy from the inside.' }
    ],
    image: 'luffy.png',
    color: '#774040',
    reversed: false,
    imgpower: [
      {img: 'power1.png'},
      {img: 'haki-de-lobservation-480x247.png'},
      {img: 'maxresdefault.png'},
      {img: 'gomu_gomu_no_mi_fruit_by_kaiboiii_d8yuaql-pre.png'},
    ],
  },
  {
    title: '“Pirate Hunter”',
    name: 'Roronoa Zoro',
    power: [
      { name: 'Busoshoku Haki', description: 'The results of Zoro’s training with Mihawk gained him the ability to utilize busoshoku post-timeskip. Since then, he is now one of the many people who have mastered color of arms.' },
      { name: 'Advanced Busoshoku Haki', description: 'An advanced version of busoshoku that is able to bypass any external armor, it delivers devastating damage as it is capable of destroying an enemy from the inside.' }
    ],
    image: 'zoro.png',
    color: '#789378',
    reversed: true,
    imgpower: [
      {img: 'powerzoro1.png'},
      {img: 'powerzoro2.png'},
      {img: 'powerzoro3.png'},
      {img: 'powerzoro4.png'},
    ],
  },
  {
    title: '“Black Leg”',
    name: 'Vinsmoke Sanji',
    power: [
      { name: 'Busoshoku Haki', description: 'The results of Zoro’s training with Mihawk gained him the ability to utilize busoshoku post-timeskip. Since then, he is now one of the many people who have mastered color of arms.' },
      { name: 'Advanced Busoshoku Haki', description: 'An advanced version of busoshoku that is able to bypass any external armor, it delivers devastating damage as it is capable of destroying an enemy from the inside.' }
    ],
    image: 'sanji.png',
    color: '#C7BE73',
    reversed: false,
    imgpower: [
      {img: 'powersanji1.png'},
      {img: 'powersanji2.png'},
      {img: 'powersanji3.png'},
      {img: 'powersanji4.png'},
    ],
  },
];
</script>

<style scoped>
</style>
