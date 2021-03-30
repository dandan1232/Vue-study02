<template>
  <vue-paycard :value-fields="valueFields" />
</template>

<script>
export default {
  data: () => ({
    valueFields: {
      cardName: "Lindand",
      cardNumber: "1234567898765432112",
      cardMonth: "03",
      cardYear: "2021",
      cardCvv: "信用卡",
    },
  }),
};
</script>
