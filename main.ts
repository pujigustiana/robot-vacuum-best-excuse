import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I did not miss that spot. My map has redrawn the room without it, and I respect the map more than I respect dirt.", "utf8");
