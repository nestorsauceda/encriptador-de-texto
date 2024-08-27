# Encriptador de Texto

Este proyecto es una aplicación web de encriptación y desencriptación de texto, desarrollada como parte del curso de Alura Latam. El objetivo principal de la aplicación es permitir a los usuarios encriptar y desencriptar textos de forma sencilla utilizando un conjunto específico de reglas de sustitución de caracteres.

![Captura de la Aplicación](./assets/captura.png)

## Tecnologías Utilizadas

- **HTML**: Para la estructura básica de la aplicación.
- **CSS**: Para los estilos y la presentación visual, incluyendo el diseño responsivo.
- **JavaScript**: Para la lógica de encriptación y desencriptación de texto, así como la manipulación del DOM.

## Funcionalidades

- **Encriptación de Texto**: Convierte un texto normal en un texto encriptado siguiendo las siguientes reglas:

  - La letra "e" es convertida a "enter".
  - La letra "i" es convertida a "imes".
  - La letra "a" es convertida a "ai".
  - La letra "o" es convertida a "ober".
  - La letra "u" es convertida a "ufat".

- **Desencriptación de Texto**: Convierte el texto encriptado de vuelta a su forma original utilizando las reglas de encriptación mencionadas.

- **Copia de Texto**: Un botón que permite copiar el texto encriptado o desencriptado al portapapeles, facilitando su uso en otros contextos.

## Estructura del Proyecto

- **index.html**: Contiene la estructura principal de la página, incluyendo los campos de entrada para el texto, los botones de encriptar y desencriptar, y la sección para mostrar el texto resultante.
- **styles.css**: Archivo de estilos que define la apariencia del proyecto, incluyendo diseño responsivo para diferentes dispositivos.
- **script.js**: Contiene la lógica de encriptación y desencriptación, así como las funciones necesarias para la interacción con el usuario.

## Cómo Usar

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/nestorsauceda/encriptador-de-texto.git
   ```
