<!-- Body Footer -->

<template>
  <Footer>
    <p>
      <span>© {{ new Date().getFullYear() }} - Endormi</span>
    </p>
  </Footer>
</template>

<style scoped>
footer {
  bottom: 0px;
  width: 100%;
}
/*
span {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

span:first-of-type {
  border: 0;
}
*/
p {
  text-align: center;
}
</style>
