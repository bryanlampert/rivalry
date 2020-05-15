<template>
  <div class="rivalry-container bg-rivalryDark">
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.rivalry-container {
  background: url('~assets/images/blue-transparent-triangle-pattern.webp');
  background-image: url('~assets/images/blue-transparent-triangle-pattern.webp'),
    radial-gradient(
      38% 130% at center center,
      rgb(27, 139, 186) 52%,
      rgb(14, 20, 46) 100%
    );
}
</style>
