<template lang="">
    <div class="card border-0">
        <div class=" my-clr text-warning text-center p-2">
          <h2>{{character.name}}</h2>
        </div>
        <div class="card-body my-clr ">
          <h5 class="card-title text-white">Characteristics</h5>
            <div class="d-flex text-white justify-content-around ">
                <ul>
                  <li>Height : {{character.height}}</li>
                  <li>Weight : {{character.mass}}</li>
                  <li>Birth Year : {{character.birth_year}}</li>
                </ul>
                <ul>
                  <li>Hair : {{character.hair_color}}</li>
                  <li>Skin : {{character.skin_color}}</li>
                  <li>Eyes : {{character.eye_color}}</li>
                </ul>
            </div>

          
          
        </div>
    </div>
</template>
<script>
export default {
    props:{
        character:{
        type: Object,
        }
    }

    
    
}
</script>
<style lang="scss">
@use "../styles/partials/variables"  as *;
.my-clr{
    background-color: rgb(4, 1, 41);

}

    
</style>