<template>
  <div class="about">关于我们 {{ $t('name') }}</div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log('about');
  },
};
</script>

<style lang="less">
.about {
}
</style>
