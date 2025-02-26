export interface UnitDetail {
    displayName: string;
    purpose: string;
    siEquivalent?: string;
}

/**
 * Base unit details for those units we want to define manually.
 * You can add entries for non‐SI units (like "inch", "foot", etc.) here as well.
 */
const baseUnitDetails: { [unitId: string]: UnitDetail } = {
    // Length
    "meter": { displayName: "Meter", purpose: "Unit of length", siEquivalent: "1 m" },
    "inch": { displayName: "Inch", purpose: "Unit of length", siEquivalent: "1 in = 0.0254 m" },
    "foot": { displayName: "Foot", purpose: "Unit of length", siEquivalent: "1 ft = 0.3048 m" },
    "currency": { displayName: "Currency", purpose: "Medium of exchange\n\nNote: All currencies have the same value and cannot be converted" },
    // … other non–SI or non–prefixed units

    // SI base units (for which we want to allow metric prefixes)
    "gram": { displayName: "Gram", purpose: "Unit of mass", siEquivalent: "1 g = 0.001 kg" },
    "liter": { displayName: "Liter", purpose: "Unit of volume", siEquivalent: "1 L = 0.001 m³" },
    "second": { displayName: "Second", purpose: "Unit of time", siEquivalent: "1 s" },
    "hertz": { displayName: "Hertz", purpose: "Unit of frequency", siEquivalent: "1 Hz = 1 s⁻¹" },
    "ampere": { displayName: "Ampere", purpose: "Unit of electric current", siEquivalent: "1 A" },
    "mole": { displayName: "Mole", purpose: "Unit of amount of substance", siEquivalent: "1 mol" },
    "candela": { displayName: "Candela", purpose: "Unit of luminous intensity", siEquivalent: "1 cd" },
    "newton": { displayName: "Newton", purpose: "Unit of force", siEquivalent: "1 N = 1 kg·m/s²" },
    "joule": { displayName: "Joule", purpose: "Unit of energy", siEquivalent: "1 J = 1 N·m" },
    "watt": { displayName: "Watt", purpose: "Unit of power", siEquivalent: "1 W = 1 J/s" },
    "pascal": { displayName: "Pascal", purpose: "Unit of pressure", siEquivalent: "1 Pa = 1 N/m²" },
    "coulomb": { displayName: "Coulomb", purpose: "Unit of electric charge", siEquivalent: "1 C" },
    "volt": { displayName: "Volt", purpose: "Unit of electric potential", siEquivalent: "1 V" },
    "ohm": { displayName: "Ohm", purpose: "Unit of electrical resistance", siEquivalent: "1 Ω" },
    "farad": { displayName: "Farad", purpose: "Unit of capacitance", siEquivalent: "1 F" },
    "weber": { displayName: "Weber", purpose: "Unit of magnetic flux", siEquivalent: "1 Wb" },
    "tesla": { displayName: "Tesla", purpose: "Unit of magnetic flux density", siEquivalent: "1 T" },
    "henry": { displayName: "Henry", purpose: "Unit of inductance", siEquivalent: "1 H" },
    "siemens": { displayName: "Siemens", purpose: "Unit of electrical conductance", siEquivalent: "1 S" },
};

/**
 * Metric prefixes (with both the factor and a display version)
 * These are only applied to a whitelist of base units (e.g. "meter", "gram", etc.)
 */
const metricPrefixes: { [prefix: string]: { factor: number; display: string } } = {
    "deca": { factor: 1e1, display: "Deca" },
    "hecto": { factor: 1e2, display: "Hecto" },
    "kilo": { factor: 1e3, display: "Kilo" },
    "mega": { factor: 1e6, display: "Mega" },
    "giga": { factor: 1e9, display: "Giga" },
    "tera": { factor: 1e12, display: "Tera" },
    "peta": { factor: 1e15, display: "Peta" },
    "exa": { factor: 1e18, display: "Exa" },
    "zetta": { factor: 1e21, display: "Zetta" },
    "yotta": { factor: 1e24, display: "Yotta" },
    "ronna": { factor: 1e27, display: "Ronna" },
    "quetta": { factor: 1e30, display: "Quetta" },
    "deci": { factor: 1e-1, display: "Deci" },
    "centi": { factor: 1e-2, display: "Centi" },
    "milli": { factor: 1e-3, display: "Milli" },
    "micro": { factor: 1e-6, display: "Micro" },
    "nano": { factor: 1e-9, display: "Nano" },
    "pico": { factor: 1e-12, display: "Pico" },
    "femto": { factor: 1e-15, display: "Femto" },
    "atto": { factor: 1e-18, display: "Atto" },
    "zepto": { factor: 1e-21, display: "Zepto" },
    "yocto": { factor: 1e-24, display: "Yocto" },
    "ronto": { factor: 1e-27, display: "Ronto" },
    "quecto": { factor: 1e-30, display: "Quecto" },
};

/**
 * List of base units (from the above) that support metric prefixes.
 * This ensures that a unit like "kiloinch" is not generated.
 */
const metricPrefixableUnits = [
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
];

/**
 * Our final map of unit details.
 * We start by copying all the base units…
 */
const UNIT_DETAILS: { [unitId: string]: UnitDetail } = { ...baseUnitDetails };

/**
 * …and then add automatically generated entries for prefixed SI units.
 * For example, from "meter" we generate "centimeter", "kilometer", etc.
 */
for (const baseUnit of metricPrefixableUnits) {
    // Skip if we don’t have a base detail (for instance, if you haven’t defined one for "meter")
    const baseDetail = baseUnitDetails[baseUnit];
    if (!baseDetail) continue;

    for (const [prefix, { factor, display }] of Object.entries(metricPrefixes)) {
        // The canonical id for the prefixed unit is the concatenation of the prefix name and the base unit,
        // all in lowercase. E.g., "centimeter"
        const prefixedId = (prefix + baseUnit).toLowerCase();

        // Build a display name, e.g. "Centimeter"
        const displayName = display + " " + baseDetail.displayName;

        const siEquivalent = getSiEquivalantDescription(baseDetail.siEquivalent, prefixedId, baseUnit, factor);

        UNIT_DETAILS[prefixedId] = {
            displayName,
            purpose: baseDetail.purpose,
            siEquivalent,
        };
    }
}

function getSiEquivalantDescription(siEquivalent: string | undefined, prefixedId: string, baseUnit: string, factor: number): string | undefined {
    if (!siEquivalent) {
        return undefined;
    }

    const baseSiSymbol = siEquivalent.split(" ")[1] || baseUnit;
    return `1 ${prefixedId} = ${factor} ${baseSiSymbol}`;
}

/**
 * Example: The "centimeter" entry will look like:
 * {
 *   displayName: "Centi Meter",
 *   purpose: "Unit of length",
 *   siEquivalent: "1 centimeter = 0.01 m"
 * }
 *
 * You can further adjust the displayName (e.g. to remove the space) or
 * format the siEquivalent string as needed.
 */

export default UNIT_DETAILS;
