<template>
  <div>
    <div class="box">
      <h2>scroll with shadow</h2>
      <scroll-shadow scrollColor="#4e8997" scrollWidth="12px">
        <ul>
          <li>Abarth</li>
          <li>Alfa Romeo</li>
          <li>Aston Martin</li>
          <li>Audi</li>
          <li>Bentley</li>
          <li>BMW</li>
          <li>Bugatti</li>
          <li>Cadillac</li>
          <li>Abarth</li>
          <li>Alfa Romeo</li>
          <li>Aston Martin</li>
          <li>Audi</li>
          <li>Bentley</li>
          <li>BMW</li>
          <li>Bugatti</li>
          <li>Aston Martin</li>
          <li>Audi</li>
          <li>Bentley</li>
          <li>BMW</li>
          <li>Bugatti</li>
        </ul>
      </scroll-shadow>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scroll",
};
</script>
<style lang="scss" scoped>
.box {
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 500px;
  margin: 10px auto;
  background-color: #96c2d6;
  max-height: 400px;
  text-align: left;
  font-size: 16px;

  h2 {
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 10px 20px;
  }
}
</style>
