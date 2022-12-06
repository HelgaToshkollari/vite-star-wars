<template>
  <div class="my-bg ">
    <TheHeader></TheHeader>
    <div class="container">
      <div class="p-4">
        <CharactersList></CharactersList>
      </div>
      <Transition name="fade">
        <Loading v-if="store.loading"></Loading>
      </Transition>

    </div>
    <TheFooter></TheFooter>
  </div>
  
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import CharactersList from './components/CharactersList.vue';
import { store } from "./store";
import Loading from './components/Loading.vue';


export default{
  components:{ TheHeader , TheFooter, CharactersList, Loading },
  data() {
    return {
      
      store
      
    }
  },
}


</script>

<style lang="scss">
@use "./styles/general.scss";
.my-bg{
  background-image: url('https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-14.jpg');
  object-fit: cover;
  background-position: center;
}

</style>
