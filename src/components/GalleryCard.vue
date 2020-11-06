<template>
<div>
    <div class="card" style="width: 300px; height: 300px; margin-top: 30px ">
  <img class="card-img-top" src="..." alt="Card image cap">
  <h4 class="title">{{gallery.name}} </h4>
    <ol class="list-group list-group-flushh">
      <li class="list-group-item">{{gallery.user.first_name}}</li>
      <li class="list-group-item">{{gallery.user.last_name}}</li>
    </ol>  
</div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>