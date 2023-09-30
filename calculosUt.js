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

        function verificarDatos1() {
            var nro1 = document.getElementById("nro1");
            var nro2 = document.getElementById("nro2");
            
            if (nro1.value.trim() === "") {
                // Faltan datos en nro1, resalta el campo
                nro1.classList.add("input-sin-datos");
            } else {
                // Datos completos en nro1, quita el resaltado
                nro1.classList.remove("input-sin-datos");
            }
        
            if (nro2.value.trim() === "") {
                // Faltan datos en nro2, resalta el campo
                nro2.classList.add("input-sin-datos");
            } else {
                // Datos completos en nro2, quita el resaltado
                nro2.classList.remove("input-sin-datos");
            }
            
            if (nro1.value.trim() === "" || nro2.value.trim() === "") {
                // Al menos un campo está vacío, mostrar el popover
                document.getElementById("popover-content").style.display = "block";
            } else {
                // Todos los campos están completos, ocultar el popover y realizar el cálculo
                document.getElementById("popover-content").style.display = "none";
                calcular1(); // Llama a la función de cálculo
            }
        }

        function verificarDatos2() {
            var nro3 = document.getElementById("nro3");
            var nro4 = document.getElementById("nro4");
            var nro5 = document.getElementById("nro5");
        
            if (nro3.value.trim() === "") {
                nro3.classList.add("input-sin-datos");
            } else {
                nro3.classList.remove("input-sin-datos");
            }
        
            if (nro4.value.trim() === "") {
                nro4.classList.add("input-sin-datos");
            } else {
                nro4.classList.remove("input-sin-datos");
            }
        
            if (nro5.value.trim() === "") {
                nro5.classList.add("input-sin-datos");
            } else {
                nro5.classList.remove("input-sin-datos");
            }
        
            if (nro3.value.trim() === "" || nro4.value.trim() === "" || nro5.value.trim() === "") {
                document.getElementById("popover-content2").style.display = "block";
            } else {
                document.getElementById("popover-content2").style.display = "none";
                calcular2();
            }
        }

        function verificarDatos3() {
            var nro6 = document.getElementById("nro6");
            var nro7 = document.getElementById("nro7");
        
            if (nro6.value.trim() === "") {
                nro6.classList.add("input-sin-datos");
            } else {
                nro6.classList.remove("input-sin-datos");
            }
        
            if (nro7.value.trim() === "") {
                nro7.classList.add("input-sin-datos");
            } else {
                nro7.classList.remove("input-sin-datos");
            }
        
            if (nro6.value.trim() === "" || nro7.value.trim() === "") {
                document.getElementById("popover-content3").style.display = "block";
            } else {
                document.getElementById("popover-content3").style.display = "none";
                calcular3();
            }
        }
        
        function verificarDatos4() {
            var nro8 = document.getElementById("nro8");
            var nro9 = document.getElementById("nro9");
        
            if (nro8.value.trim() === "") {
                nro8.classList.add("input-sin-datos");
            } else {
                nro8.classList.remove("input-sin-datos");
            }
        
            if (nro9.value.trim() === "") {
                nro9.classList.add("input-sin-datos");
            } else {
                nro9.classList.remove("input-sin-datos");
            }
        
            if (nro8.value.trim() === "" || nro9.value.trim() === "") {
                document.getElementById("popover-content4").style.display = "block";
            } else {
                document.getElementById("popover-content4").style.display = "none";
                calcular4();
            }
        }
        
        function verificarDatos5() {
            var nro10 = document.getElementById("nro10");
            var nro11 = document.getElementById("nro11");
            var nro12 = document.getElementById("nro12");
            var nro13 = document.getElementById("nro13");
        
            if (nro10.value.trim() === "") {
                nro10.classList.add("input-sin-datos");
            } else {
                nro10.classList.remove("input-sin-datos");
            }
        
            if (nro11.value.trim() === "") {
                nro11.classList.add("input-sin-datos");
            } else {
                nro11.classList.remove("input-sin-datos");
            }
        
            if (nro12.value.trim() === "") {
                nro12.classList.add("input-sin-datos");
            } else {
                nro12.classList.remove("input-sin-datos");
            }
        
            if (nro13.value.trim() === "") {
                nro13.classList.add("input-sin-datos");
            } else {
                nro13.classList.remove("input-sin-datos");
            }
        
            if (nro10.value.trim() === "" || nro11.value.trim() === "" || nro12.value.trim() === "" || nro13.value.trim() === "") {
                document.getElementById("popover-content5").style.display = "block";
            } else {
                document.getElementById("popover-content5").style.display = "none";
                calcular5();
            }
        }
        
        function verificarDatos6() {
            var nro14 = document.getElementById("nro14");
            var nro15 = document.getElementById("nro15");
            var nro16 = document.getElementById("nro16");
        
            if (nro14.value.trim() === "") {
                nro14.classList.add("input-sin-datos");
            } else {
                nro14.classList.remove("input-sin-datos");
            }
        
            if (nro15.value.trim() === "") {
                nro15.classList.add("input-sin-datos");
            } else {
                nro15.classList.remove("input-sin-datos");
            }
        
            if (nro16.value.trim() === "") {
                nro16.classList.add("input-sin-datos");
            } else {
                nro16.classList.remove("input-sin-datos");
            }
        
            if (nro14.value.trim() === "" || nro15.value.trim() === "" || nro16.value.trim() === "") {
                document.getElementById("popover-content6").style.display = "block";
            } else {
                document.getElementById("popover-content6").style.display = "none";
                calcular6();
            }
        }
        
        function verificarDatos7() {
            var nro17 = document.getElementById("nro17");
            var nro18 = document.getElementById("nro18");
            var nro19 = document.getElementById("nro19");
            var nro20 = document.getElementById("nro20");
        
            if (nro17.value.trim() === "") {
                nro17.classList.add("input-sin-datos");
            } else {
                nro17.classList.remove("input-sin-datos");
            }
        
            if (nro18.value.trim() === "") {
                nro18.classList.add("input-sin-datos");
            } else {
                nro18.classList.remove("input-sin-datos");
            }
        
            if (nro19.value.trim() === "") {
                nro19.classList.add("input-sin-datos");
            } else {
                nro19.classList.remove("input-sin-datos");
            }
        
            if (nro20.value.trim() === "") {
                nro20.classList.add("input-sin-datos");
            } else {
                nro20.classList.remove("input-sin-datos");
            }
        
            if (nro17.value.trim() === "" || nro18.value.trim() === "" || nro19.value.trim() === "" || nro20.value.trim() === "") {
                document.getElementById("popover-content7").style.display = "block";
            } else {
                document.getElementById("popover-content7").style.display = "none";
                calcular7();
            }
        }
        
        function verificarDatos8() {
            var nro80 = document.getElementById("nro80");
            var nro81 = document.getElementById("nro81");
        
            if (nro80.value.trim() === "") {
                nro80.classList.add("input-sin-datos");
            } else {
                nro80.classList.remove("input-sin-datos");
            }
        
            if (nro81.value.trim() === "") {
                nro81.classList.add("input-sin-datos");
            } else {
                nro81.classList.remove("input-sin-datos");
            }
        
            if (nro80.value.trim() === "" || nro81.value.trim() === "") {
                document.getElementById("popover-content8").style.display = "block";
            } else {
                document.getElementById("popover-content8").style.display = "none";
                calcular8();
            }
        }
        
        function verificarDatos9() {
            var nro90 = document.getElementById("nro90");
            var nro91 = document.getElementById("nro91");
        
            if (nro90.value.trim() === "") {
                nro90.classList.add("input-sin-datos");
            } else {
                nro90.classList.remove("input-sin-datos");
            }
        
            if (nro91.value.trim() === "") {
                nro91.classList.add("input-sin-datos");
            } else {
                nro91.classList.remove("input-sin-datos");
            }
        
            if (nro90.value.trim() === "" || nro91.value.trim() === "") {
                document.getElementById("popover-content9").style.display = "block";
            } else {
                document.getElementById("popover-content9").style.display = "none";
                calcular9();
            }
        }
        
        function verificarDatos10() {
            var nro100 = document.getElementById("nro100");
            var nro101 = document.getElementById("nro101");
        
            if (nro100.value.trim() === "") {
                nro100.classList.add("input-sin-datos");
            } else {
                nro100.classList.remove("input-sin-datos");
            }
        
            if (nro101.value.trim() === "") {
                nro101.classList.add("input-sin-datos");
            } else {
                nro101.classList.remove("input-sin-datos");
            }
        
            if (nro100.value.trim() === "" || nro101.value.trim() === "") {
                document.getElementById("popover-content10").style.display = "block";
            } else {
                document.getElementById("popover-content10").style.display = "none";
                calcular10();
            }
        }
        
        function verificarDatos11() {
            var nro110 = document.getElementById("nro110");
            var nro111 = document.getElementById("nro111");
        
            if (nro110.value.trim() === "") {
                nro110.classList.add("input-sin-datos");
            } else {
                nro110.classList.remove("input-sin-datos");
            }
        
            if (nro111.value.trim() === "") {
                nro111.classList.add("input-sin-datos");
            } else {
                nro111.classList.remove("input-sin-datos");
            }
        
            if (nro110.value.trim() === "" || nro111.value.trim() === "") {
                document.getElementById("popover-content11").style.display = "block";
            } else {
                document.getElementById("popover-content11").style.display = "none";
                calcular11();
            }
        }
        

        
        
        
        
        
