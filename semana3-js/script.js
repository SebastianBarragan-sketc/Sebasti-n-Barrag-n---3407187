// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Datos básicos de una campaña
const CAMPAIGN_NAME = "App Educativa";
const GOAL = 1_000_000; // meta de dinero
const CONTRIBUTION = 50_000; // aporte por persona
const PEOPLE = 6; // personas que aportan


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// total recaudado
const totalRaised = CONTRIBUTION * PEOPLE;
console.log("Total recaudado:", totalRaised);

// dinero que falta
const remaining = GOAL - totalRaised;
console.log("Dinero faltante:", remaining);

// promedio por persona
const average = totalRaised / PEOPLE;
console.log("Promedio por persona:", average);

// residuo de la meta
const residue = GOAL % 3;
console.log("Residuo:", residue);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// total acumulado
let acumulado = 0;

// se suma un aporte
acumulado += 50_000;
console.log("Después del primer aporte:", acumulado);

// se suma otro
acumulado += 30_000;
console.log("Después del segundo aporte:", acumulado);

// se aplica descuento (comisión)
acumulado *= 0.9;
console.log("Después de comisión:", acumulado);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// si alcanzó la meta
const metaAlcanzada = totalRaised >= GOAL;
console.log("¿Meta alcanzada?:", metaAlcanzada);

// si es exactamente igual
const exacto = totalRaised === GOAL;
console.log("¿Igual a la meta?:", exacto);

// si es diferente
const diferente = totalRaised !== GOAL;
console.log("¿Es diferente?:", diferente);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// condición con AND
const bono = totalRaised > 200_000 && PEOPLE >= 5;
console.log("¿Aplica bono?:", bono);

// condición con OR
const popular = totalRaised > 300_000 || PEOPLE > 10;
console.log("¿Campaña popular?:", popular);

// negación
const noMeta = !metaAlcanzada;
console.log("¿No ha llegado a la meta?:", noMeta);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Campaña:", CAMPAIGN_NAME);
console.log("Meta:", GOAL);
console.log("Recaudado:", totalRaised);
console.log("Faltante:", GOAL - totalRaised);

console.log("");