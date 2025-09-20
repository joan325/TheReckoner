
import fs from "node:fs";
import path from "node:path";

export type PrintEdition = {
    volume: number;
    number: number;
    file: string;
    url: string;
};

export function getPrintEditions(): Record<number, PrintEdition[]> {
    const dir = path.resolve("./public/print-editions");
    const files = fs.readdirSync(dir);

    const editions: PrintEdition[] = files
        .filter((f) => /^v\d+n\d+\.pdf$/i.test(f))
        .map((file) => {
            const match = file.match(/^v(\d+)n(\d+)\.pdf$/i);
            if (!match) return null;
            const [, v, n] = match;
            return {
                volume: parseInt(v, 10),
                number: parseInt(n, 10),
                file,
                url: `/print-editions/${file}`,
            };
        })
        .filter(Boolean) as PrintEdition[];

    const grouped: Record<number, PrintEdition[]> = {};
    for (const edition of editions) {
        if (!grouped[edition.volume]) grouped[edition.volume] = [];
        grouped[edition.volume].push(edition);
    }

    for (const v in grouped) {
        grouped[v].sort((a, b) => a.number - b.number);
    }

    return grouped;
}