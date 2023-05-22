const leer = require("prompt-sync")();

class Ejercicios {
  ejercicio1() {
    let numero = 0;
    numero = leer("Ingrese un número: ");
    if (numero % 2 === 0) {
      console.log(`El número ${numero} es par.`);
    } else {
      console.log(`El número ${numero} es impar.`);
    }
  }

  ejercicio2() {
    let nota1,
      nota2,
      nota3,
      notaFinal = 0;
    nota1 = leer("Ingrese primera nota: ");
    nota2 = leer("Ingrese segunda nota: ");
    nota3 = leer("Ingrese tercera nota: ");

    notaFinal = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    if (notaFinal >= 70) {
      console.log("USTED APROBÓ. Su nota final es " + notaFinal + ".");
    } else {
      console.log("USTED REPROBÓ. Su nota final es " + notaFinal + ".");
    }
  }

  ejercicio3() {
    let total = 0;
    total = leer("Ingrese el total: ");
    total = Number(total);

    let totalPagar = total;

    if (total >= 100) {
      totalPagar = total * 0.8;
      console.log("El total a pagar es: " + totalPagar.toFixed(2));
    } else {
      console.log("El total a pagar es: " + totalPagar.toFixed(2));
    }
  }

  ejercicio4() {
    let num1,
      num2 = 0;

    num1 = leer("Ingrese primer número: ");
    num2 = leer("Ingrese segundo número: ");
    num1 = Number(num1);
    num2 = Number(num2);

    if (num1 == num2) {
      let multiplicacion = num1 * num2;
      console.log("La multiplicación es: " + multiplicacion);
    } else if (num1 > num2) {
      let resta = num1 - num2;
      console.log("La resta es: " + resta);
    }

    if (num1 < num2) {
      let suma = num1 + num2;
      console.log("La suma es: " + suma);
    }
  }

  ejercicio4() {
    let num1,
      num2 = 0;

    num1 = leer("Ingrese primer número: ");
    num2 = leer("Ingrese segundo número: ");
    num1 = Number(num1);
    num2 = Number(num2);

    if (num1 == num2) {
      let multiplicacion = num1 * num2;
      console.log("La multiplicación es: " + multiplicacion);
    } else if (num1 > num2) {
      let resta = num1 - num2;
      console.log("La resta es: " + resta);
    }

    if (num1 < num2) {
      let suma = num1 + num2;
      console.log("La suma es: " + suma);
    }
  }

  ejercicio5() {
    let num1, num2, num3;

    num1 = leer("Ingrese primer número: ");
    num2 = leer("Ingrese segundo número: ");
    num3 = leer("Ingrese tercer número: ");
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    if (num1 > num2 && num1 > num3) {
      console.log("El número mayor es: " + num1);
    } else if (num2 > num1 && num2 > num3) {
      console.log("El número mayor es: " + num2);
    } else if (num3 > num1 && num3 > num2) {
      console.log("El número mayor es: " + num3);
    } else if (num1 === num2 && num1 === num3) {
      console.log("TODOS SON IGUALES");
    }
  }

  ejercicio6() {
    let kilos;
    kilos = leer("¿Cuántos kilos de manzana desea comprar?: ");
    kilos = Number(kilos);
    let precioPorKilo = 2.24;
    let precioSinDescuento = precioPorKilo * kilos;
    let precioConDescuento = 0;

    if (kilos >= 0 && kilos <= 2) {
      precioConDescuento = precioSinDescuento;
      console.log("El total a pagar es: " + precioConDescuento.toFixed(2));
    } else if (kilos <= 5) {
      precioConDescuento = precioSinDescuento * 0.9;
      console.log("El total a pagar es: " + precioConDescuento.toFixed(2));
    } else if (kilos <= 10) {
      precioConDescuento = precioSinDescuento * 0.85;
      console.log("El total a pagar es: " + precioConDescuento.toFixed(2));
    } else {
      precioConDescuento = precioSinDescuento * 0.8;
      console.log("El total a pagar es: " + precioConDescuento.toFixed(2));
    }
  }

  ejercicio7() {
    console.log(
      "Ingrese un número del 1 al 7 para mostrar un día de la semana"
    );
    console.log("(los días se enlistan y se ordenan del 1 al 7)");

    let numero = Number(leer("-"));

    switch (numero) {
      case 1:
        console.log("LUNES");
        break;
      case 2:
        console.log("MARTES");
        break;
      case 3:
        console.log("MIÉRCOLES");
        break;
      case 4:
        console.log("JUEVES");
        break;
      case 5:
        console.log("VIERNES");
        break;
      case 6:
        console.log("SÁBADO");
        break;
      case 7:
        console.log("DOMINGO");
        break;
      default:
        console.log("ERROR. ESCRIBA NUEVAMENTE POR FAVOR.");
    }
  }

  ejercicio8() {
    console.log("Digite la década entre 10 y 60");
    let decada = Number(leer("-"));

    switch (decada) {
      case 10:
        console.log("Boda de Hojalata");
        break;
      case 20:
        console.log("Boda de Porcelana");
        break;
      case 30:
        console.log("Bodas de Perlas");
        break;
      case 40:
        console.log("Bodas de Rubí");
        break;
      case 50:
        console.log("Bodas de Oro");
        break;
      case 60:
        console.log("Bodas de Diamante");
        break;
      default:
        console.log("NO EXISTE ANIVERSARIO EN ESE AÑO");
        break;
    }
  }

  ejercicio9() {
    console.log("Opción 1: Elevar un número a una potencia X");
    console.log("Opción 2: Sacar la raíz cuadrada de un número");
    console.log("Opción 3: Salir");

    let opcion = Number(leer("-"));

    switch (opcion) {
      case 1:
        console.log("Ingrese un número:");
        let numero = Number(leer());
        console.log("Ingrese una potencia:");
        let potencia = Number(leer());
        let resultado = Math.pow(numero, potencia);
        console.log("El resultado es: " + resultado);
        break;
      case 2:
        console.log("Ingrese un número:");
        let numero2 = Number(leer());
        let raizCuadrada = Math.sqrt(numero2);
        console.log("La raíz cuadrada es: " + raizCuadrada.toFixed(4));
        break;
      case 3:
        console.log("Salió...");
        break;
      default:
        console.log("Opción inválida");
        break;
    }
  }

  ejercicio10() {
    let a = 10;
    let b;

    console.log("Digite un número para sumarle 10:");
    b = Number(leer());

    let resultado = a + b;

    console.log("El resultado: " + resultado);
  }

  ejercicio11() {
    console.log("Ingrese el valor de A:");
    let valorA = Number(leer(">>"));

    console.log("Ingrese el valor de B:");
    let valorB = Number(leer("-"));

    console.log("Ingrese el valor de C:");
    let valorC = Number(leer("-"));

    let discriminante = valorB ** 2 - 4 * valorA * valorC;

    if (discriminante >= 0) {
      let raizDiscriminante = Math.sqrt(discriminante);
      let resultado1 = (-valorB + raizDiscriminante) / (2 * valorA);
      let resultado2 = (-valorB - raizDiscriminante) / (2 * valorA);
      console.log("El resultado 1 es:", resultado1);
      console.log("El resultado 2 es:", resultado2);
    } else {
      console.log("La ecuación no tiene soluciones reales.");
    }
  }

  ejercicio12() {
    console.log("Ingrese el valor de a:");
    let valorA = Number(leer("-"));

    console.log("Ingrese el valor de b:");
    let valorB = Number(leer("-"));

    let m = (3 + 5 * 8 < 3 && (-6 / 3) * 4 + 2 < 2) || valorA > valorB;

    console.log(m);
  }

  ejercicio13() {
    console.log("INVERTIR VALORES");
    console.log("Digite a:");
    let valorA = Number(leer("-"));

    console.log("Digite b:");
    let valorB = Number(leer("-"));

    let temp = valorA;
    valorA = valorB;
    valorB = temp;

    console.log("El valor de a es", valorA);
    console.log("El valor de b es", valorB);
  }

  ejercicio14() {
    let variableA = 20;
    let variableB = 20;

    console.log("Escriba un número:");
    let variableC = Number(leer("-"));

    let resultado = variableA + variableB + variableC;
    console.log("La respuesta es: " + resultado);
  }

  ejercicio15() {
    let valorA = 10;

    console.log("Digite un número:");
    let valorB = Number(leer("-"));

    let resultado = valorA + valorB;

    console.log("La respuesta es: " + resultado);
  }

  ejercicio16() {
    console.log("Digite un número:");
    let numero = Number(leer("-"));

    let resultado = Math.abs(numero);
    console.log("La respuesta es: " + resultado);
  }

  ejercicio17() {
    let totalNumeros, suma;

    suma = 0;

    totalNumeros = Number(leer("INGRESE EL TOTAL DE NUMEROS QUE SE SUMARAN: "));

    for (let i = 1; i <= totalNumeros; i++) {
      const numero = Number(leer(`Ingrese el numero #${i} para sumar: `));
      suma += numero;
    }

    console.log(`La suma de los ${totalNumeros} numeros es: ${suma}`);
  }
  ejercicio17() {
    let totalNumeros, suma;

    suma = 0;

    totalNumeros = Number(leer("INGRESE EL TOTAL DE NUMEROS QUE SE SUMARAN: "));

    for (let i = 1; i <= totalNumeros; i++) {
      const numero = Number(leer("Ingrese el numero #" + i + " para sumar"));
      suma += numero;
    }

    console.log("La suma de los" + totalNumeros + " numeros es: " + suma);
  }

  ejercicio18() {
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 1; i <= 50; i++) {
      if (i % 2 === 0) {
        sumaPares += i;
      } else {
        sumaImpares += i;
      }
    }

    console.log("La suma de los numeros pares es: " + sumaPares);
    console.log("La suma de los numeros impares es: " + sumaImpares);
  }

  ejercicio19() {
    let conteoPositivos = 0;
    let conteoNegativos = 0;
    let conteoNeutros = 0;

    console.log("ENCONTRAR NUMEROS POSITIVOS, NEGATIVOS Y NEUTROS.");
    console.log("Ingrese 10 números:");

    for (let i = 1; i <= 10; i++) {
      let num = Number(leer(" Numero " + i + ": "));

      if (num > 0) {
        conteoPositivos++;
      } else if (num < 0) {
        conteoNegativos++;
      } else {
        conteoNeutros++;
      }
    }

    console.log("El total de numeros positivos es: " + conteoPositivos);
    console.log("El total de numeros negativos es: " + conteoNegativos);
    console.log("El total de numeros neutros es: " + conteoNeutros);
  }

  ejercicio20() {
    let calificacion,
      suma = 0,
      promedio = 0;
    let calificacionBaja = Infinity;

    for (let i = 1; i <= 10; i++) {
      console.log("Ingrese la calificación #" + i + ":");
      calificacion = Number(leer(">>"));

      suma += calificacion;
      promedio = suma / 10;

      if (calificacion <= calificacionBaja) {
        calificacionBaja = calificacion;
      }
    }

    console.log("La suma de las calificaciones es: " + suma);
    console.log("El promedio es: " + promedio);
    console.log("La calificación más baja es: " + calificacionBaja);
  }

  ejercicio21() {
    function factorial(num) {
      if (num === 0) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }

    console.clear();
    let num;

    do {
      num = Number(leer("Digite un número no menor a cero: "));
    } while (num < 0);

    const fact = factorial(num);

    console.log("El factorial es: " + fact);
  }

  ejercicio22() {
    let n, i, suma, potencia;
    i = 1;
    suma = 0;

    n = Number(leer("Digite un número: "));

    while (i <= n) {
      potencia = Math.pow(i, 2);
      suma += potencia;
      i++;
    }

    console.log("La suma es: " + suma);
  }

  ejercicio23() {
    let numTrabajadores, i, tarifaPago, horas, salario, sumaTotal;
    sumaTotal = 0;

    numTrabajadores = Number(leer("Ingrese la cantidad de trabajadores: "));
    tarifaPago = Number(leer("Ingrese la tarifa de pago por hora: "));

    for (i = 1; i <= numTrabajadores; i++) {
      horas = Number(
        leer("Ingrese las horas trabajadas del trabajador " + i + ": ")
      );
      salario = horas * tarifaPago;
      console.log("El salario del trabajador " + i + " es: $" + salario);
      sumaTotal += salario;
    }

    console.log("El salario total de los trabajadores es: $" + sumaTotal);
  }

  ejercicio24() {
    let i = 1;
    let salarioCada,
      horas,
      tarifa,
      sumatoriaSalario = 0;
    let numeroTrabajadores;

    numeroTrabajadores = Number(leer("Digite el número de trabajadores: "));
    tarifa = Number(leer("Digite la tarifa: "));

    while (i <= numeroTrabajadores) {
      horas = Number(
        leer(
          "Trabajador " +
            i +
            ": Digite el valor de horas trabajadas por este trabajador: "
        )
      );
      salarioCada = horas * tarifa;
      console.log("El valor a pagar de este trabajador es $" + salarioCada);
      sumatoriaSalario += salarioCada;
      i++;
    }

    console.log(
      "El valor total de salarios a pagar es de: $" + sumatoriaSalario
    );
  }

  ejercicio25() {
    let i = -1;

    while (i <= 10) {
      console.log(i);
      i++;
    }
  }

  ejercicio26() {
    let i, contador;

    contador = 0;

    for (i = 1; i <= 10; i++) {
      console.log(i);
      contador++;
    }

    console.log("El contador es: " + contador);
  }

  ejercicio27() {
    let Horas, Minutos, Segundos;
    let suma1, suma2, sumaFinal;

    console.log("INGRESE LA HORA");
    Horas = Number(leer("Hora: "));

    console.log("INGRESE LOS MINUTOS");
    Minutos = Number(leer("Minutos: "));

    console.log("INGRESE LOS SEGUNDOS");
    Segundos = Number(leer("Segundos: "));

    suma1 = Horas * 60 * 60;
    suma2 = Minutos * 60;
    sumaFinal = suma1 + suma2 + Segundos;

    console.log(
      "El total de segundos incluidos en horas, minutos y segundos es: " +
        sumaFinal
    );
  }

  ejercicio28() {
    const pi = Math.PI;

    let radio, area, longitud;

    console.log("Ingrese el valor del radio");
    radio = Number(leer("Radio: "));

    area = pi * Math.pow(radio, 2);
    longitud = 2 * pi * radio;

    console.log("El area es: " + area);
    console.log("La longitud: " + longitud);
  }

  ejercicio29() {
    let man, woman, total, percentage1, percentage2;

    console.log("INGRESE LA CANTIDAD DE HOMBRES TOTAL DEL CURSO");
    man = Number(leer("Cantidad de hombres: "));

    console.log("INGRESE LA CANTIDAD DE MUJERES TOTAL DEL CURSO");
    woman = Number(leer("Cantidad de mujeres: "));

    total = man + woman;

    percentage1 = (man / total) * 100;
    percentage2 = (woman / total) * 100;

    console.log("HAY UN TOTAL DE " + total + " ESTUDIANTES EN EL CURSO");

    console.log(
      "EL PORCENTAJE DE HOMBRES ES: " + Math.trunc(percentage1) + "%"
    );
    console.log(
      "EL PORCENTAJE DE MUJERES ES: " + Math.trunc(percentage2) + "%"
    );
  }

  ejercicio30() {
    let A, B, C;
    let first, second, third;
    let minutos, hora, total;

    console.log("Ingrese la cantidad de exámenes del tipo A:");
    A = Number(leer("Cantidad de exámenes tipo A: "));

    console.log("Ingrese la cantidad de exámenes del tipo B:");
    B = Number(leer("Cantidad de exámenes tipo B: "));

    console.log("Ingrese la cantidad de exámenes del tipo C:");
    C = Number(leer("Cantidad de exámenes tipo C: "));

    first = A * 5;
    second = B * 8;
    third = C * 6;

    total = first + second + third;

    hora = Math.trunc(total / 60);
    minutos = total % 60;

    console.log(
      "El tiempo total es: " + hora + " hora(s) y " + minutos + " minuto(s)."
    );
  }

  ejercicio31() {
    let compra;
    let descuento, final;

    console.log("Ingrese el valor total de la compra:");
    compra = Number(leer("Valor total de la compra: "));

    descuento = compra * 0.15;
    final = compra - descuento;

    console.log(
      "El total a pagar con un descuento del 15% es: $" + final.toFixed(2)
    );
  }

  ejercicio32() {
    let final1, final2, final3;
    let examf, trabajf;
    let final_promedio, final_total;
    let examen_final, trabajo_final;
    let total;

    console.log("Ingrese la nota del primer trabajo parcial:");
    final1 = Number(leer("Nota del primer trabajo parcial: "));

    console.log("Ingrese la nota del segundo trabajo parcial:");
    final2 = Number(leer("Nota del segundo trabajo parcial: "));

    console.log("Ingrese la nota del tercer trabajo parcial:");
    final3 = Number(leer("Nota del tercer trabajo parcial: "));

    final_promedio = (final1 + final2 + final3) / 3;
    final_total = final_promedio * 0.55;

    console.log("Ingrese la calificación de su examen parcial:");
    examf = Number(leer("Calificación del examen parcial: "));

    examen_final = examf * 0.3;

    console.log("Ingrese la calificación de un trabajo final:");
    trabajf = Number(leer("Calificación del trabajo final: "));

    trabajo_final = trabajf * 0.15;

    total = final_total + examen_final + trabajo_final;

    console.log(
      "La nota final de los tres trabajos parciales: " + final_total.toFixed(2)
    );
    console.log(
      "La nota final del examen parcial es: " + examen_final.toFixed(2)
    );
    console.log(
      "La nota final del trabajo final es: " + trabajo_final.toFixed(2)
    );
    console.log("La nota final en la materia es: " + total.toFixed(2));
  }
}

const ejercicios = new Ejercicios();

// ejercicios.ejercicio1();
// ejercicios.ejercicio2();
// ejercicios.ejercicio3();
// ejercicios.ejercicio4();
// ejercicios.ejercicio5();
// ejercicios.ejercicio6();
// ejercicios.ejercicio7();
// ejercicios.ejercicio8();
// ejercicios.ejercicio9();
// ejercicios.ejercicio10();
// ejercicios.ejercicio11();
// ejercicios.ejercicio12();
// ejercicios.ejercicio13();
// ejercicios.ejercicio14();
// ejercicios.ejercicio15();
// ejercicios.ejercicio16();
// ejercicios.ejercicio17();
// ejercicios.ejercicio18();
// ejercicios.ejercicio19();
// ejercicios.ejercicio20();
// ejercicios.ejercicio21();
// ejercicios.ejercicio22();
// ejercicios.ejercicio23();
// ejercicios.ejercicio24();
// ejercicios.ejercicio25();
// ejercicios.ejercicio26();
// ejercicios.ejercicio27();
// ejercicios.ejercicio28();
// ejercicios.ejercicio29();
// ejercicios.ejercicio30();
// ejercicios.ejercicio31();
// ejercicios.ejercicio32();
