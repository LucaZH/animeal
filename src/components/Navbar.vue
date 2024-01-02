<template>
  <nav class="navbar">
    <img src="../assets/img/logo.png" alt="" class="logo" />
    <div class="nav-center">
      <a href="#" class="nav-item">News</a>
      <a href="#" class="nav-item">About</a>
      <a href="#" class="nav-item">Community</a>
    </div>
    <div class="nav-options">
      <a href="#" class="icon"
        ><img src="../assets/img/search.png" alt="search"
      /></a>
      <a href="#" class="icon"
        ><img src="../assets/img/user.png" alt="user"
      /></a>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
  align-items: center;
}

.navbar .nav-center {
  display: flex;
  width: max-content;
  gap: 8em;
  flex-wrap: wrap;
}

.navbar .nav-item {
  text-decoration: none;
  color: #121212;
  font-family: "Jura", sans-serif;
  font-size: 1em;
}
.navbar .nav-options {
  display: flex;
  gap: 20px;
}
</style>