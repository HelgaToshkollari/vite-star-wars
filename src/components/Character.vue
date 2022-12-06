<template lang="">
    <div class="card">
        <div class="card-header">
          {{character.name}}
        </div>
        <div class="card-body">
          <h5 class="card-title">Characteristics</h5>
            <div class="d-flex justify-content-around">
                <ul>
                  <li>Height : {{character.height}}</li>
                  <li>{{character.mass}}</li>
                  <li>{{character.birth_year}}</li>
                </ul>
                <ul>
                  <li>{{character.hair_color}}</li>
                  <li>{{character.skin_color}}</li>
                  <li>{{character.eye_color}}</li>
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
    
</style>