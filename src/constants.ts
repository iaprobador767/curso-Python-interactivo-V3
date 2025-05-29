import { Lesson } from './types';

export const PYTHON_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-400">
  <path fillRule="evenodd" d="M6.755 2.509A.75.75 0 006 .75H3.75a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75H5.16l-.305 1.223A4.502 4.502 0 001.5 9.156V12a4.5 4.5 0 004.5 4.5h1.559l-1.223 1.223-.305 1.223H5.25a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75H6a.75.75 0 00.75-.75V21a.75.75 0 00-.75-.75h-.094l.305-1.223A4.503 4.503 0 009.31 15H12a4.5 4.5 0 004.5-4.5V9.156a4.502 4.502 0 00-3.356-4.424L12.84 3.51H14.25a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H12a.75.75 0 00-.755.009L9.622 2.033l-.305 1.223A4.503 4.503 0 006.16 7.5H3.75a4.5 4.5 0 00-4.5 4.5V12a4.5 4.5 0 004.5 4.5h.094l-.305 1.223A4.503 4.503 0 003 21.076V22.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-.094l1.223-.305c1.541-.385 2.94-.942 4.223-1.637V19.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-1.559l1.223 1.223 1.223.305H18a.75.75 0 00.75-.75V21a.75.75 0 00-.75-.75h-.094l-.305-1.223A4.503 4.503 0 0014.69 15H12a4.5 4.5 0 00-4.5 4.5v1.344c-1.283-.695-2.682-1.252-4.223-1.637l-1.223.305H3.75a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-1.616l.305-1.223A4.502 4.502 0 0010.5 14.844V12a4.5 4.5 0 00-4.5-4.5H4.441l1.223-1.223.305-1.223H6.75a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-.094l-.305 1.223A4.503 4.503 0 003 7.924V6.45A.75.75 0 002.25 5.7H.75a.75.75 0 00-.75.75v1.5C0 7.536.336 7.87.75 7.87h1.616l-.305-1.223A4.502 4.502 0 005.41 2.223L6.755 2.509zM17.245 21.491a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H19.41l.305-1.223A4.502 4.502 0 0022.5 14.844V12a4.5 4.5 0 00-4.5-4.5h-1.559l1.223-1.223.305-1.223H18.75a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H18a.75.75 0 00-.75.75V3a.75.75 0 00.75.75h.094l-.305 1.223A4.503 4.503 0 0014.69 9H12a4.5 4.5 0 00-4.5 4.5v1.344c1.283.695 2.682 1.252 4.223 1.637l1.223-.305H11.25a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-1.616l-.305-1.223A4.502 4.502 0 0013.5 10.156V12a4.5 4.5 0 004.5 4.5h1.559l-1.223 1.223-.305 1.223H17.25a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h.094l.305-1.223A4.503 4.503 0 0021 18.076v1.474a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-1.616l.305 1.223a4.502 4.502 0 00-3.356 4.424L17.245 21.49z" clipRule="evenodd" />
</svg>
`;

export const LESSONS_DATA: Lesson[] = [
  {
    id: "01-hola-python",
    title: "1. ¡Hola Python!",
    theory: `
        <h3 class="text-xl font-semibold text-sky-400 mb-2">¿Qué es Python?</h3>
        <p class="mb-4 text-slate-300">Python es un lenguaje de programación de <strong>alto nivel</strong>, <strong>interpretado</strong>, <strong>interactivo</strong> y <strong>orientado a objetos</strong>. Es conocido por su sintaxis clara y legible, que se asemeja al inglés, lo que lo hace ideal para principiantes. La filosofía de Python enfatiza la legibilidad del código (puedes buscar "El Zen de Python" para conocer sus principios). </p>
        <p class="mb-4 text-slate-300">Se utiliza en una amplia gama de aplicaciones:</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li><strong>Desarrollo Web:</strong> Frameworks como Django y Flask permiten construir sitios web robustos.</li>
            <li><strong>Ciencia de Datos y Machine Learning:</strong> Bibliotecas como NumPy, Pandas, Scikit-learn y TensorFlow son fundamentales.</li>
            <li><strong>Automatización de Tareas (Scripting):</strong> Para automatizar procesos repetitivos en sistemas.</li>
            <li><strong>Desarrollo de Software:</strong> Creación de aplicaciones de escritorio y herramientas.</li>
            <li><strong>Juegos:</strong> Aunque no es el más común, Pygame permite desarrollar juegos 2D.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-sky-400 mb-2">Tu primer programa: La función <code>print()</code></h3>
        <p class="mb-4 text-slate-300">La función <code>print()</code> es la forma estándar de mostrar información (salida) en la consola o terminal. Es una herramienta esencial para ver los resultados de tus programas, depurar código y comunicarte con el usuario.</p>
        <p class="mb-2 text-slate-300">Para imprimir un texto literal (una cadena de caracteres o "string"), debes encerrarlo entre comillas:</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li>Comillas simples: <code>'Hola, soy Python'</code></li>
            <li>Comillas dobles: <code>"Python es genial"</code></li>
        </ul>
        <p class="mb-4 text-slate-300">Ambos tipos de comillas funcionan igual, pero es útil tener las dos opciones si tu texto ya contiene un tipo de comilla (por ejemplo, <code>print("Él dijo 'Hola'")</code>). Puedes imprimir múltiples valores separándolos por comas dentro de <code>print()</code>. Por defecto, se separarán con un espacio.</p>
    `,
    example: `# Imprimir un saludo simple
print("¡Hola, mundo!")

# Usar comillas simples
print('Python es divertido de aprender.')

# Imprimir múltiples elementos (se separan con espacios por defecto)
print("Mi nombre es:", "Python", "y tengo", 30, "años (conceptuales).")

# Imprimir números
print(123)
print(3.14159)

# ¿Qué pasa si no pones nada? Se imprime una línea vacía.
print() 
print("Esta línea está después de una vacía.")`,
    exercise: {
      description: "Escribe un programa que imprima tu nombre completo en una línea y tu ciudad y país en otra línea, usando la función <code>print()</code>.",
      template: `# Escribe tu código aquí
print("Mi nombre completo es ...")
print("Vivo en ..., ...")`,
      solution: `print("Mi nombre completo es Ana López")
print("Vivo en Ciudad de México, México")`
    },
    quiz: {
      question: "¿Cuál es la función para mostrar texto y otros valores en la consola en Python?",
      options: [
        { text: "show()", isCorrect: false },
        { text: "print()", isCorrect: true },
        { text: "display()", isCorrect: false },
        { text: "output()", isCorrect: false }
      ],
    }
  },
  {
    id: "02-variables-tipos-datos",
    title: "2. Variables y Tipos de Datos",
    theory: `
        <h3 class="text-xl font-semibold text-sky-400 mb-2">Variables: Almacenando Información</h3>
        <p class="mb-4 text-slate-300">Las variables son nombres simbólicos que actúan como contenedores para almacenar valores de datos. Piensa en ellas como etiquetas que puedes asignar a diferentes piezas de información para poder referenciarte a ellas y manipularlas fácilmente en tu código. En Python, no necesitas declarar explícitamente el tipo de una variable; el tipo se infiere automáticamente del valor que se le asigna.</p>
        <p class="mb-2 text-slate-300"><strong>Reglas y Convenciones para Nombres de Variables:</strong></p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li>Deben comenzar con una letra (a-z, A-Z) o un guion bajo (<code>_</code>).</li>
            <li>El resto del nombre puede contener letras, números (0-9) y guiones bajos.</li>
            <li>Son sensibles a mayúsculas y minúsculas (<code>edad</code>, <code>Edad</code> y <code>EDAD</code> son tres variables diferentes).</li>
            <li>No pueden ser palabras reservadas de Python (como <code>print</code>, <code>if</code>, <code>for</code>, etc.).</li>
            <li>La convención más común en Python es usar <strong>snake_case</strong> para nombres de variables (palabras en minúscula separadas por guiones bajos, ej: <code>mi_variable_favorita</code>).</li>
        </ul>

        <h3 class="text-xl font-semibold text-sky-400 mb-2">Tipos de Datos Fundamentales</h3>
        <p class="mb-4 text-slate-300">Python tiene varios tipos de datos incorporados. Aquí están los más comunes que usarás al principio:</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li><strong><code>str</code> (String / Cadena de texto):</strong> Representa secuencias de caracteres. Se definen con comillas simples (<code>'...'</code>) o dobles (<code>"..."</code>). Ejemplo: <code>"Hola Python"</code>, <code>'12345'</code> (esto es texto, no un número). Las cadenas son <strong>inmutables</strong> (no puedes cambiar un carácter individual una vez creada, pero puedes crear una nueva cadena basada en la original).</li>
            <li><strong><code>int</code> (Integer / Entero):</strong> Representa números enteros, positivos o negativos, sin parte decimal. Ejemplo: <code>42</code>, <code>-100</code>, <code>0</code>.</li>
            <li><strong><code>float</code> (Floating-point / Flotante):</strong> Representa números reales, es decir, números con punto decimal. Ejemplo: <code>3.14159</code>, <code>-0.001</code>, <code>2.0</code> (un número entero escrito con decimal es un flotante).</li>
            <li><strong><code>bool</code> (Boolean / Booleano):</strong> Representa uno de dos valores: <code>True</code> o <code>False</code> (con mayúscula inicial). Se usan extensivamente en lógica condicional y bucles.</li>
        </ul>
        <p class="mt-4 text-slate-300">Puedes usar la función incorporada <code>type()</code> para averiguar el tipo de dato de una variable o un valor.</p>
    `,
    example: `# Asignación de variables
nombre_curso = "Python Interactivo"  # str
numero_leccion = 2                 # int
version_python = 3.9               # float
es_divertido = True                # bool

# Imprimir los valores y sus tipos
print(f"Curso: \${nombre_curso}, Tipo: \${type(nombre_curso)}")
print(f"Lección: \${numero_leccion}, Tipo: \${type(numero_leccion)}")
print(f"Versión: \${version_python}, Tipo: \${type(version_python)}")
print(f"¿Es divertido?: \${es_divertido}, Tipo: \${type(es_divertido)}")

# Reasignación de variables (pueden cambiar de valor y tipo)
una_variable = 100
print(f"Valor inicial: \${una_variable}, Tipo: \${type(una_variable)}")
una_variable = "Ahora soy texto"
print(f"Nuevo valor: \${una_variable}, Tipo: \${type(una_variable)}")

# Variables pueden usarse en expresiones
precio = 19.99
cantidad = 3
total_pagar = precio * cantidad # float * int -> float
print(f"Total a pagar: \${total_pagar}")`,
    exercise: {
      description: "Crea variables para almacenar: el título de una película (str), el director (str), el año de estreno (int), y su calificación promedio (float, de 0.0 a 10.0). Luego imprime esta información de forma clara.",
      template: `# Crea variables para:
# titulo_pelicula (str)
# director_pelicula (str)
# anio_estreno (int)
# calificacion_promedio (float)

# Luego imprime toda la información usando f-strings de forma descriptiva
# Ejemplo:
# print(f"Película: \${titulo_pelicula} (\${anio_estreno})")
# print(f"Dirigida por: \${director_pelicula}")
# print(f"Calificación: \${calificacion_promedio}/10.0")
`,
      solution: `titulo_pelicula = "Inception"
director_pelicula = "Christopher Nolan"
anio_estreno = 2010
calificacion_promedio = 8.8

print(f"Película: \${titulo_pelicula} (\${anio_estreno})")
print(f"Dirigida por: \${director_pelicula}")
print(f"Calificación: \${calificacion_promedio}/10.0")`
    },
    quiz: {
      question: "Si tienes <code>numero = '123'</code>, ¿qué tipo de dato es <code>numero</code> y cómo lo convertirías a un entero?",
      options: [
        { text: "int, no necesita conversión", isCorrect: false },
        { text: "str, usando int(numero)", isCorrect: true },
        { text: "float, usando integer(numero)", isCorrect: false },
        { text: "str, usando numero.to_int()", isCorrect: false }
      ],
    }
  },
  {
    id: "03-operaciones-matematicas",
    title: "3. Operaciones Matemáticas",
    theory: `
        <h3 class="text-xl font-semibold text-sky-400 mb-2">Operadores Aritméticos en Python</h3>
        <p class="mb-4 text-slate-300">Python proporciona un conjunto completo de operadores aritméticos para realizar cálculos matemáticos con números (<code>int</code> y <code>float</code>).</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-2">
            <li><code>+</code> : <strong>Suma</strong> (Ej: <code>5 + 3</code> resulta en <code>8</code>)</li>
            <li><code>-</code> : <strong>Resta</strong> (Ej: <code>5 - 3</code> resulta en <code>2</code>)</li>
            <li><code>*</code> : <strong>Multiplicación</strong> (Ej: <code>5 * 3</code> resulta en <code>15</code>)</li>
            <li><code>/</code> : <strong>División</strong> (Ej: <code>10 / 3</code> resulta en <code>3.333...</code>). El resultado siempre es un <code>float</code>.</li>
            <li><code>//</code> : <strong>División Entera</strong> (o floor division): Realiza la división y redondea el resultado hacia abajo al entero más cercano. (Ej: <code>10 // 3</code> resulta en <code>3</code>; <code>-10 // 3</code> resulta en <code>-4</code>).</li>
            <li><code>%</code> : <strong>Módulo</strong> (o resto): Devuelve el resto de la división entera. (Ej: <code>10 % 3</code> resulta en <code>1</code>, porque 10 dividido por 3 es 3 con resto 1). Muy útil para determinar si un número es par o impar.</li>
            <li><code>**</code> : <strong>Potencia</strong> (o exponenciación): Eleva el primer número a la potencia del segundo. (Ej: <code>2 ** 3</code> es 2<sup>3</sup>, que resulta en <code>8</code>).</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-sky-400 mb-2">Orden de Operaciones (Precedencia)</h3>
        <p class="mb-4 text-slate-300">Python sigue el orden estándar de precedencia de operadores, a menudo recordado por el acrónimo PEMDAS/BODMAS:</p>
        <ol class="list-decimal list-inside mb-4 text-slate-300 space-y-1">
            <li><strong>P</strong>aréntesis <code>()</code></li>
            <li><strong>E</strong>xponenciación <code>**</code></li>
            <li><strong>M</strong>ultiplicación <code>*</code>, <strong>D</strong>ivisión <code>/</code>, División entera <code>//</code>, Módulo <code>%</code> (se evalúan de izquierda a derecha)</li>
            <li><strong>A</strong>dición (Suma) <code>+</code>, <strong>S</strong>ustracción (Resta) <code>-</code> (se evalúan de izquierda a derecha)</li>
        </ol>
        <p class="text-slate-300">Usa paréntesis <code>()</code> para agrupar expresiones y forzar un orden de evaluación específico cuando sea necesario para la claridad o para alterar el orden natural.</p>

        <h3 class="text-xl font-semibold text-sky-400 mb-2">Operadores de Asignación Compuesta</h3>
        <p class="mb-4 text-slate-300">Son atajos para actualizar el valor de una variable usando una operación aritmética. Por ejemplo, <code>x = x + 1</code> se puede escribir como <code>x += 1</code>.</p>
        <ul class="list-disc list-inside text-slate-300 space-y-1">
            <li><code>+=</code> (Ej: <code>x += 2</code> es <code>x = x + 2</code>)</li>
            <li><code>-=</code> (Ej: <code>x -= 2</code> es <code>x = x - 2</code>)</li>
            <li><code>*=</code> (Ej: <code>x *= 2</code> es <code>x = x * 2</code>)</li>
            <li><code>/=</code> (Ej: <code>x /= 2</code> es <code>x = x / 2</code>)</li>
            <li><code>//=</code>, <code>%=</code>, <code>**=</code> funcionan de manera similar.</li>
        </ul>
    `,
    example: `a = 15
b = 4

print(f"\${a} + \${b} = \${a + b}")
print(f"\${a} - \${b} = \${a - b}")
print(f"\${a} * \${b} = \${a * b}")
print(f"\${a} / \${b} = \${a / b}")          # División flotante
print(f"\${a} // \${b} = \${a // b}")        # División entera
print(f"\${a} % \${b} = \${a % b}")          # Módulo (resto)
print(f"3 ** 4 = \${3 ** 4}")          # Potencia (3^4)

# Orden de operaciones
# (5 + 3) * 2 - 16 / 4 ** 2  => (8 * 2) - 16 / 16 => 16 - 1 => 15.0
calculo_complejo = (5 + 3) * 2 - 16 / 4 ** 2
print(f"(5 + 3) * 2 - 16 / 4 ** 2 = \${calculo_complejo}")

# Operadores de asignación compuesta
contador = 0
contador += 5  # contador es ahora 5
print(f"Contador después de += 5: \${contador}")
contador *= 2  # contador es ahora 10
print(f"Contador después de *= 2: \${contador}")`,
    exercise: {
      description: "Un artículo cuesta 25.50 unidades. Si compras 3 artículos y tienes un cupón de descuento del 10% sobre el total, ¿cuánto pagarás finalmente? Calcula el costo total, el descuento y el precio final.",
      template: `# Datos
precio_articulo = 25.50
cantidad = 3
porcentaje_descuento = 10 # (es 10%)

# 1. Calcula el costo total sin descuento
costo_subtotal = 

# 2. Calcula el monto del descuento
# (Recuerda que el porcentaje debe ser decimal, ej: 10% es 0.10)
monto_descuento = 

# 3. Calcula el precio final
precio_final = 

# Muestra los resultados
print(f"Precio por artículo: \${precio_articulo:.2f}")
print(f"Cantidad: \${cantidad}")
print(f"Subtotal: \${costo_subtotal:.2f}")
print(f"Descuento (\${porcentaje_descuento}%): \${monto_descuento:.2f}")
print(f"Total a pagar: \${precio_final:.2f}")`,
      solution: `precio_articulo = 25.50
cantidad = 3
porcentaje_descuento = 10

costo_subtotal = precio_articulo * cantidad
monto_descuento = costo_subtotal * (porcentaje_descuento / 100)
precio_final = costo_subtotal - monto_descuento

print(f"Precio por artículo: \${precio_articulo:.2f}")
print(f"Cantidad: \${cantidad}")
print(f"Subtotal: \${costo_subtotal:.2f}")
print(f"Descuento (\${porcentaje_descuento}%): \${monto_descuento:.2f}")
print(f"Total a pagar: \${precio_final:.2f}")`
    },
    quiz: {
      question: "¿Cuál es el resultado de la expresión <code>(2 + 3) * 4 - 5 // 2</code> en Python?",
      options: [
        { text: "18", isCorrect: true }, // (5 * 4) - (5 // 2) = 20 - 2 = 18
        { text: "7.5", isCorrect: false },
        { text: "17.5", isCorrect: false },
        { text: "8", isCorrect: false }
      ],
    }
  },
  {
    id: "04-entrada-usuario",
    title: "4. Entrada del Usuario",
    theory: `
        <h3 class="text-xl font-semibold text-sky-400 mb-2">Interactuando con el Usuario: La Función <code>input()</code></h3>
        <p class="mb-4 text-slate-300">La función <code>input()</code> es la herramienta principal en Python para hacer tus programas interactivos. Permite pausar la ejecución del programa y esperar a que el usuario ingrese datos a través del teclado. Una vez que el usuario escribe algo y presiona la tecla "Enter", <code>input()</code> devuelve el texto ingresado.</p>
        <p class="mb-4 text-slate-300"><strong>Importante:</strong> <code>input()</code> siempre devuelve los datos como una cadena de texto (<code>str</code>), sin importar si el usuario ingresa números, letras o símbolos. Si necesitas usar la entrada como un número para realizar cálculos, deberás convertirla explícitamente.</p>
        <p class="mb-4 text-slate-300">Puedes (y deberías) proporcionar un mensaje o "prompt" como argumento a <code>input()</code>. Este mensaje se mostrará al usuario para indicarle qué tipo de información se espera. Ejemplo: <code>nombre = input("Por favor, ingresa tu nombre: ")</code></p>

        <h3 class="text-xl font-semibold text-sky-400 mb-2">Conversión de Tipos de Datos (Type Casting)</h3>
        <p class="mb-4 text-slate-300">Dado que <code>input()</code> devuelve una cadena, si necesitas que esa entrada sea tratada como un número (entero o flotante) para realizar operaciones matemáticas, es crucial convertirla. Python ofrece funciones incorporadas para esto:</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li><code>int(valor)</code>: Intenta convertir <code>valor</code> a un entero. Si <code>valor</code> es una cadena que no representa un número entero válido (ej: "hola", "3.14"), se producirá un error <code>ValueError</code>.</li>
            <li><code>float(valor)</code>: Intenta convertir <code>valor</code> a un número de punto flotante. Puede convertir cadenas que representan enteros (ej: "10") o decimales (ej: "3.14"). Si la cadena no es un número válido (ej: "texto"), generará un <code>ValueError</code>.</li>
            <li><code>str(valor)</code>: Convierte <code>valor</code> a una cadena de texto. Útil si tienes un número y necesitas tratarlo como texto.</li>
        </ul>
        <p class="text-slate-300">Más adelante aprenderás a manejar estos posibles errores (<code>ValueError</code>) usando bloques <code>try-except</code>, pero por ahora, asume que el usuario ingresará el tipo de dato esperado.</p>
        
        <h3 class="text-xl font-semibold text-sky-400 mb-2">Formateo de Salida con f-strings</h3>
        <p class="mb-4 text-slate-300">Al mostrar los resultados que incluyen entradas del usuario, las f-strings (cadenas formateadas) son muy útiles. Te permiten incrustar expresiones y variables directamente dentro de una cadena de texto de una manera legible.</p>
        <p class="text-slate-300">Ejemplo: <code>print(f"Hola, \${nombre_usuario}. Veo que tienes \${edad_usuario} años.")</code></p>
    `,
    example: `# Pedir el nombre al usuario
nombre = input("Escribe tu nombre: ")

# Pedir la edad (como texto) y convertirla a entero
edad_str = input(f"Hola \${nombre}, ¿cuántos años tienes? ")
edad = int(edad_str)

# Pedir la altura (como texto) y convertirla a flotante
altura_str = input("¿Y cuál es tu altura en metros (ej: 1.75)? ")
altura = float(altura_str)

# Mostrar la información procesada usando f-strings
print(f"--- Resumen ---")
print(f"Nombre: \${nombre}")
print(f"Edad: \${edad} años")
print(f"Altura: \${altura} metros")

# Calcular algo simple con los datos numéricos
proximo_cumple = edad + 1
print(f"El próximo año cumplirás \${proximo_cumple} años.")

# Ejemplo de qué pasaría si no convertimos (conceptual)
# numero1_str = input("Dame un número: ") # ej: "10"
# numero2_str = input("Dame otro número: ") # ej: "5"
# suma_incorrecta = numero1_str + numero2_str # Esto sería "105" (concatenación de strings)
# print(f"Suma incorrecta (concatenación): \${suma_incorrecta}")
# suma_correcta = int(numero1_str) + int(numero2_str) # Esto sería 15
# print(f"Suma correcta (numérica): \${suma_correcta}")
`,
    exercise: {
      description: "Crea un programa que pregunte al usuario por dos números enteros. Luego, calcula y muestra la suma, resta, multiplicación y división (flotante) de esos dos números.",
      template: `# 1. Pide el primer número al usuario y conviértelo a entero
num1_str = input("Ingresa el primer número entero: ")
num1 = 

# 2. Pide el segundo número al usuario y conviértelo a entero
num2_str = input("Ingresa el segundo número entero: ")
num2 = 

# 3. Calcula las operaciones
suma = 
resta = 
multiplicacion = 
division = # Asegúrate que sea división flotante

# 4. Muestra los resultados de forma clara usando f-strings
print(f"--- Resultados para \${num1} y \${num2} ---")
print(f"Suma: \${num1} + \${num2} = \${suma}")
# ... completa para resta, multiplicación y división
`,
      solution: `num1_str = input("Ingresa el primer número entero: ")
num1 = int(num1_str)

num2_str = input("Ingresa el segundo número entero: ")
num2 = int(num2_str)

suma = num1 + num2
resta = num1 - num2
multiplicacion = num1 * num2
division = num1 / num2 # División flotante por defecto

print(f"--- Resultados para \${num1} y \${num2} ---")
print(f"Suma: \${num1} + \${num2} = \${suma}")
print(f"Resta: \${num1} - \${num2} = \${resta}")
print(f"Multiplicación: \${num1} * \${num2} = \${multiplicacion}")
print(f"División: \${num1} / \${num2} = \${division:.2f}") # Formateado a 2 decimales`
    },
    quiz: {
      question: "Si el usuario ingresa '25' cuando se le pide con <code>input()</code>, ¿qué debes hacer para usar ese valor en una suma matemática?",
      options: [
        { text: "Nada, se puede sumar directamente.", isCorrect: false },
        { text: "Convertirlo con <code>int('25')</code> o <code>float('25')</code>.", isCorrect: true },
        { text: "Usar <code>text_to_number('25')</code>.", isCorrect: false },
        { text: "Multiplicarlo por 1.", isCorrect: false }
      ],
    }
  },
  {
    id: "05-condicionales",
    title: "5. Condicionales (if, elif, else)",
    theory: `
        <h3 class="text-xl font-semibold text-sky-400 mb-2">Tomando Decisiones: <code>if</code>, <code>elif</code>, <code>else</code></h3>
        <p class="mb-4 text-slate-300">Las estructuras condicionales son fundamentales en programación. Permiten que tu programa ejecute diferentes bloques de código (rutas de ejecución) dependiendo de si ciertas condiciones son verdaderas (<code>True</code>) o falsas (<code>False</code>). La estructura básica en Python es:</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li><strong><code>if condicion:</code></strong>: Si la <code>condicion</code> se evalúa como <code>True</code>, se ejecuta el bloque de código indentado que le sigue.</li>
            <li><strong><code>elif otra_condicion:</code></strong> (opcional, puede haber varios): Si la <code>condicion</code> del <code>if</code> (o <code>elif</code>s anteriores) fue <code>False</code>, Y esta <code>otra_condicion</code> es <code>True</code>, se ejecuta su bloque de código indentado. <code>elif</code> es una contracción de "else if".</li>
            <li><strong><code>else:</code></strong> (opcional, solo uno al final): Si todas las condiciones anteriores (del <code>if</code> y todos los <code>elif</code>s) fueron <code>False</code>, se ejecuta el bloque de código indentado bajo el <code>else</code>.</li>
        </ul>
        <p class="mb-4 text-slate-300">La <strong>indentación</strong> (generalmente 4 espacios) es crucial en Python. Define qué código pertenece a qué bloque condicional.</p>

        <h3 class="text-xl font-semibold text-sky-400 mb-2">Operadores de Comparación</h3>
        <p class="mb-4 text-slate-300">Estos operadores se usan para construir las expresiones booleanas (condiciones) que evalúan a <code>True</code> o <code>False</code>:</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li><code>==</code> : Igual a (Ej: <code>x == 5</code>)</li>
            <li><code>!=</code> : Diferente de (Ej: <code>x != 5</code>)</li>
            <li><code>&gt;</code>  : Mayor que (Ej: <code>x > 5</code>)</li>
            <li><code>&lt;</code>  : Menor que (Ej: <code>x < 5</code>)</li>
            <li><code>&gt;=</code> : Mayor o igual que (Ej: <code>x >= 5</code>)</li>
            <li><code>&lt;=</code> : Menor o igual que (Ej: <code>x <= 5</code>)</li>
        </ul>

        <h3 class="text-xl font-semibold text-sky-400 mb-2">Operadores Lógicos</h3>
        <p class="mb-4 text-slate-300">Permiten combinar múltiples condiciones:</p>
        <ul class="list-disc list-inside mb-4 text-slate-300 space-y-1">
            <li><strong><code>and</code></strong>: Devuelve <code>True</code> si AMBAS condiciones a su izquierda y derecha son <code>True</code>. (Ej: <code>edad > 18 and tiene_licencia</code>)</li>
            <li><strong><code>or</code></strong>: Devuelve <code>True</code> si AL MENOS UNA de las condiciones a su izquierda o derecha es <code>True</code>. (Ej: <code>es_fin_de_semana or es_feriado</code>)</li>
            <li><strong><code>not</code></strong>: Invierte el valor booleano de una condición. Devuelve <code>True</code> si la condición es <code>False</code>, y viceversa. (Ej: <code>not esta_lloviendo</code>)</li>
        </ul>
        <p class="text-slate-300">También puedes anidar estructuras <code>if</code> dentro de otras para lógicas más complejas, pero intenta mantenerlo legible.</p>
    `,
    example: `edad_usuario = int(input("Ingresa tu edad: "))
permiso_padres = input("¿Tienes permiso de tus padres? (si/no): ").lower() # .lower() convierte a minúscula

if edad_usuario >= 18:
    print("Eres mayor de edad. Puedes entrar.")
elif edad_usuario >= 13 and permiso_padres == "si":
    print("Eres adolescente con permiso. Puedes entrar con supervisión.")
elif edad_usuario >= 13 and permiso_padres == "no":
    print("Eres adolescente pero no tienes permiso. No puedes entrar.")
else: # Menor de 13
    print("Eres menor de 13 años. No puedes entrar.")

# Ejemplo con 'or' y 'not'
temperatura = 5 # grados Celsius
esta_nevando = True

if temperatura < 0 or esta_nevando:
    print("¡Hace mucho frío o está nevando! Abrígate bien.")
    if not esta_nevando: # Condición anidada
        print("Al menos no tienes que palear nieve.")
else:
    print("El clima no es tan extremo.")
`,
    exercise: {
      description: "Un cine tiene los siguientes precios: Menores de 5 años: Gratis. Entre 5 y 12 años: $5. Entre 13 y 64 años: $10. 65 años o más: $7. Pide la edad al usuario y muestra el precio de su entrada.",
      template: `# Pide la edad al usuario
edad_str = input("Ingresa tu edad: ")
edad = int(edad_str)

precio_entrada = 0 # Inicializamos el precio

# Usa condicionales (if, elif, else) para determinar el precio
if edad < 5:
    # Tu lógica aquí
elif edad >= 5 and edad <= 12: # Podemos simplificar esto
    # Tu lógica aquí
# ... completa las demás condiciones

print(f"Para la edad de \${edad} años, el precio de la entrada es: $\${precio_entrada}")
`,
      solution: `edad_str = input("Ingresa tu edad: ")
edad = int(edad_str)

precio_entrada = 0

if edad < 0: # Considerar edad inválida
    print("Edad inválida.")
    precio_entrada = -1 # Indicador de error
elif edad < 5:
    precio_entrada = 0
elif edad <= 12: # No es necesario 'edad >= 5' porque ya pasó el 'if edad < 5'
    precio_entrada = 5
elif edad <= 64: # No es necesario 'edad >= 13'
    precio_entrada = 10
else: # edad >= 65
    precio_entrada = 7

if precio_entrada != -1:
    print(f"Para la edad de \${edad} años, el precio de la entrada es: $\${precio_entrada}")
`
    },
    quiz: {
      question: "Si <code>x = 10</code>, ¿cuál de estas condiciones es <code>True</code>?",
      options: [
        { text: "<code>x > 10 and x < 20</code>", isCorrect: false }, // False and True -> False
        { text: "<code>x == 10 or x > 100</code>", isCorrect: true },  // True or False -> True
        { text: "<code>not (x == 10)</code>", isCorrect: false },       // not True -> False
        { text: "<code>x < 0 and x == 10</code>", isCorrect: false } // False and True -> False
      ],
    }
  }
];