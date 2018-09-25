<template>
<div class="my-nav">

  <nav class="navbar is-black">
    <p class="title">Congress & Senate Home Page</p>
    <div class="navbar-end">
    <router-link class="navbar-item"  to="/senator">
        <button class="button is-dark" type="button" name="button">Senate</button>
    </router-link>
    <router-link class="navbar-item" to="/congress">
          <button class="button is-dark" type="button" name="button">Loyelty</button>
    </router-link>
    </div>
  </nav>

</div>
</template>

<script>
export default {
  name : 'navi',
}
</script>

<style lang="css">

  .title{
    font-size: 30px;
    color: white;
    margin-top: 15px;
  }
  .my-nav{
    position: sticky;
  }




</style>
