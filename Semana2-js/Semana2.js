// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// Dominio: Crowdfunding
// En este script se muestra una ficha con datos
// de una campaña usando variables y tipos de datos
//

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// nombre del dominio
const DOMAIN_NAME = "Crowdfunding";

// nombre de la campaña
const itemName = "Videojuego Indie";

// categoría de la campaña
const itemCategory = "Tecnología / Videojuegos";

// meta de dinero de la campaña
const itemQuantity = 5000;

// estado de la campaña
const isItemAvailable = true;

// valor que todavía no tiene asignación
const pendingValue = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre de campaña: ${itemName}`);
console.log(`Categoría: ${itemCategory}`);
console.log(`Meta de dinero: ${itemQuantity}`);
console.log(`Campaña activa: ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS
// ============================================

console.log("--- Tipos de datos ---");

// verificando tipo de las variables
console.log("typeof itemName:", typeof itemName);
console.log("typeof itemQuantity:", typeof itemQuantity);
console.log("typeof isItemAvailable:", typeof isItemAvailable);

console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES
// ============================================

console.log("--- Conversiones ---");

// convertir número a texto
const moneyAsText = String(itemQuantity);

console.log("Meta como texto:", moneyAsText);
console.log("tipo después de convertir:", typeof moneyAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================

console.log("--- Valor nulo ---");

// mostrando valor null
console.log("Valor pendiente:", pendingValue);

// tipo de null
console.log("typeof pendingValue:", typeof pendingValue);

// verificar si es null
console.log("¿Es null?:", pendingValue === null);

console.log("");


// ============================================
// CIERRE
// ============================================

console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");