#!/usr/bin/env node

import { promises as fs } from 'fs';
import matter from 'gray-matter';
import pLimit from 'p-limit';
import readline from 'readline';

async function extractYamlFrontMatter(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        const parsed = matter(content);
        return { success: true, data: parsed.data };
    } catch (error) {
        return { success: false, error: `Error reading file ${filePath}: ${error}` };
    }
}

async function main(filePaths) {
    const limit = pLimit(5); // Adjust the concurrency limit as needed
    const allFrontMatter = [];
    const errors = [];

    const tasks = filePaths.map(filePath => 
        limit(async () => {
            const result = await extractYamlFrontMatter(filePath);
            if (result.success) {
                allFrontMatter.push(result.data);
            } else {
                errors.push(result.error);
            }
        })
    );

    await Promise.all(tasks);

    if (errors.length > 0) {
        console.error(JSON.stringify({ success: false, errors }));
    } else {
        console.log(JSON.stringify({ success: true, data: allFrontMatter }));
    }
}

function readFilePathsFromStdin() {
    return new Promise((resolve, reject) => {
        const filePaths = [];
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        rl.on('line', (line) => {
            if (line.trim()) {
                filePaths.push(line.trim());
            }
        });

        rl.on('close', () => resolve(filePaths));
        rl.on('error', (err) => reject(err));
    });
}

const args = process.argv.slice(2);
if (args.length === 0) {
    // Read file paths from stdin if no arguments are provided
    readFilePathsFromStdin().then(main).catch(err => {
        console.error(JSON.stringify({ success: false, error: `Failed to read input: ${err.message}` }));
        process.exit(1);
    });
} else {
    main(args);
}