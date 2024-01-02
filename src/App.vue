<template>
  <navbar />
  <hero />
  <Character :characters="characters" class="v-scroll-reveal" />
</template>

<script setup lang="ts">
import navbar from "./components/Navbar.vue";
import hero from "./components/Hero.vue";
import Character from "./components/Character.vue";
import CharacterType from "./types/Character";

const characters: CharacterType[] = [
  {
    title: "Emperor of the sea “strawhat”",
    name: "Monkey D. Luffy",
    power: [
      {
        name: "Busoshoku Haki",
        description:
          "A form of haki that allows the user to use their own spiritual energy to create, in essence, an invisible piece of armor around themself, providing incredible offensive and defensive capabilities.",
      },
      {
        name: "Advanced Busoshoku Haki",
        description:
          "An advanced version of busoshoku that is able to bypass any external armor, it delivers devastating damage as it is capable of destroying an enemy from the inside.",
      },
    ],
    image: "luffy.png",
    color: "#774040",
    reversed: false,
    imgpower: [
      { img: "power1.png" },
      { img: "haki-de-lobservation-480x247.png" },
      { img: "maxresdefault.png" },
      { img: "gomu_gomu_no_mi_fruit_by_kaiboiii_d8yuaql-pre.png" },
    ],
    citation: {
      pre_title: "Hear the Drums of Liberation!",
      content: "“ This is my Peak ”!",
      description:
        "Luffy goes into an awakening & returns as the Sun God Nika “Joy Boy”.  Kaido is exhilarated like never before as he faces a foe capable of even the wildest of imaginations.",
    },
    illustrations: [
      { img: "GEAR5.png", class: "text-bg" },
      { img: "luffy_gear5.png", class: "character-illustration" },
      { img: "kaido.png", class: "opponement" },
    ],
    customclass: "",
  },
  {
    title: "“Pirate Hunter”",
    name: "Roronoa Zoro",
    power: [
      {
        name: "Busoshoku Haki",
        description:
          "The results of Zoro’s training with Mihawk gained him the ability to utilize busoshoku post-timeskip. Since then, he is now one of the many people who have mastered color of arms.",
      },
      {
        name: "Advanced Busoshoku Haki",
        description:
          "An advanced version of busoshoku that is able to bypass any external armor, it delivers devastating damage as it is capable of destroying an enemy from the inside.",
      },
    ],
    image: "zoro.png",
    color: "#789378",
    reversed: true,
    imgpower: [
      { img: "powerzoro1.png" },
      { img: "powerzoro2.png" },
      { img: "powerzoro3.png" },
      { img: "powerzoro4.png" },
    ],
    citation: {
      pre_title: "“I’ll become”!",
      content: "“ The King of Hell” !!",
      description:
        "A finishing move to finally take down King the wildfire, his newly established ability namely, King of hell three-sword serpent 103 mercies Dragon Damnation. A sword-skill imbued with advanced haoshoku which can deliver an attack potency capable of taking down the calibre of that of a Yonko first commander with a single strike.",
    },
    illustrations: [
      { img: "opponement-zoro.png", class: "opponement-zoro" },
      { img: "illustration-zoro.png", class: "character-illustration-zoro" },
      { img: "fume.png", class: "bg-fume" },
    ],
    customclass: "zoro",
  },
  {
    title: "“Black Leg”",
    name: "Vinsmoke Sanji",
    power: [
      {
        name: "Busoshoku Haki",
        description:
          "The results of Zoro’s training with Mihawk gained him the ability to utilize busoshoku post-timeskip. Since then, he is now one of the many people who have mastered color of arms.",
      },
      {
        name: "Advanced Busoshoku Haki",
        description:
          "An advanced version of busoshoku that is able to bypass any external armor, it delivers devastating damage as it is capable of destroying an enemy from the inside.",
      },
    ],
    image: "sanji.png",
    color: "#C7BE73",
    reversed: false,
    imgpower: [
      { img: "powersanji1.png" },
      { img: "powersanji2.png" },
      { img: "powersanji3.png" },
      { img: "powersanji4.png" },
    ],
    citation: {
      pre_title: "“Germa’s finest soldier of science”",
      content: "“ Burn up, Ifrit Jambe” !!",
      description:
        "Unwavering will & determination to break free from the chains that bind him from his past, he presses onward finally accepting who he is. Queen the plague, a past rival of his father’s scientific days of glory has seen his fair share of unparalleled genius. Sanji, the supposed “failure” has proven himself to be the finest of his creations.",
    },
    illustrations: [
      { img: "illustration-sanji.png", class: "illustration-sanji" },
      { img: "fume-2.png", class: "fume" },
      { img: "up-background.png", class: "up-background" },
    ],
    customclass: "sanji",
  },
];
</script>

<style scoped>
</style>
