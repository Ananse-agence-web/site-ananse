// Captures 1280×800 des sites du portfolio : node capture.mjs (Playwright requis)
import { chromium } from "playwright";
const sites = {
  "etat-des-lieux-offline": "https://etat-des-lieux.ananse.fr/",
  "quittance-tranquille-decouvrir": "https://quittance.ananse.fr/",
};
const navigateur = await chromium.launch();
const page = await navigateur.newPage({ viewport: { width: 1280, height: 800 } });
for (const [nom, url] of Object.entries(sites)) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `static/img/realisations/${nom}.jpg`, type: "jpeg", quality: 82 });
  console.log("ok", nom);
}
await navigateur.close();
