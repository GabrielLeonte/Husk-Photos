<template>
  <div class="container" style="margin-top: 8vh;">
      <span>{{ $route.params.id }}</span>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'usernavbar'
}
</script>
