<template>
  <div id="base-app">
    <div id="main-nav">
      <router-link to="/home">介绍</router-link>
      <router-link to="/vue2">vue2</router-link>
      <router-link to="/vue3">vue3</router-link>
      <router-link to="/react16">react16</router-link>
      <router-link to="/react17">react17</router-link>
    </div>
    <main id="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 20px;
  height: 100vh;
  --theme: rgb(241, 107, 95);
}
#base-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
}
#main-nav {
  background-color: white;
  font-size: 20px;
  position: relative;
  z-index: 1;
  padding: 30px 0;
  width: 210px;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 3px 0px 9px 2px #e6e6e6;
  transform: translate(0, 0);
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
#main-nav>a {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s linear;
}

#main-nav>a:hover {
  color: rgb(241, 107, 95);
}
@media screen and (max-width: 768px) {
  #main-nav {
    position: absolute;
    box-shadow: none;
    transform: translate(-100%, 0);
  }
}
#content {
  flex: 1;
  height: 100vh;
  overflow: hidden scroll;
  width: 1px;
}
</style>
