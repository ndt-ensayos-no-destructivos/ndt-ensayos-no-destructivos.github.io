        function formatoNumero(input) {
            // Obtener el valor actual del campo de entrada
            var valor = input.value;

            // Reemplazar comas por puntos
            valor = valor.replace(/,/g, '.');

            // Eliminar caracteres que no sean dígitos o puntos
            valor = valor.replace(/[^0-9.]/g, '');

            // Asignar el valor formateado de vuelta al campo de entrada
            input.value = valor;
        }        
        
        function calcular1() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro1").value);
            var input2 = parseFloat(document.getElementById("nro2").value);
            
            // Calcula el logaritmo en base 10 de (input2 / input1)
            var log10Result = Math.log10(input2 / input1).toFixed(3);

            // Multiplica el resultado por 20
            var resultado = 20 * log10Result;
            
            // Actualizar el resultado y la fórmula en la tarjeta correspondiente
            document.getElementById("resultados1").textContent = resultado.toFixed(3) + " dB";
            document.getElementById("formulas1").textContent = "" + input1 + " * LOG10(" + log10Result + ")" + " dB";
        }

        function calcular2() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro3").value);
            var input2 = parseFloat(document.getElementById("nro4").value);
            var input3 = parseFloat(document.getElementById("nro5").value);

            // -λ-
            var resultado1 = (input2 * Math.pow(10, 3)) / (input3 * Math.pow(10, 6));
            // -N = 0,25 * (D^2 / λ )-
            var resultado2 = 0.25 * ((input1*input1)/resultado1);

            // Calcula el valor intermedio
                var valorIntermedio1 = 1.22 * resultado1 / input1;
                var valorIntermedio2 = 1.08 * resultado1 / input1;
                var valorIntermedio3 = 0.51 * resultado1 / input1;

            // Calcula el arcseno y convierte a grados
            var resultadoGrados1 = (Math.asin(valorIntermedio1) * 180) / Math.PI;
            var resultadoGrados2 = (Math.asin(valorIntermedio2) * 180) / Math.PI;
            var resultadoGrados3 = (Math.asin(valorIntermedio3) * 180) / Math.PI;

            // -Sen0 = 1,22 * ( λ/D )-
            var resultado3 = resultadoGrados1;
            // -Sen0 = 1,08* ( λ/D )-
            var resultado4 = resultadoGrados2;
            // -Sen0 = 0,51 * ( λ/D )-
            var resultado5 = resultadoGrados3;
            
            // Actualizar el resultado y la fórmula en la tarjeta correspondiente
            document.getElementById("resultados20").textContent = resultado1.toFixed(3) + "";
            document.getElementById("resultados21").textContent = resultado2.toFixed(3) + "";
            document.getElementById("resultados22").textContent = resultado3.toFixed(3) + "";
            document.getElementById("resultados23").textContent = resultado4.toFixed(3) + "";
            document.getElementById("resultados24").textContent = resultado5.toFixed(3) + "";
           
        }

        function gradosARadianes(grados) {
            return (grados * Math.PI) / 180;
        }

        function calcular3() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro6").value);
            var input2 = parseFloat(document.getElementById("nro7").value);
            
            // Calcular la tangente en radianes
                var radianes = gradosARadianes(input2);
                var resultado1 = input1 / Math.tan(radianes);
                var resultado2 = 2 * input1 / Math.tan(radianes);
                var resultado4 = 2 * resultado2;
                var resultado3 = resultado4 - resultado1;
            
            // Actualizar el resultado y la fórmula en la tarjeta correspondiente
            document.getElementById("resultados30").textContent = resultado1.toFixed(3) + "";
            document.getElementById("resultados31").textContent = resultado2.toFixed(3) + "";
            document.getElementById("resultados32").textContent = resultado3.toFixed(3) + "";
            document.getElementById("resultados33").textContent = resultado4.toFixed(3) + "";

        }

        function calcular4() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro8").value);
            var input2 = parseFloat(document.getElementById("nro9").value);
            
            // Calcular la tangente en radianes
                var radianes = gradosARadianes(input2);
                var resultado1 = input1 / Math.cos(radianes);
                var resultado2 = 2 * input1 / Math.cos(radianes);
                var resultado4 = 2 * resultado2;
                var resultado3 = resultado4 - resultado1;
            
            // Actualizar el resultado y la fórmula en la tarjeta correspondiente
            document.getElementById("resultados40").textContent = resultado1.toFixed(3) + "";
            document.getElementById("resultados41").textContent = resultado2.toFixed(3) + "";
            document.getElementById("resultados42").textContent = resultado3.toFixed(3) + "";

        }


        function calcular5() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro10").value); // A2
            var input2 = parseFloat(document.getElementById("nro11").value); // B2
            var input3 = parseFloat(document.getElementById("nro12").value); // C2
            var input4 = parseFloat(document.getElementById("nro13").value); // D2
          
            // Calcular los resultados
            var radianes1 = Math.asin(Math.sin(input2 * (Math.PI / 180)) * (input3 / input1));
            var radianes2 = Math.asin(Math.sin(input4 * (Math.PI / 180)) * (input1 / input3));
            var resultado1 = radianes1 * (180 / Math.PI); // resultado50
            var resultado2 = radianes2 * (180 / Math.PI); // resultado51
          
            // Actualizar el resultado y la fórmula en la tarjeta correspondiente
            document.getElementById("resultados50").textContent = resultado1.toFixed(3) + "";
            document.getElementById("resultados51").textContent = resultado2.toFixed(3) + "";
          }
          
          function calcular6() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro14").value); // A3
            var input2 = parseFloat(document.getElementById("nro15").value); // B3
            var input3 = parseFloat(document.getElementById("nro16").value); // C3
        
            // Calcular el resultado
            var resultado = input2 / (input1 / input3);
        
            // Actualizar el resultado en la tarjeta correspondiente
            document.getElementById("resultados60").textContent = resultado.toFixed(3);
        }

        function calcular7() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro17").value); // A2
            var input2 = parseFloat(document.getElementById("nro18").value); // B2
            var input3 = parseFloat(document.getElementById("nro19").value); // C2
            var input4 = parseFloat(document.getElementById("nro20").value); // D2
        
            // Calcular los resultados
            var resultado70 = Math.abs(input1 * input1 * input4 / 4 / input3) * 1000;
            var resultado71 = Math.abs(input1 * input1 / 4 / input2) / 10;
        
            // Actualizar el resultado en la tarjeta correspondiente
            document.getElementById("resultados70").textContent = resultado70.toFixed(3);
            document.getElementById("resultados71").textContent = resultado71.toFixed(3);
        }

        function calcular8() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro80").value); // A2
            var input2 = parseFloat(document.getElementById("nro81").value); // B2
        
            // Calcular el resultado
            var resultado = input1 * input2;
        
            // Actualizar el resultado en la tarjeta correspondiente
            document.getElementById("resultados80").textContent = resultado.toFixed(3);
        }

        function calcular9() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro90").value); // A2
            var input2 = parseFloat(document.getElementById("nro91").value); // B2
        
            // Calcular el resultado
            var resultado = (input1 / input2) / 1000;
        
            // Actualizar el resultado en la tarjeta correspondiente
            document.getElementById("resultados90").textContent = resultado.toFixed(3);
        }

        function calcular10() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro100").value); // A2
            var input2 = parseFloat(document.getElementById("nro101").value); // B2
        
            // Calcular el resultado
            var resultado = (4 * input1 * input2) / Math.pow((input1 + input2), 2);
        
            // Actualizar el resultado en la tarjeta correspondiente
            document.getElementById("resultados100").textContent = resultado.toFixed(3);
        }

        function calcular11() {
            // Obtener los valores de entrada
            var input1 = parseFloat(document.getElementById("nro110").value); // A2
            var input2 = parseFloat(document.getElementById("nro111").value); // B2
        
            // Calcular el resultado
            var resultado = ((input2 - input1) ** 2) / ((input2 + input1) ** 2) * 100;
        
            // Actualizar el resultado en la tarjeta correspondiente
            document.getElementById("resultados110").textContent = resultado.toFixed(3);
        }
        
        
        
        
        
