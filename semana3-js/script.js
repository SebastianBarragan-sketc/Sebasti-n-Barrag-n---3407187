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

const CAMPAIGN_NAME = "App Educativa";
const GOAL = 1_000_000; 
const CONTRIBUTION = 50_000; 
const PEOPLE = 6; 


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================

console.log("=== Operaciones básicas ===");


const totalRaised = CONTRIBUTION * PEOPLE;
console.log("Total recaudado:", totalRaised);


const remaining = GOAL - totalRaised;
console.log("Dinero faltante:", remaining);


const average = totalRaised / PEOPLE;
console.log("Promedio por persona:", average);


const residue = GOAL % 3;
console.log("Residuo:", residue);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");


let acumulado = 0;


acumulado += 50_000;
console.log("Después del primer aporte:", acumulado);


acumulado += 30_000;
console.log("Después del segundo aporte:", acumulado);


acumulado *= 0.9;
console.log("Después de comisión:", acumulado);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");


const metaAlcanzada = totalRaised >= GOAL;
console.log("¿Meta alcanzada?:", metaAlcanzada);


const exacto = totalRaised === GOAL;
console.log("¿Igual a la meta?:", exacto);


const diferente = totalRaised !== GOAL;
console.log("¿Es diferente?:", diferente);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");


const bono = totalRaised > 200_000 && PEOPLE >= 5;
console.log("¿Aplica bono?:", bono);


const popular = totalRaised > 300_000 || PEOPLE > 10;
console.log("¿Campaña popular?:", popular);


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