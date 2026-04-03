# 📦 Gestión de Campañas - Semana 8

Este proyecto implementa un sistema de gestión de campañas en consola usando JavaScript, basado en una plataforma de **crowdfunding**.
Permite manipular, buscar, filtrar y transformar datos de campañas, simulando funcionalidades reales de una aplicación.

---

## 🎯 Objetivo

Aplicar estructuras avanzadas de JavaScript para:

* Gestionar datos dinámicamente
* Manipular arrays
* Crear funciones reutilizables
* Generar reportes completos

---

## 📌 ¿Qué hace el programa?

* Muestra un inventario inicial de campañas
* Permite agregar y eliminar campañas
* Inserta campañas prioritarias
* Busca campañas por nombre
* Filtra campañas activas
* Genera copias del inventario sin modificar el original
* Transforma datos usando `map()`
* Muestra un resumen final

---

## 🧠 Conceptos usados

### 🔹 Métodos de Arrays

* `push()` → agregar al final
* `pop()` → eliminar último
* `unshift()` → agregar al inicio
* `splice()` → eliminar por índice
* `filter()` → filtrar datos
* `find()` → buscar elemento
* `map()` → transformar datos

### 🔹 Otros conceptos

* Spread operator (`...`)
* Funciones reutilizables
* Template literals
* Condicionales y lógica

---

## 🖥️ Ejemplo de salida

```text id="3q8yzt"
==================================================
📦 GESTIÓN DE CAMPAÑAS DE CROWDFUNDING
==================================================

📋 Inventario inicial (5 campañas):
  [1] App educativa — educación — $500000 — Activa
  [2] Startup tecnológica — tecnología — $1200000 — Activa

--- Operaciones de mutación ---

Agregado: Plataforma educativa
Prioritario agregado: Campaña urgente
Eliminado por índice: Proyecto social
Eliminado: Plataforma educativa

--- Inventario después de mutaciones ---

--- Búsqueda y filtrado ---

Campañas activas: 4

--- Transformación con map ---

Nombres: [ 'App educativa', 'Startup tecnológica' ]

--- Resumen final ---

Total en inventario: 5 campañas
Activos: 4 | Inactivos: 1

==================================================
✅ Reporte completado
==================================================
```

---

## ▶️ Cómo ejecutar

```bash id="y5y7hk"
node script.js
```

---

## 📁 Estructura del proyecto

```id="81b98r"
semana8/
 ├── README.md 
 └── script.js 
```

---

## ✨ Conclusión

Este proyecto integra todos los conceptos aprendidos en el bootcamp, permitiendo crear un sistema completo de gestión de datos similar a los utilizados en aplicaciones reales de crowdfunding.

---

## 🚀 Autor
Bootcamp JavaScript - Semana 8
