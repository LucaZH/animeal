<template>
    <div class="baner-hero">
      <img src="../assets/img/o-monster-trio.png" alt="hero-img" class="hero-img">
      <div class="relative-1">
        <div class="banner">
          <img src="../assets/img/zoro-hero.png" alt="">
          <img src="../assets/img/luffy-hero.png" alt="">
          <img src="../assets/img/sanji-hero.png" alt="">
        </div>
        <p class="rectangle"></p>
        <div class="baner-content">
          <h3 class="header-3">THREE comrades with ambitions, ONE goal to reach their dreams.</h3>
          <p>The <strong class="golden">Golden Age</strong> of piracy has begun, a Journey to find the Legendary Treasure, <strong>ONE PIECE</strong>.</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .baner-hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .hero-img {
      width: 75%;
      height: 75%;
    }
  
    .relative-1 {
      position: absolute;
      top: 20%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .banner {
      position: relative;
      display: flex;
    }
  
    .rectangle {
      position: absolute;
      width: 76%;
      height: 40%;
      background-color: #774040;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  
    .baner-content {
      position: relative;
      width: 66%;
      background-color: #9C2627;
      color: #FFFFFF;
      padding: 5%;
      padding-top: 2%;
      padding-bottom: 2%;
      margin: 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    .golden{
        color:#FFA800;
    }
    .header-3 , .baner-content p{
        margin-block-start: 0;
        margin-block-end: 0;
    }
  </style>
  