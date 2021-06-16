Vue.component('matrices', { template: //html ` `, methods: { generarMatriz() {
this.decisiones = new Array(this.dimension.filas) this.costos = new
Array(this.dimension.filas) this.MTD1 = new Array(this.dimension.filas)
this.MTD2 = new Array(this.dimension.filas) this.MTD3 = new
Array(this.dimension.filas) this.MTD4 = new Array(this.dimension.filas)
this.MTD5 = new Array(this.dimension.filas) for (let i = 0; i <
this.dimension.filas; i++) this.decisiones[i] = new Array(this.dimension.col)
for (let i = 0; i < this.dimension.filahis.rellenarMatriz(this.MTD1,
this.matrix1) this.rellenarMatriz(this.MTD2,

<template>
  <div class="container">
    <section>
      <h3 class="text-center">Matriz de decisiones</h3>
      <div
        class="row justify-content-center py-2"
        v-for="(item, index1) in dimension.filas"
      >
        <div class="col-2" v-for="(item, index2) in dimension.col">
          <div class="input-group">
            <input
              class="form-control"
              type="number"
              v-model.number="
                aux[index1 + index2 + (dimension.col - 1) * index1]
              "
            />
          </div>
        </div>
      </div>
      <br />
      <!--matriz 1-->

      <h3 class="text-center">Matriz de costos</h3>
      <div
        class="row justify-content-center py-2"
        v-for="(item, index1) in dimension.col"
      >
        <div class="col-2" v-for="(item, index2) in dimension.col">
          <div class="input-group">
            <input
              class="form-control"
              type="number"
              v-model.number="
                aux2[index1 + index2 + (dimension.col - 1) * index1]
              "
            />
          </div>
        </div>
      </div>
      <br />
      <!--matriz 2-->

      <h3 class="text-center">Matriz de transicion de decision 1</h3>
      <div
        class="row justify-content-center py-2"
        v-for="(item, index1) in dimension.col"
      >
        <div class="col-2" v-for="(item, index2) in dimension.col">
          <div class="input-group">
            <input
              class="form-control"
              type="number"
              v-model.number="
                matrix1[index1 + index2 + (dimension.col - 1) * index1]
              "
            />
          </div>
        </div>
      </div>
      <br />

      <div v-if="2 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 2</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix2[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="3 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 3</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix3[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="4 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 4</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix4[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="5 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 5</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix5[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="6 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 6</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix6[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="7 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 7</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix7[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="8 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 8</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix8[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="9 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 9</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix9[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div v-if="10 <= dimension.filas">
        <h3 class="text-center">Matriz de transiciones de decision 10</h3>
        <div
          class="row justify-content-center py-2"
          v-for="(item, index1) in dimension.col"
        >
          <div class="col-2" v-for="(item, index2) in dimension.col">
            <div class="input-group">
              <input
                class="form-control"
                type="number"
                v-model.number="
                  matrix10[index1 + index2 + (dimension.col - 1) * index1]
                "
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class="row justify-content-center py-2">
        <div class="col-2">
          <button class="btn btn-info" type="button" @click="generarMatriz()">
            Generamos matrices
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['dimension'],
  data() {
    return {
      aux: [],
      aux2: [],
      decisiones: [],
      costos: [],
      MTD1: [],
      MTD2: [],
      MTD3: [],
      MTD4: [],
      MTD5: [],
      MTD6: [],
      MTD7: [],
      MTD8: [],
      MTD9: [],
      MTD10: [],
      matrix1: [],
      matrix2: [],
      matrix3: [],
      matrix4: [],
      matrix5: [],
      matrix6: [],
      matrix7: [],
      matrix8: [],
      matrix9: [],
      matrix10: [],
      matrixFinal: [],
      objeto: { estados: '', costos: [], decisiones: [], matrixFinal: [] },
    }
  },
  methods: {
    generarMatriz() {
      this.decisiones = new Array(this.dimension.filas)
      this.costos = new Array(this.dimension.filas)

      this.MTD1 = new Array(this.dimension.filas)
      this.MTD2 = new Array(this.dimension.filas)
      this.MTD3 = new Array(this.dimension.filas)
      this.MTD4 = new Array(this.dimension.filas)
      this.MTD5 = new Array(this.dimension.filas)

      for (let i = 0; i < this.dimension.filas; i++)
        this.decisiones[i] = new Array(this.dimension.col)
      for (let i = 0; i < this.dimension.filas; i++) {
        for (let j = 0; j < this.dimension.col; j++) {
          if (this.aux[i + j + (this.dimension.col - 1) * i] == undefined) {
            this.decisiones[i][j] = 0
          } else {
            this.decisiones[i][j] =
              this.aux[i + j + (this.dimension.col - 1) * i]
          }
        }
      }

      this.rellenarMatriz(this.costos, this.aux2)

      this.rellenarMatriz(this.MTD1, this.matrix1)
      this.rellenarMatriz(this.MTD2, this.matrix2)
      this.rellenarMatriz(this.MTD3, this.matrix3)
      this.rellenarMatriz(this.MTD4, this.matrix4)
      this.rellenarMatriz(this.MTD5, this.matrix5)
      this.rellenarMatriz(this.MTD6, this.matrix6)
      this.rellenarMatriz(this.MTD7, this.matrix7)
      this.rellenarMatriz(this.MTD8, this.matrix8)
      this.rellenarMatriz(this.MTD9, this.matrix9)
      this.rellenarMatriz(this.MTD10, this.matrix10)

      this.finalM(this.MTD1, 0)

      if (2 <= this.dimension.filas) {
        this.finalM(this.MTD2, 1)
        if (3 <= this.dimension.filas) {
          this.finalM(this.MTD3, 2)
          if (4 <= this.dimension.filas) {
            this.finalM(this.MTD4, 3)
            if (5 <= this.dimension.filas) {
              this.finalM(this.MTD5, 4)
              if (6 <= this.dimension.filas) {
                this.finalM(this.MTD6, 5)
                if (7 <= this.dimension.filas) {
                  this.finalM(this.MTD7, 6)
                  if (8 <= this.dimension.filas) {
                    this.finalM(this.MTD8, 7)
                    if (9 <= this.dimension.filas) {
                      this.finalM(this.MTD9, 8)
                      if (10 <= this.dimension.filas) {
                        this.finalM(this.MTD10, 9)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    rellenarMatriz(matriz, matrix) {
      for (let i = 0; i < this.dimension.col; i++)
        matriz[i] = new Array(this.dimension.col)
      for (let i = 0; i < this.dimension.col; i++) {
        for (let j = 0; j < this.dimension.col; j++) {
          if (matrix[i + j + (this.dimension.col - 1) * i] == undefined) {
            matriz[i][j] = 0
          } else {
            matriz[i][j] = matrix[i + j + (this.dimension.col - 1) * i]
          }
        }
      }
    },
    finalM(matrix, indice) {
      this.matrixFinal[indice] = matrix

      this.objeto.estados = this.dimension.col
      this.objeto.costos = this.costos
      this.objeto.decisiones = this.decisiones
      this.objeto.matrixFinal = this.matrixFinal

      console.log(this.objeto)
    },
  },
  created() {
    this.aux = new Array(this.dimension.filas * this.dimension.col)
    this.aux2 = new Array(this.dimension.filas * this.dimension.col)
    this.matrix1 = new Array(this.dimension.filas)
    this.matrix2 = new Array(this.dimension.filas)
    this.matrix3 = new Array(this.dimension.filas)
    this.matrix4 = new Array(this.dimension.filas)
    this.matrix5 = new Array(this.dimension.filas)
    this.matrix6 = new Array(this.dimension.filas)
    this.matrix7 = new Array(this.dimension.filas)
    this.matrix8 = new Array(this.dimension.filas)
    this.matrix9 = new Array(this.dimension.filas)
    this.matrix10 = new Array(this.dimension.filas)
    this.matrizFinal = new Array(this.dimension.filas)
  },
}
</script>
