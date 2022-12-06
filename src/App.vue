<template>
  <div>
    <TheHeader></TheHeader>
    <div class="container">
      <CharactersList></CharactersList>

    </div>
    <TheFooter></TheFooter>
  </div>
  
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CharactersList from './components/CharactersList.vue';
import { store } from "./store";


export default{
  components:{ TheHeader , TheFooter, CharactersList },
  data() {
    return {
      
      store
      
    }
  },
}


</script>

<style lang="scss">
@use "./styles/general.scss";

</style>
