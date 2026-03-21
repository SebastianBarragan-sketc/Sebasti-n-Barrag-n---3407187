// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
// DOMINIO: Campañas de Crowdfunding
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DOMAIN_NAME = "Plataforma de Crowdfunding";

const rawEntityName = "  campaña tecnológica educativa  ";

const entityCategory = "Educación — innovación";

const entityCode = "CMP-305";

const entityDescription = "Campaña de crowdfunding para desarrollar una plataforma de financiacion de proyectos digital.";

const mainValue = 500000;

const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = rawEntityName.trim();

const entityNameUpper = entityName.toUpperCase();

const entityNameLower = entityName.toLowerCase();

const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix = entityCode.startsWith(codePrefix);

const descriptionIsRelevant = entityDescription.includes("crowdfunding");

const hasValidSuffix = entityCode.endsWith("305");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE CAMPAÑA
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Recaudado:   ${mainValue}
Estado:      ${isActive ? "Activa" : "Inactiva"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'crowdfunding'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '305'?: ${hasValidSuffix}`);

console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `Nueva campaña disponible: ${entityName} (${entityCode})`;

console.log(notification);
console.log("");