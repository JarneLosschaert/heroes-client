<template>
    <article class="hero-detail">
      <div class="hero-detail__image-container">
        <img :src="hero.image" :alt="hero.name"/>
      </div>
      <div class="hero-detail__content">
        <h1>Hero</h1>
        <h3 class="hero-detail__name">{{hero.name}}</h3>
        <p>{{ hero.birthday }}</p>
      </div>
    </article>
  </template>
  
  <script>
  export default {
      name: 'Hero',
      props: {
          hero: {
              type: Object,
              required: true
          }
      }
    }
  </script>
  
  <style>
    .hero-detail {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100vh;
      padding: 20px;
    }
    .hero-detail__image-container {
      flex: 0 0 auto;
      margin-right: 20px;
      height: 100%;
    }
    .hero-detail__image-container img {
      height: 100%;
      width: auto;
    }
    .hero-detail__content {
      flex: 1 1 auto;
    }
    .hero-detail__name {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  </style>
  