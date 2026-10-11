// =====================================================================
// DATOS COMPARTIDOS por menu.html y compra.html
// =====================================================================

// ---------- ALIMENTOS ----------
// clave: [nombre, kcal por 100 g/ml, proteína por 100 g/ml, fuente, sección del súper, unidad opcional]
// Fuente: "E" etiqueta del producto · "W" ficha web del producto · "G" valor genérico de tablas (fresco, sin etiqueta)
// Unidad: "ml" para líquidos, o [gramos por unidad, singular, plural] para lo que se compra por unidades.
// Para corregir un valor, cambia solo su línea: platos, totales y compra se recalculan.
const FOODS = {
  pechuga:     ["pechuga de pollo", 110, 23, "G", "Carne y pescado"],
  contramuslo: ["contramuslo de pollo sin piel ni hueso", 120, 19.5, "G", "Carne y pescado"],
  tirasPollo:  ["tiras de pechuga de pollo Hacendado", 107, 23.4, "E", "Carne y pescado", [140, "paquete", "paquetes"]],
  cabecero:    ["cabecero de lomo", 200, 18, "G", "Carne y pescado"],
  chuleta:     ["chuleta de aguja de cerdo (sin hueso)", 215, 17, "G", "Carne y pescado"],
  carne:       ["carne picada de vacuno 99%", 204, 19, "E", "Carne y pescado"],
  jamon:       ["jamón serrano", 247.8, 33.5, "E", "Carne y pescado"],
  salmon:      ["salmón", 200, 20, "G", "Carne y pescado"],
  bacalao:     ["bacalao", 80, 18, "G", "Carne y pescado"],
  huevo:       ["huevos", 141, 12.7, "E", "Huevos y lácteos", [55, "huevo", "huevos"]],
  claras:      ["claras de huevo", 42, 11, "E", "Huevos y lácteos", "ml"],
  cottage:     ["cottage", 93, 13, "E", "Huevos y lácteos"],
  yogur:       ["yogur +Proteínas natural", 52, 10, "E", "Huevos y lácteos", [120, "unidad", "unidades"]],
  quesoUntar:  ["queso para untar light", 130, 9, "E", "Huevos y lácteos"],
  mozzarella:  ["mozzarella rallada", 283, 21, "W", "Huevos y lácteos"],
  lecheProt:   ["leche desnatada con proteínas", 53, 6.4, "W", "Huevos y lácteos", "ml"],
  leche:       ["leche desnatada", 35, 3.2, "W", "Huevos y lácteos", "ml"],
  lecheSemi:   ["leche semidesnatada", 46, 3.2, "G", "Huevos y lácteos", "ml"],
  aguacate:    ["aguacate", 160, 2, "G", "Fruta y verdura"],
  platano:     ["plátanos", 89, 1.1, "G", "Fruta y verdura", [120, "plátano", "plátanos"]],
  uvas:        ["uvas rojas", 69, 0.7, "G", "Fruta y verdura"],
  pan:         ["pan integral de espelta", 240, 12, "E", "Despensa", [34, "rebanada", "rebanadas"]],
  gnocchi:     ["gnocchi", 174, 4.5, "E", "Despensa"],
  pastaLent:   ["pasta de lentejas rojas (en seco)", 334, 26, "E", "Despensa"],
  arrozSeco:   ["arroz (en seco)", 350, 7, "G", "Despensa"],
  arroz:       ["arroz redondo en vasito", 126, 2.7, "W", "Despensa", [125, "vasito", "vasitos"]],
  tomate:      ["tomate frito", 77, 1.5, "E", "Despensa"],
  patata:      ["patata cocida (tarro)", 53, 1.2, "E", "Despensa"],
  atun:        ["atún claro al natural", 100, 23, "W", "Despensa", [60, "lata", "latas"]],
  tortilla:    ["tortillas 100% integrales", 269, 9.3, "W", "Despensa", [36, "tortilla", "tortillas"]],
  wasa:        ["Wasa con avena", 370, 12.2, "E", "Despensa", [17.5, "lámina", "láminas"]],
  nueces:      ["nueces", 716, 17, "W", "Despensa"],
  azucarCoco:  ["azúcar de coco", 380, 0, "G", "Despensa"],
  nesquik:     ["Nesquik", 380, 5, "G", "Despensa"],
  teriyaki:    ["salsa teriyaki", 188, 3.9, "E", "Despensa", "ml"],
  aceite:      ["aceite de oliva", 900, 0, "G", "Despensa"],
  batata:      ["bastones de batata congelados", 163, 1.6, "E", "Congelados"],
  edamame:     ["edamame", 145, 12, "W", "Congelados"],
  guisantes:   ["guisantes congelados", 83, 6, "W", "Congelados"],
  verduras:    ["salteado de verduras", 31, 2, "W", "Congelados"],
  whey:        ["proteína Weider Isolate Whey", 370, 83.3, "W", "Suplementos"]
};
const SECTIONS = ["Carne y pescado", "Huevos y lácteos", "Fruta y verdura", "Despensa", "Congelados", "Suplementos"];

// ---------- PLATOS ----------
// n: nombre · t: tipo ("d" desayuno, "p" comida o cena, "m" merienda, "c" cafés) · g: grupo en el selector
// i: ingredientes [alimento, gramos, texto de cantidad (si no son gramos), nombre a mostrar (si cambia)]
//    con alimento null no se cuenta (verdura libre o una línea de texto)
// note: nota opcional · fixed: total fijo [kcal, proteína], o "libre" si no se cuenta
const VERDURA = [null, 0, "Libre", "verdura o ensalada"];
const DISHES = {
  // Desayunos
  tostadas:    { n: "Tostadas con jamón y cottage", t: "d", i: [["pan", 68, null, "pan de espelta (2 rebanadas)"], ["jamon", 60], ["cottage", 100]] },
  revuelto:    { n: "Revuelto de huevos y claras", t: "d", i: [["huevo", 110, "2", "huevos"], ["claras", 150, "150 ml"], ["jamon", 40], ["pan", 34, null, "pan de espelta (1 rebanada)"]] },
  yogur:       { n: "Yogur con azúcar de coco", t: "d", i: [["yogur", 240, null, "yogur +Proteínas natural (2 unidades)"], ["azucarCoco", 10, null, "azúcar de coco (2 cucharaditas)"], ["nueces", 20], ["uvas", 100]], note: "Fácil de llevar a la oficina. En vez de uvas: 1 manzana." },
  tostAguacate:{ n: "Tostadas con jamón y aguacate", t: "d", i: [["pan", 68, null, "pan de espelta (2 rebanadas)"], ["jamon", 40], ["aguacate", 40], ["lecheSemi", 200, "200 ml"], ["nesquik", 10, null, "Nesquik (2 cucharaditas)"]] },
  tostHuevo:   { n: "Tostadas con aguacate y huevo", t: "d", i: [["pan", 68, null, "pan de espelta (2 rebanadas)"], ["aguacate", 60], ["huevo", 55, "1", "huevo"], ["lecheSemi", 200, "200 ml"], ["nesquik", 10, null, "Nesquik (2 cucharaditas)"]] },

  // Meriendas
  batido:      { n: "Batido de proteína y fruta", t: "m", i: [["whey", 30, null, "proteína Weider Isolate (1 cazo), con agua"], ["platano", 120, "1", "plátano"]], note: "Antes de entrenar. En vez de plátano: 1 manzana grande o 150 g de uvas rojas." },
  yogurFruta:  { n: "Yogur +Proteínas con plátano", t: "m", i: [["yogur", 240, null, "yogur +Proteínas natural (2 unidades)"], ["platano", 120, "1", "plátano"]], note: "Alternativa sin proteína en polvo." },

  // Comidas y cenas · Pollo
  teriyaki:    { n: "Pollo teriyaki con gnocchi", t: "p", g: "Pollo", i: [["pechuga", 180], ["gnocchi", 150], ["teriyaki", 20, "20 ml"], ["verduras", 200]] },
  polloArroz:  { n: "Pechuga con arroz y verduras", t: "p", g: "Pollo", i: [["pechuga", 150], ["arrozSeco", 60], ["verduras", 150], ["aceite", 5]] },
  gnocchiPollo:{ n: "Gnocchi con filete de pollo", t: "p", g: "Pollo", i: [["pechuga", 150], ["gnocchi", 150], ["aceite", 5], VERDURA] },
  ensalada:    { n: "Ensalada completa de pollo", t: "p", g: "Pollo", i: [["pechuga", 150, null, "pechuga de pollo a la plancha (peso en crudo)"], ["patata", 200], ["huevo", 55, "1", "huevo duro"], ["aceite", 10], [null, 0, "Libre", "lechuga, tomate y la verdura que quieras"]] },
  quesadilla:  { n: "Quesadilla de pollo", t: "p", g: "Pollo", i: [["pechuga", 140], ["tortilla", 72, "2", "tortillas integrales (72 g)"], ["mozzarella", 30]] },
  poke:        { n: "Poke de pollo y edamame", t: "p", g: "Pollo", i: [["tirasPollo", 140, null, "tiras de pechuga de pollo (1 paquete)"], ["edamame", 100], ["arroz", 125, null, "arroz redondo (1 vasito)"], [null, 0, "Al gusto", "salsa de soja"]] },

  // Comidas y cenas · Ternera
  bolonesa:    { n: "Boloñesa con pasta de lentejas", t: "p", g: "Ternera", i: [["carne", 130], ["pastaLent", 70], ["tomate", 100], [null, 0, "Libre", "zanahoria rallada"]] },
  bolonesaPeq: { n: "Boloñesa, ración pequeña", t: "p", g: "Ternera", i: [["carne", 110], ["pastaLent", 60], ["tomate", 100], [null, 0, "Libre", "zanahoria rallada"]] },
  carneBatata: { n: "Carne picada con batata", t: "p", g: "Ternera", i: [["carne", 120], ["batata", 100], ["cottage", 80], ["aguacate", 50]] },

  // Comidas y cenas · Pescado
  salmon:      { n: "Salmón con batata", t: "p", g: "Pescado", i: [["salmon", 150], ["batata", 150, null, "bastones de batata congelados (air fryer)"], VERDURA] },
  bacalao:     { n: "Bacalao con patata y guisantes", t: "p", g: "Pescado", i: [["bacalao", 200, null, "bacalao al horno"], ["patata", 300], ["guisantes", 100], ["aceite", 10]] },

  // Comidas y cenas · Huevos
  revAtun:     { n: "Revuelto de atún", t: "p", g: "Huevos", i: [["huevo", 110, "2", "huevos"], ["claras", 100, "100 ml"], ["atun", 60, "1 lata", "atún al natural (60 g escurrido)"], ["pan", 34, null, "pan de espelta (1 rebanada)"], ["aguacate", 75]] },
  revJamon:    { n: "Revuelto con jamón", t: "p", g: "Huevos", i: [["huevo", 55, "1", "huevo"], ["claras", 150, "150 ml"], ["jamon", 50], ["cottage", 100], [null, 0, "Libre", "zanahoria cruda"]], note: "Cena ligera." },
  guisJamon:   { n: "Guisantes con jamón y huevo", t: "p", g: "Huevos", i: [["guisantes", 200], ["jamon", 50], ["huevo", 55, "1", "huevo"], ["aceite", 5]] },
  wasa:        { n: "Huevos con Wasa y aguacate", t: "p", g: "Huevos", i: [["huevo", 110, "2", "huevos"], ["wasa", 35, "2", "Wasa con avena"], ["quesoUntar", 30], ["aguacate", 75], ["yogur", 120, "1", "yogur +Proteínas"]] },

  // Comidas y cenas · Fuera de casa
  restaurante: { n: "Restaurante", t: "p", g: "Fuera de casa", i: [[null, 0, "", "Carne o pescado a la plancha o al horno"], [null, 0, "", "Su guarnición"], [null, 0, "", "Sin repetir pan"], [null, 0, "", "Sin postre, o compartido"]], note: "Calorías y proteína estimadas: no se pueden calcular.", fixed: [750, 40] },
  libre:       { n: "Comida libre", t: "p", g: "Fuera de casa", i: [[null, 0, "", "Lo que quieras, sin pesar"], [null, 0, "", "Una sola comida"]], note: "No se cuenta en el total del día.", fixed: "libre" },

  // Cafés
  cafeProt:    { n: "Cafés con leche con proteínas", t: "c", i: [["lecheProt", 300, "300 ml", "leche con proteínas (3 cafés de 100 ml)"]], note: "Un cuarto café suma unas 53 kcal y 6 g de proteína." },
  cafeNormal:  { n: "Cafés con leche desnatada", t: "c", i: [["leche", 300, "300 ml", "leche desnatada (3 cafés de 100 ml)"]], note: "Un cuarto café suma unas 35 kcal y 3 g de proteína." },
  sinCafe:     { n: "Sin cafés con leche", t: "c", i: [[null, 0, "", "Café solo, o ninguno"]], fixed: [0, 0] }
};

// Combinaciones de carne + acompañamiento: cada pareja genera un plato.
// Para añadir una carne o un acompañamiento nuevo, añade una línea aquí.
const COMBO_PROTEINS = [
  ["contramuslo", "Contramuslo de pollo", 180, "Pollo"],
  ["cabecero", "Cabecero de lomo", 130, "Cerdo"],
  ["chuleta", "Chuleta de aguja", 130, "Cerdo"]
];
const COMBO_SIDES = [
  ["Arroz", "con arroz", [["arroz", 125, null, "arroz redondo (1 vasito)"]]],
  ["Batata", "con batata", [["batata", 150, null, "bastones de batata congelados (air fryer)"]]],
  ["Gnocchi", "con gnocchi", [["gnocchi", 150, null, "gnocchi (air fryer)"]]],
  ["Guisantes", "con patata y guisantes", [["patata", 200], ["guisantes", 100]]]
];
COMBO_PROTEINS.forEach(p => COMBO_SIDES.forEach(s => {
  DISHES[p[0] + s[0]] = { n: p[1] + " " + s[1], t: "p", g: p[3], i: [[p[0], p[2], null, FOODS[p[0]][0] + " (peso en crudo)"]].concat(s[2], [["aceite", 5], VERDURA]) };
}));

const TYPE_NAMES = { d: "Desayunos", p: "Comidas y cenas", m: "Meriendas", c: "Cafés" };
const GROUPS = ["Pollo", "Cerdo", "Ternera", "Pescado", "Huevos", "Fuera de casa"];
const SLOT_COLORS = ["#ffd60a", "#a6ff00", "#00d7ff", "#bf5af2", "#ff9f0a"];
const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const TABS = ["L", "M", "X", "J", "V", "S", "D"];
const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// ---------- PERSONAS ----------
// slots: los momentos del día [nombre, hora, tipo de plato] · base: el menú de partida de cada semana (lunes a domingo)
const PEOPLE = {
  alba: {
    name: "Alba", kcalGoal: 1800, protGoal: 130,
    slots: [["Desayuno", "10:00", "d"], ["Comida", "14:30", "p"], ["Merienda", "17:00", "m"], ["Cena", "21:00", "p"], ["Cafés", "todo el día", "c"]],
    base: [
      ["tostadas", "bolonesa", "batido", "revAtun", "cafeProt"],
      ["yogur", "bolonesa", "batido", "quesadilla", "cafeNormal"],
      ["revuelto", "teriyaki", "batido", "carneBatata", "cafeProt"],
      ["yogur", "teriyaki", "batido", "poke", "cafeNormal"],
      ["tostadas", "restaurante", "batido", "revJamon", "cafeProt"],
      ["revuelto", "salmon", "batido", "libre", "cafeProt"],
      ["tostadas", "bacalao", "batido", "wasa", "cafeProt"]
    ]
  },
  raquel: {
    name: "Raquel", kcalGoal: 1650, protGoal: 110,
    slots: [["Desayuno", "7:15", "d"], ["Comida", "14:00", "p"], ["Merienda", "18:15", "m"], ["Cena", "21:00", "p"]],
    base: [
      ["tostAguacate", "polloArroz", "batido", "revAtun"],
      ["tostAguacate", "polloArroz", "batido", "quesadilla"],
      ["tostAguacate", "polloArroz", "batido", "carneBatata"],
      ["tostAguacate", "bolonesaPeq", "batido", "poke"],
      ["tostAguacate", "bolonesaPeq", "batido", "revJamon"],
      ["tostAguacate", "gnocchiPollo", "batido", "libre"],
      ["tostAguacate", "ensalada", "batido", "wasa"]
    ]
  }
};

// ---------- CÁLCULO ----------
function dishTotal(d) {                 // [kcal, proteína], o null si el plato no se cuenta
  if (d.fixed === "libre") return null;
  if (Array.isArray(d.fixed)) return d.fixed;
  let k = 0, p = 0;
  d.i.forEach(g => { if (g[0]) { k += FOODS[g[0]][1] * g[1] / 100; p += FOODS[g[0]][2] * g[1] / 100; } });
  return [Math.round(k), Math.round(p)];
}

// ---------- SEMANAS Y PLAN GUARDADO ----------
// El plan se guarda en este dispositivo. Una semana sin cambios muestra el menú base.
function mondayOf(offset) {
  const d = new Date(); d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7) + offset * 7);
  return d;
}
function weekKey(offset) {
  const d = mondayOf(offset), z = n => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
}
function weekLabel(offset) {
  const d = mondayOf(offset);
  return "Semana del " + d.getDate() + " de " + MONTHS[d.getMonth()];
}
let PLAN = {};
try { PLAN = JSON.parse(localStorage.getItem("plan-v1")) || {}; } catch (e) {}
function storedWeek(who, offset) {
  const base = PEOPLE[who].base, st = PLAN[who] && PLAN[who][weekKey(offset)];
  const ok = Array.isArray(st) && st.length === 7 && st.every((day, i) =>
    Array.isArray(day) && day.length === base[i].length && day.every((id, s) => DISHES[id] && DISHES[id].t === PEOPLE[who].slots[s][2]));
  return ok ? st : null;
}
function getWeek(who, offset) { return (storedWeek(who, offset) || PEOPLE[who].base).map(d => d.slice()); }
function setWeek(who, offset, days) {
  PLAN[who] = PLAN[who] || {};
  if (days === null) delete PLAN[who][weekKey(offset)]; else PLAN[who][weekKey(offset)] = days;
  try { localStorage.setItem("plan-v1", JSON.stringify(PLAN)); } catch (e) {}
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
