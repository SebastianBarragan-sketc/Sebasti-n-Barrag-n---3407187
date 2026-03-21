# 📢 Generador de Mensajes - Semana 4

Este proyecto consiste en un generador de mensajes en consola desarrollado en JavaScript, basado en una plataforma de **crowdfunding** (aportes a campañas).

El programa simula la creación de una ficha informativa de una campaña, validaciones de datos y una notificación automática.

---

## 🎯 Objetivo

Construir un sistema que:

* Manipule texto usando métodos de string
* Valide información de una campaña
* Genere una ficha estructurada en consola
* Cree mensajes dinámicos con template literals

---

## 📌 ¿Qué hace el programa?

* Limpia y transforma el nombre de la campaña
* Extrae información del código (prefijo)
* Verifica si los datos son válidos
* Genera una ficha visual de la campaña
* Muestra una notificación automática

---

## 🧠 Tecnologías y conceptos usados

En este proyecto se aplicaron:

### 🔹 Métodos de String

* `trim()` → elimina espacios innecesarios
* `toUpperCase()` → convierte texto a mayúsculas
* `toLowerCase()` → convierte texto a minúsculas
* `slice()` → extrae partes de un texto
* `includes()` → verifica si contiene una palabra
* `startsWith()` → valida inicio de texto
* `endsWith()` → valida final de texto
* `repeat()` → repite caracteres

---

### 🔹 Otros conceptos

* Template literals (`` ` ` ``)
* Interpolación de variables `${}`
* Operador ternario (`condición ? valor1 : valor2`)
* Uso de `console.log()` para salida en consola

---

## 🖥️ Ejemplo de salida

```
=============================================
PLATAFORMA DE CROWDFUNDING — FICHA DE CAMPAÑA
=============================================
Nombre: CAMPAÑA TECNOLÓGICA EDUCATIVA
Categoría: financiacion — innovación
Código: CMP-305
Prefijo: CMP
Recaudado: 500000
Estado: Activa

---------------------------------------------
Descripción:
Campaña de crowdfunding para desarrollar una plataforma educativa digital.
=============================================

--- Validaciones ---
¿Código empieza con 'CMP'?: true
¿Descripción contiene 'crowdfunding'?: true
¿Código termina con '305'?: true

--- Notificación ---
📢 Nueva campaña disponible: campaña tecnológica educativa (CMP-305)
```

---
