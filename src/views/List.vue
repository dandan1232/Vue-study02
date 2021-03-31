<template>
  <vue-list-picker :left-items="leftItems" :right-items="rightItems" />
</template>
<script>
export default {
  data() {
    const example1 = {
      key: 1,
      content: "ldd",
    };
    const example2 = { key: 2, content: "蛋宝" };
    const example3 = { key: 3, content: "阿蛋" };
    const example4 = { key: 4, content: "猪仔" };
    const leftItems = [example1, example2, example3];
    const rightItems = [example4];
    return { leftItems, rightItems };
  },
};
</script>
