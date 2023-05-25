<template>
    <div>
      <b-card-group deck>
        <b-card v-for="(item, index) in items" :key="index">
          <b-card-text>{{ item.title }}</b-card-text>
          <b-card-text>{{ item.description }}</b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: [],
      };
    },
    created() {
      axios.get('/api/data').then((response) => {
        this.items = response.data;
      });
    },
  };
  </script>