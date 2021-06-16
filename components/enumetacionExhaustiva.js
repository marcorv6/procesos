

function calcularPolitica(num_est, matriz_costos, matriz_trans_des, politica){
    let matriz_marco = [];

    let aux1 = [];
    
    let ld = [];
    

    for(let i=0; i<num_est; i++){
        matriz_marco.push([0]);
        for(let j=0; j<num_est; j++){
            matriz_marco[i][j] = matriz_trans_des[politica[j]-1][j][i];
            ld[j] = 0;
        }
        matriz_marco[i][i] = matriz_marco[i][i] - 1;
    }

    for(let i=0; i<num_est; i++){
        matriz_marco[num_est-1][i] = 1;
        ld[num_est-1] = 1;
    }

    function print(M, msg) {
        console.log("======" + msg + "=========")
        for(var k=0; k<M.length; ++k) {
          console.log(M[k]);
        }
        console.log("==========================")
      }
      
      function diagonalize(M) {
        var m = M.length;
        var n = M[0].length;
        for(var k=0; k<Math.min(m,n); ++k) {
          // Find the k-th pivot
          let i_max = findPivot(M, k);
          if (M[i_max, k] == 0)
            throw "matrix is singular";
          swap_rows(M, k, i_max);
          // Do for all rows below pivot
          for(var i=k+1; i<m; ++i) {
            // Do for all remaining elements in current row:
            var c = M[i][k] / M[k][k];
            for(var j=k+1; j<n; ++j) {
              M[i][j] = M[i][j] - M[k][j] * c;
            }
            // Fill lower triangular matrix with zeros
            M[i][k] = 0;
          }
        }
      }
      
      function findPivot(M, k) {
        var i_max = k;
        for(var i=k+1; i<M.length; ++i) {
          if (Math.abs(M[i][k]) > Math.abs(M[i_max][k])) {
            i_max = i;
          }
        }
        return i_max;
      }
      
      function swap_rows(M, i_max, k) {
        if (i_max != k) {
          var temp = M[i_max];
          M[i_max] = M[k];
          M[k] = temp;
        }
      }
      
      function makeM(A, b) {
        for(var i=0; i<A.length; ++i) {
          A[i].push(b[i]);
        }
      }
      
      function substitute(M) {
        var m = M.length;
        for(var i=m-1; i>=0; --i) {
          var x = M[i][m] / M[i][i];
          for(var j=i-1; j>=0; --j) {
            M[j][m] -= x * M[j][i];
            M[j][i] = 0;
          }
          M[i][m] = x;
          M[i][i] = 1;
        }
      }
      
      function extractX(M) {
        var x = [];
        var m = M.length;
        var n = M[0].length;
        for(var i=0; i<m; ++i){
          x.push(M[i][n-1]);
        }
        return x;
      }
      
      function solve(A, b) {
        //print(A, "A");
        makeM(A,b);
        //print(A, "M");
        diagonalize(A);
        //print(A, "diag");
        substitute(A);
        //print(A, "subst");
        var x = extractX(A);
        //print(x, "x");
        return x;
      }

      let x = solve(matriz_marco, ld);


    let cont2 = 0;
    let z = 0;
    for(let i=0; i<num_est; i++){
        z += matriz_costos[cont2][politica[i]] * x[i];
        cont2++;
    }
    
    let matriz_renglon = [];
    let cont3 = 0;

    for(let i=0; i<matriz_costos.length; i++){
      //matriz_renglon.push([0])
      cont3 = 0;
        for(let j=0; j<matriz_costos.length; j++){
            if((matriz_costos[i][j] != "") || (matriz_costos[i][j] === 0)){
              //console.log(matriz_costos[i][j]);
              cont3++;
              matriz_renglon[i] = cont3;
            }
          }
        }

    

    return z;
}

/*let z = 0;

z = calcularPolitica(num_est_prueba, matriz_costos_prueba, matriz_trans_des_prueba, politica_prueba);*/
export {calcularPolitica}