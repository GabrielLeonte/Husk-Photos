<template>
    <div>{{$store.state.user}}</div>
</template>

<script>
export default {
    middleware: "auth",
    layout: "usernavbar"
}
</script>