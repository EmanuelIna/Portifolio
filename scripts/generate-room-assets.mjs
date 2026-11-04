import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const output = join(process.cwd(), "public", "projects");
mkdirSync(output, { recursive: true });
const palettes = [
  {
    wall: "#b0ad99",
    wood: "#877250",
    dark: "#514c39",
    label: "COZINHA INTEGRADA",
  },
  {
    wall: "#8a8c79",
    wood: "#6e654a",
    dark: "#414936",
    label: "LIVING SOB MEDIDA",
  },
  {
    wall: "#a39a83",
    wood: "#776445",
    dark: "#50442e",
    label: "CLOSET FUNCIONAL",
  },
];
palettes.forEach((color, index) => {
  const scene =
    index === 0
      ? `<rect x="35" y="20" width="152" height="240" fill="#d2d3b9"/><path d="M110 20v240M35 140h152" stroke="#626d56" stroke-width="8"/><rect x="241" y="55" width="330" height="100" fill="${color.wood}"/><path d="M322 55v100m85-100v100m85-100v100" stroke="${color.dark}"/><rect x="180" y="220" width="400" height="142" fill="${color.wood}"/><rect x="171" y="211" width="420" height="13" fill="#d9d3b8"/><path d="M280 226v132m100-132v132m100-132v132" stroke="${color.dark}"/><path d="M401 211v-27q0-20 18-20h15v12h-14v35" stroke="#4c5142" fill="none" stroke-width="5"/><ellipse cx="298" cy="206" rx="24" ry="6" fill="#4c5142"/><path d="M284 206v-30h28v30" fill="#747f5c"/>`
      : index === 1
        ? `<rect x="99" y="49" width="445" height="200" fill="${color.wood}"/><path d="M112 49v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200m13-200v200" stroke="${color.dark}" opacity=".7"/><rect x="192" y="88" width="260" height="139" fill="#292f25" stroke="#414a36" stroke-width="4"/><rect x="74" y="266" width="502" height="67" fill="${color.wood}"/><path d="M243 266v67m164-67v67" stroke="${color.dark}"/><rect x="84" y="330" width="12" height="20" fill="${color.dark}"/><rect x="553" y="330" width="12" height="20" fill="${color.dark}"/><ellipse cx="550" cy="263" rx="20" ry="8" fill="#646d51"/><path d="M550 263v-58" stroke="#434e34" stroke-width="4"/><path d="M550 227q-43-48-11-45q30 5 11 45m0-12q44-36 38-9q-6 24-38 9" fill="#4e6140"/>`
        : `<rect x="66" y="34" width="510" height="331" fill="${color.wood}"/><rect x="83" y="51" width="151" height="295" fill="${color.dark}"/><rect x="244" y="51" width="151" height="295" fill="${color.dark}"/><rect x="405" y="51" width="154" height="295" fill="${color.dark}"/><g stroke="#a48c63" stroke-width="6"><path d="M83 118h151m10 104h151m10-104h154m-154 75h154m-154 75h154m-154 49h154"/></g><path d="M99 147h119m43-72h116" stroke="#b5ae91" stroke-width="4"/><g fill="#9a9e85"><path d="m116 158 18 13 16-13 13 12-8 93h-49l-4-93z"/><path d="m159 158 18 13 16-13 13 12-8 93h-31l-8-93z" fill="#b5ac91"/><path d="m270 87 18 13 16-13 13 12-8 93h-49l-4-93z" fill="#979b7c"/></g><g fill="#b9aa86"><rect x="421" y="91" width="120" height="19"/><rect x="421" y="165" width="120" height="19"/><rect x="421" y="240" width="120" height="19"/></g><path d="M252 250h135m-135 46h135" stroke="#b59a6c" stroke-width="2"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><defs><linearGradient id="shade" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".13"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient></defs><path fill="${color.wall}" d="M0 0h640v420H0z"/><path fill="#86816b" d="M0 290h640v130H0z"/><path d="M0 328h640M0 373h640M80 290l-45 130m153-130-15 130m145-130 15 130m125-130 45 130" stroke="#79755f" stroke-width="1"/>${scene}<path fill="url(#shade)" d="M0 0h640v420H0z"/><path fill="#171c13" d="M0 384h640v36H0z"/><text x="20" y="406" fill="#afb99f" font-family="monospace" font-size="8" letter-spacing="1.5">${color.label} / ILUSTRAÇÃO CONCEITUAL</text></svg>`;
  writeFileSync(join(output, `room-${index}.svg`), svg);
});
