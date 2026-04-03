# 📊 Reporte de Campañas - Semana 6

Este proyecto genera un reporte en consola basado en campañas de **crowdfunding**, utilizando bucles para procesar múltiples datos.

---

## 🎯 Objetivo

Aplicar estructuras repetitivas para:

* Recorrer listas de campañas
* Clasificar datos por categorías
* Calcular estadísticas
* Generar reportes automáticos

---

## 📌 ¿Qué hace el programa?

* Muestra un listado completo de campañas
* Cuenta cuántas campañas hay por categoría
* Calcula el total y promedio de recaudación
* Identifica la campaña con mayor y menor recaudación
* Genera un reporte indicando si cada campaña está sobre o bajo el promedio

---

## 🧠 Conceptos usados

### 🔹 Bucles

* `for...of`
* `for` clásico

### 🔹 Lógica

* Condicionales (`if`)
* Operador ternario

### 🔹 Otros

* Acumuladores
* Template literals
* `.toFixed()` para formato numérico

---

## 🖥️ Ejemplo de salida

```text
=== LISTADO COMPLETO ===
1. App educativa — educación — recaudación: 500000
2. Startup tecnológica — tecnología — recaudación: 1200000

=== CONTEO POR CATEGORÍA ===
educación: 2 campaña(s)
tecnología: 2 campaña(s)
social: 2 campaña(s)

=== ESTADÍSTICAS ===
Total recaudación: 4000000
Promedio recaudación: 666666.7

=== MÁXIMO Y MÍNIMO ===
Mayor recaudación: Startup tecnológica (1200000)
Menor recaudación: Ayuda comunitaria (300000)

=== REPORTE DETALLADO ===
1. App educativa — bajo el promedio
2. Startup tecnológica — sobre el promedio
```

---

## ▶️ Cómo ejecutar

```bash
node script.js
```

---

## 📁 Estructura

```
semana6/
 ├── README.md
 └── script.js
```

---

## ✨ Conclusión

Este proyecto permite comprender cómo recorrer estructuras de datos y generar reportes dinámicos, simulando análisis reales en plataformas de crowdfunding.

---

## 🚀 Autor
Bootcamp JavaScript - Semana 6
