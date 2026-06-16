const XLSX = require("xlsx");

function durationToMinutes(duration) {
  if (!duration) return 0;

  const text = String(duration).trim();
  let minutes = 0;

  const hoursMatch = text.match(/(\d+)\s*h/);
  const minutesMatch = text.match(/(\d+)\s*min/);

  if (hoursMatch) minutes += parseInt(hoursMatch[1], 10) * 60;
  if (minutesMatch) minutes += parseInt(minutesMatch[1], 10);

  return minutes;
}

function extractDriverName(sheetName) {
  return sheetName
    .replace("Temps de travail_", "")
    .replaceAll("-", " ")
    .trim();
}

function parseWebfleetFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

  const totals = {
    conduiteMinutes: 0,
    travailMinutes: 0,
    reposMinutes: 0,
    disponibiliteMinutes: 0,
    totalMinutes: 0,
  };

  for (const row of rows) {
    const activity = row["Activité"];
    const minutes = durationToMinutes(row["Durée"]);

    totals.totalMinutes += minutes;

    if (activity === "Conduite") totals.conduiteMinutes += minutes;
    if (activity === "Travail") totals.travailMinutes += minutes;
    if (activity === "Repos") totals.reposMinutes += minutes;
    if (activity === "Disponibilité") totals.disponibiliteMinutes += minutes;
  }

  return {
    sheetName,
    driverName: extractDriverName(sheetName),
    totalRows: rows.length,
    totals: {
      conduiteHeures: +(totals.conduiteMinutes / 60).toFixed(2),
      travailHeures: +(totals.travailMinutes / 60).toFixed(2),
      heuresTravaillees: +(
        (totals.conduiteMinutes + totals.travailMinutes) / 60
      ).toFixed(2),
      reposHeures: +(totals.reposMinutes / 60).toFixed(2),
      disponibiliteHeures: +(totals.disponibiliteMinutes / 60).toFixed(2),
      totalHeures: +(totals.totalMinutes / 60).toFixed(2),
    },
    preview: rows.slice(0, 5),
  };
}

module.exports = {
  parseWebfleetFile,
};