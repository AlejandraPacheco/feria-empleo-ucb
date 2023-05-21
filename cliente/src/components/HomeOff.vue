<template>
    <center>
    <div id="my-carousel" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(item, index) in items" :key="index" :data-bs-target="my-carousel" :data-bs-slide-to="index" :class="{ active: index === 0 }"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(item, index) in items" :key="index" :src="items.img" :class="{ 'carousel-item': true, active: index === 0 }">
          <img :src="item.image" class="d-block w-100" :alt="item.title" :style="{maxWidth: '1000px', maxHeight: '200px'}">
          <div class="carousel-caption d-none d-md-block">
           
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#my-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#my-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </center>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Item 1',
            description: 'This is item 1',
            image: require('@/assets/img1.png')
          },
          {
            title: 'Item 2',
            description: 'This is item 2',
            image: require('@/assets/img2.jpg')
          },
          {
            title: 'Item 3',
            description: 'This is item 3',
            image: require('@/assets/img3.jpg')
            
          }
        ]
      }
    }
  }
  </script>