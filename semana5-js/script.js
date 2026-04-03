// ============================================
// PROYECTO SEMANA 05: Clasificador
// DOMINIO: Crowdfunding (Campañas)
// ============================================


// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Campaña tecnológica educativa";  
const elementStatus = "active";  
const elementValue = 750000; 
const elementType = "education";  

const elementInfo = {
  creator: "Juan",
  location: "Colombia",
  detail: "Campaña para financiar una app educativa"
};


// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 1000000) {
  classification = "Campaña exitosa";
} else if (elementValue >= 500000) {
  classification = "Campaña en progreso";
} else {
  classification = "Campaña con bajo rendimiento";
}


// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activa" : "Inactiva";


// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "education":
    typeLabel = "Educativa";
    break;
  case "technology":
    typeLabel = "Tecnológica";
    break;
  case "social":
    typeLabel = "Social";
    break;
  default:
    typeLabel = "Tipo desconocido";
}


// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";

const infoDetail = elementInfo?.detail ?? "Sin información adicional";


// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.location ?? "Ubicación no especificada";


// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN DE CAMPAÑA");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ubicación: ${safeProperty}`);

console.log("=".repeat(40));