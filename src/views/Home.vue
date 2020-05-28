<template>
  <div class="home">
    <h1>
      Welcome to Ideas.io
    </h1>
    <IdeasCreate/>
    <Ideas/>
  </div>
</template>

<script>

import IdeasCreate from '@/components/IdeasCreate'
import Ideas from '@/components/Ideas'

export default {
  name: "Home",
  components : {
    IdeasCreate,
    Ideas
  }
};
</script>
