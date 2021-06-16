<template>
  <form>
    <div>
      <div class="row justify-content-center">
        <div class="col-12 text-left">
          <label class="from-label">Número de estados</label>
          <input class="form-control" v-model.number="dimensiones.col" />
          <label class="from-label">Número de decisiones</label>
          <input class="form-control" v-model.number="dimensiones.filas" />
        </div>
      </div>
      <br />

      <div class="text-center py-2">
        <Matrices v-bind:dimension="dimensiones"></Matrices>
      </div>

      <br />
    </div>
  </form>
</template>

<script>
import Matrices from './matrices.vue'

export default {
  data() {
    return {
      dimensiones: {
        filas: '',
        col: '',
      },
    }
  },
  components: {
    Matrices,
  },
}
</script>
