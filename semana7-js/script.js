// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Plataforma de Crowdfunding";
const VALUE_LABEL = "recaudación";
const CURRENCY = "COP";

const items = [
  { id: 1, name: "App educativa", category: "educación", value: 500000, active: true },
  { id: 2, name: "Startup tecnológica", category: "tecnología", value: 1200000, active: true },
  { id: 3, name: "Proyecto social", category: "social", value: 300000, active: false },
  { id: 4, name: "Curso online", category: "educación", value: 700000, active: true },
  { id: 5, name: "Innovación ambiental", category: "ambiental", value: 400000, active: true }
];


// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (campaign) => 
  `${campaign.name} [${campaign.category}] — ${CURRENCY} ${campaign.value}`;


// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateValue = (baseValue, factor = 1) => {
  return baseValue * factor;
};


// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (campaign) => campaign.active === true;


// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency} ${value}`;
};


// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n No hay campañas registradas.");
} else {

  //Listado
  console.log("\n Listado:");
  let lineNumber = 1;

  for (const campaign of items) {
    console.log(`  ${lineNumber}. ${formatItem(campaign)}`);
    lineNumber++;
  }

  //Validación
  let validCount = 0;

  for (const campaign of items) {
    if (isValid(campaign)) {
      validCount++;
    }
  }

  console.log(`\n Campañas activas: ${validCount} / ${items.length}`);

  //Cálculo total
  let totalValue = 0;

  for (const campaign of items) {
    totalValue += calculateValue(campaign.value ?? 0);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);