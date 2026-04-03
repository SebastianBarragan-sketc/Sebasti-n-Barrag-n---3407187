# 📊 Clasificador de Campañas - Semana 5

Este proyecto es un sistema de clasificación en consola desarrollado en JavaScript, basado en una plataforma de **crowdfunding**.
Permite analizar el estado de una campaña, clasificarla según su rendimiento y mostrar información de forma estructurada.

---

## 🎯 Objetivo

Aplicar estructuras condicionales para:

* Clasificar campañas según su recaudación
* Determinar estados usando lógica
* Manejar valores faltantes de forma segura
* Mostrar resultados organizados en consola

---

## 📌 ¿Qué hace el programa?

* Evalúa el dinero recaudado de una campaña
* Clasifica la campaña en niveles (exitosa, en progreso, baja)
* Determina si está activa o inactiva
* Identifica el tipo de campaña
* Maneja datos faltantes con valores por defecto
* Muestra una ficha completa en consola

---

## 🧠 Conceptos usados

### 🔹 Condicionales

* `if / else if / else`
* `switch`

### 🔹 Operadores modernos

* Operador ternario (`? :`)
* Nullish coalescing (`??`)
* Optional chaining (`?.`)

### 🔹 Otros

* `console.log()`
* Template literals
* `.repeat()` para formato

---

## 🖥️ Ejemplo de salida

```text
========================================
FICHA DE CLASIFICACIÓN DE CAMPAÑA
========================================
Nombre: Campaña tecnológica educativa
Estado: Activa
Clasificación: Campaña en progreso
Tipo: Educativa
Detalle: Campaña para financiar una app educativa
Ubicación: Colombia
========================================
```

---

## ▶️ Cómo ejecutar

```bash
node script.js
```

---

## 📁 Estructura

```
semana5/
 ├── README.md
 └── script.js
```

---

## ✨ Conclusión

Este proyecto permite comprender cómo usar condicionales en JavaScript para tomar decisiones y manejar datos de forma segura, simulando el comportamiento de sistemas reales de crowdfunding.

---

## 🚀 Autor
Bootcamp JavaScript - Semana5-js
