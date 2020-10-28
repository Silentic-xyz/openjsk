import { readFileSync } from 'fs';
import { join } from 'path';

export function version() {
    const data = readFileSync(join(__dirname, 'VERSION'), 'utf-8').split('\n');

    return {
        major: parseInt(data[0]),
        minor: parseInt(data[1]),
        review: parseInt(data[2]),
        build: parseInt(data[3]),
    }
}

