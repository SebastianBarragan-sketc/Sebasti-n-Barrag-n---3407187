// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// DOMINIO: Crowdfunding (Campañas)
// ============================================

const DOMAIN_NAME = "Campañas de Crowdfunding";
const VALUE_LABEL = "campañas";


// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "App educativa", category: "educación", value: 500000, active: true, creator: "Juan", location: "Colombia" },
  { id: 2, name: "Startup tecnológica", category: "tecnología", value: 1200000, active: true, creator: "Ana", location: "México" },
  { id: 3, name: "Proyecto social", category: "social", value: 300000, active: false, creator: "Carlos", location: "Perú" },
  { id: 4, name: "Curso online", category: "educación", value: 700000, active: true, creator: "Laura", location: "Chile" },
  { id: 5, name: "Innovación ambiental", category: "ambiental", value: 400000, active: true, creator: "Pedro", location: "Argentina" }
];


// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — $${item.value} — ${item.active ? "Activa" : "Inactiva"}`;
};


// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`Inventario inicial (${items.length} ${VALUE_LABEL}):`);

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar campaña

addItem({
  id: 6,
  name: "Plataforma educativa",
  category: "educación",
  value: 600000,
  active: true,
  creator: "Sofia",
  location: "Colombia"
});

// Prioritario

addPriorityItem({
  id: 0,
  name: "Campaña urgente",
  category: "social",
  value: 200000,
  active: true,
  creator: "ONG",
  location: "Global"
});

// Eliminar del medio

removeByIndex(2);

// Eliminar último

removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

const found = findByName("App educativa");
console.log("Búsqueda:", found ? formatItem(found) : "No encontrado");

const activeItems = getActiveItems();
console.log(`Campañas activas: ${activeItems.length}`);

// Snapshot (copia)

const snapshot = [...items, { id: 99, name: "Extra", category: "test", value: 0, active: false }];
console.log("Snapshot creado con:", snapshot.length, "elementos");

console.log("\n--- Transformación con map ---\n");

// Solo nombres

const names = items.map(item => item.name);
console.log("Nombres:", names);

// Valores con “incremento”

const increasedValues = items.map(item => item.value * 1.1);
console.log("Recaudación con aumento:", increasedValues);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("Reporte completado");
console.log(`${"=".repeat(50)}\n`);