/**
 * A mapping from any allowed unit string (abbreviation or full name) to
 * a canonical unit id.
 *
 * For example:
 *   "m"          -> "meter"
 *   "meter"      -> "meter"
 *   "cm"         -> "centimeter"
 *   "centimeter" -> "centimeter"
 */

interface UnitEntry {
  id: string;
  // All names (abbreviations, aliases, full names) for this unit.
  names: string[];
}

const currencies = [
	"RUB",
	"AFN",
	"EUR",
	"ALL",
	"DZD",
	"AOA",
	"XCD",
	"ARS",
	"AMD",
	"AWG",
	"SHP",
	"AUD",
	"AZN",
	"BSD",
	"BHD",
	"BDT",
	"BBD",
	"BYN",
	"BZD",
	"XOF",
	"BMD",
	"BTN",
	"INR",
	"BOB",
	"USD",
	"BAM",
	"BWP",
	"BRL",
	"GBP",
	"BND",
	"SGD",
	"BGN",
	"BIF",
	"KHR",
	"XAF",
	"CAD",
	"CVE",
	"KYD",
	"CLP",
	"CNY",
	"COP",
	"KMF",
	"CDF",
	"NZD",
	"CRC",
	"CUP",
	"ANG",
	"CZK",
	"DKK",
	"DJF",
	"DOP",
	"EGP",
	"ERN",
	"SZL",
	"ZAR",
	"ETB",
	"FKP",
	"FJD",
	"XPF",
	"GMD",
	"GEL",
	"GHS",
	"GIP",
	"GTQ",
	"GNF",
	"GYD",
	"HTG",
	"HNL",
	"HKD",
	"HUF",
	"ISK",
	"IDR",
	"IRR",
	"IQD",
	"ILS",
	"JMD",
	"JPY",
	"JOD",
	"KZT",
	"KES",
	"KPW",
	"KRW",
	"KWD",
	"KGS",
	"LAK",
	"LBP",
	"LSL",
	"LRD",
	"LYD",
	"CHF",
	"MOP",
	"MGA",
	"MWK",
	"MYR",
	"MVR",
	"MRU",
	"MUR",
	"MXN",
	"MDL",
	"MNT",
	"MAD",
	"MZN",
	"MMK",
	"NAD",
	"NPR",
	"NIO",
	"NGN",
	"MKD",
	"TRY",
	"NOK",
	"OMR",
	"PKR",
	"PAB",
	"PGK",
	"PYG",
	"PEN",
	"PHP",
	"PLN",
	"QAR",
	"RON",
	"RWF",
	"WST",
	"STN",
	"SAR",
	"RSD",
	"SCR",
	"SLE",
	"SBD",
	"SOS",
	"SSP",
	"LKR",
	"SDG",
	"SRD",
	"SEK",
	"SYP",
	"TWD",
	"TJS",
	"TZS",
	"THB",
	"TOP",
	"TTD",
	"TND",
	"TMT",
	"UGX",
	"UAH",
	"AED",
	"UYU",
	"UZS",
	"VUV",
	"VES",
	"VED",
	"VND",
	"YER",
	"ZMW",
	"ZWG",
];

/**
 * List all “base” units as defined by Math.js.
 * (This list comes directly from the Math.js documentation.)
 */
const baseUnits: UnitEntry[] = [
  // Length
  { id: "meter", names: ["m", "meter"] },
  { id: "inch", names: ["in", "inch"] },
  { id: "foot", names: ["ft", "foot"] },
  { id: "yard", names: ["yd", "yard"] },
  { id: "mile", names: ["mi", "mile"] },
  { id: "link", names: ["li", "link"] },
  { id: "rod", names: ["rd", "rod"] },
  { id: "chain", names: ["ch", "chain"] },
  { id: "angstrom", names: ["angstrom"] },
  { id: "mil", names: ["mil"] },

  // Surface area
  { id: "square meter", names: ["m2"] },
  { id: "square inch", names: ["sqin"] },
  { id: "square foot", names: ["sqft"] },
  { id: "square yard", names: ["sqyd"] },
  { id: "square mile", names: ["sqmi"] },
  { id: "square rod", names: ["sqrd"] },
  { id: "square chain", names: ["sqch"] },
  { id: "square mil", names: ["sqmil"] },
  { id: "acre", names: ["acre"] },
  { id: "hectare", names: ["hectare"] },

  // Volume
  { id: "cubic meter", names: ["m3"] },
  { id: "liter", names: ["litre", "l", "L", "lt", "liter"] },
  { id: "cubic centimeter", names: ["cc"] },
  { id: "cubic inch", names: ["cuin"] },
  { id: "cubic foot", names: ["cuft"] },
  { id: "cubic yard", names: ["cuyd"] },
  { id: "teaspoon", names: ["teaspoon"] },
  { id: "tablespoon", names: ["tablespoon"] },

  // Liquid volume
  { id: "minim", names: ["minim"] },
  { id: "fluid dram", names: ["fluiddram", "fldr"] },
  { id: "fluid ounce", names: ["fluidounce", "floz"] },
  { id: "gill", names: ["gill", "gi"] },
  { id: "cup", names: ["cup", "cp"] },
  { id: "pint", names: ["pint", "pt"] },
  { id: "quart", names: ["quart", "qt"] },
  { id: "gallon", names: ["gallon", "gal"] },
  { id: "beer barrel", names: ["beerbarrel", "bbl"] },
  { id: "oil barrel", names: ["oilbarrel", "obl"] },
  { id: "hogshead", names: ["hogshead"] },
  { id: "drop", names: ["drop", "gtt"] },

  // Angles
  { id: "radian", names: ["rad", "radian"] },
  { id: "degree", names: ["deg", "degree"] },
  { id: "gradian", names: ["grad", "gradian"] },
  { id: "cycle", names: ["cycle"] },
  { id: "arcsecond", names: ["arcsec", "arcsecond"] },
  { id: "arcminute", names: ["arcmin", "arcminute"] },

  // Time
  { id: "second", names: ["s", "sec", "second", "secs", "seconds"] },
  { id: "minute", names: ["min", "minute", "mins", "minutes"] },
  { id: "hour", names: ["h", "hr", "hour", "hrs", "hours"] },
  { id: "day", names: ["day", "days"] },
  { id: "week", names: ["week", "weeks"] },
  { id: "month", names: ["month", "months"] },
  { id: "year", names: ["year", "years"] },
  { id: "decade", names: ["decade", "decades"] },
  { id: "century", names: ["century", "centuries"] },
  { id: "millennium", names: ["millennium", "millennia"] },

  // Frequency
  { id: "hertz", names: ["hertz", "Hz"] },

  // Mass
  { id: "gram", names: ["g", "gram"] },
  { id: "tonne", names: ["tonne"] },
  { id: "ton", names: ["ton"] },
  { id: "grain", names: ["gr", "grain"] },
  { id: "dram", names: ["dr", "dram"] },
  { id: "ounce", names: ["oz", "ounce"] },
  { id: "poundmass", names: ["lbm", "lb", "lbs"] },
  { id: "hundredweight", names: ["cwt", "hundredweight"] },
  { id: "stick", names: ["stick"] },
  { id: "stone", names: ["stone"] },

  // Electric current
  { id: "ampere", names: ["A", "ampere"] },

  // Temperature
  { id: "kelvin", names: ["K", "kelvin"] },
  { id: "celsius", names: ["degC", "celsius"] },
  { id: "fahrenheit", names: ["degF", "fahrenheit"] },
  { id: "rankine", names: ["degR", "rankine"] },

  // Amount of substance
  { id: "mole", names: ["mol", "mole"] },

  // Luminous intensity
  { id: "candela", names: ["cd", "candela"] },

  // Force
  { id: "newton", names: ["N", "newton"] },
  { id: "dyne", names: ["dyn", "dyne"] },
  { id: "poundforce", names: ["lbf", "poundforce"] },
  { id: "kip", names: ["kip"] },

  // Energy
  { id: "joule", names: ["J", "joule"] },
  { id: "erg", names: ["erg"] },
  { id: "Wh", names: ["Wh"] },
  { id: "BTU", names: ["BTU"] },
  { id: "electronvolt", names: ["eV", "electronvolt"] },

  // Power
  { id: "watt", names: ["W", "watt"] },
  { id: "horsepower", names: ["hp", "horsepower"] },

  // Pressure
  { id: "pascal", names: ["Pa", "pascal"] },
  { id: "psi", names: ["psi"] },
  { id: "atmosphere", names: ["atm", "atmosphere"] },
  { id: "torr", names: ["torr"] },
  { id: "bar", names: ["bar"] },
  { id: "mmHg", names: ["mmHg"] },
  { id: "mmH2O", names: ["mmH2O"] },
  { id: "cmH2O", names: ["cmH2O"] },

  // Electricity and magnetism
  { id: "coulomb", names: ["C", "coulomb"] },
  { id: "volt", names: ["V", "volt"] },
  { id: "ohm", names: ["ohm"] },
  { id: "farad", names: ["F", "farad"] },
  { id: "weber", names: ["Wb", "weber"] },
  { id: "tesla", names: ["T", "tesla"] },
  { id: "henry", names: ["H", "henry"] },
  { id: "siemens", names: ["S", "siemens"] },

  // Binary
  { id: "bit", names: ["b", "bits"] },
  { id: "byte", names: ["B", "bytes"] },

  // Currency
  { id: "currency", names: ["currency", ...currencies] },
];

const unitMap: Map<string, string> = new Map<string, string>();
for (const unit of baseUnits) {
  for (const name of unit.names) {
    unitMap.set(name, unit.id);
  }
}

/**
 * For many SI units (and those derived from SI base units) we want to allow
 * metric prefixes (e.g. "cm" for "centimeter"). Here we list those units
 * that support such prefixes.
 */
const metricPrefixableUnits = new Set([
  "meter",
  "gram",
  "liter",
  "second",
  "hertz",
  "ampere",
  "mole",
  "candela",
  "newton",
  "joule",
  "watt",
  "pascal",
  "coulomb",
  "volt",
  "ohm",
  "farad",
  "weber",
  "tesla",
  "henry",
  "siemens",
]);

interface Prefix {
  name: string;
  abbr: string;
}

/** All metric prefixes (both positive and negative powers). */
const metricPrefixes: Prefix[] = [
  { name: "deca", abbr: "da" },
  { name: "hecto", abbr: "h" },
  { name: "kilo", abbr: "k" },
  { name: "mega", abbr: "M" },
  { name: "giga", abbr: "G" },
  { name: "tera", abbr: "T" },
  { name: "peta", abbr: "P" },
  { name: "exa", abbr: "E" },
  { name: "zetta", abbr: "Z" },
  { name: "yotta", abbr: "Y" },
  { name: "ronna", abbr: "R" },
  { name: "quetta", abbr: "Q" },
  { name: "deci", abbr: "d" },
  { name: "centi", abbr: "c" },
  { name: "milli", abbr: "m" },
  { name: "micro", abbr: "u" },
  { name: "nano", abbr: "n" },
  { name: "pico", abbr: "p" },
  { name: "femto", abbr: "f" },
  { name: "atto", abbr: "a" },
  { name: "zepto", abbr: "z" },
  { name: "yocto", abbr: "y" },
  { name: "ronto", abbr: "r" },
  { name: "quecto", abbr: "q" },
];

/**
 * For each SI unit that allows metric prefixes, add entries to UNIT_MAP.
 * We assume that for a unit (say "meter") the first alias in its names array
 * is its short abbreviation (here, "m"). Then for every prefix we add, for example:
 *
 *    "c" + "m"        -> "centimeter"
 *    "centi" + "meter" -> "centimeter"
 */
for (const unit of baseUnits) {
  if (metricPrefixableUnits.has(unit.id)) {
    const baseAbbr = unit.names[0]; // e.g. "m" for "meter"
    for (const prefix of metricPrefixes) {
      const shortKey = (prefix.abbr + baseAbbr);
      const fullKey = (prefix.name + unit.id);

      unitMap.set(shortKey, fullKey);
      unitMap.set(fullKey, fullKey);
    }
  }
}

/**
 * For bits and bytes we also allow binary prefixes.
 */
const binaryPrefixableUnits = new Set(["bit", "byte"]);
const binaryPrefixes: Prefix[] = [
  { name: "kibi", abbr: "Ki" },
  { name: "mebi", abbr: "Mi" },
  { name: "gibi", abbr: "Gi" },
  { name: "tebi", abbr: "Ti" },
  { name: "pebi", abbr: "Pi" },
  { name: "exi", abbr: "Ei" },
  { name: "zebi", abbr: "Zi" },
  { name: "yobi", abbr: "Yi" },
];

for (const unit of baseUnits) {
  if (binaryPrefixableUnits.has(unit.id)) {
    const baseAbbr = unit.names[0]; // e.g. "b" for "bit" or "B" for "byte"
    for (const prefix of binaryPrefixes) {
      const shortKey = (prefix.abbr + baseAbbr);
      const canonical = (prefix.name + unit.id).toLowerCase();
      unitMap.set(shortKey, canonical);
      unitMap.set(canonical, canonical);
    }
  }
}

export { unitMap, currencies };