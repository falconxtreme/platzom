# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), 
el mejor lugar de educacion online

## Descripcion del Idioma

- Si la palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra inicia con "z", se le adiciona "pe" al final.
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion al medio
- Si la palabra es un palindromo, nignuna regla anterior cuenta y se devueve la misma palabra, pero intercalando mayusculas y minusculas.


## Instalacion

```
npm install platzom
```

## Uso

```
import platzom from 'platzom';

platzom("Programar");//Program
platzom("Zorro");//Zorrope
platzom("Zarpar");//Zarppe
platzom("abecedario");//abece-dario
platzom("sometemos");//SoMeTeMoS

```

## Creditos

- [Eder Ramos](https://google.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)