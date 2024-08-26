#!/usr/bin/env node

import chalk from 'chalk';
import {execa} from 'execa';
import fs from 'fs/promises';
import inquirer from 'inquirer';
import ora from 'ora';

const createAIAgent = async name => {
	const spinner = ora('Creating AI agent...').start();

	try {
		// Create project directory
		await fs.mkdir(name);
		process.chdir(name);

		// Initialize npm project
		await execa('pnpm', ['init']);

		// Install dependencies
		spinner.text = 'Installing dependencies...';
		await execa('pnpm', ['add', 'langbase', 'dotenv']);

		// Create main file
		const mainFileContent = `
import 'dotenv/config';
import { Pipe } from 'langbase';

async function main() {
  const pipe = new Pipe({
    apiKey: process.env.LANGBASE_PIPE_API_KEY,
  });

  const result = await pipe.generateText({
    messages: [{ role: 'user', content: 'Hello, AI agent!' }],
  });

  console.log(result.completion);
}

main().catch(console.error);
    `;

		await fs.writeFile('index.js', mainFileContent.trim());

		// Create .env file
		await fs.writeFile('.env', 'LANGBASE_PIPE_API_KEY=your_api_key_here');

		// Update package.json
		const packageJson = JSON.parse(
			await fs.readFile('package.json', 'utf-8')
		);
		packageJson.scripts = {
			...packageJson.scripts,
			start: 'node index.js'
		};
		await fs.writeFile(
			'package.json',
			JSON.stringify(packageJson, null, 2)
		);

		spinner.succeed(
			chalk.green(`AI agent "${name}" created successfully!`)
		);
		console.log(chalk.yellow('\nNext steps:'));
		console.log(chalk.cyan(`1. cd ${name}`));
		console.log(
			chalk.cyan('2. Add your Langbase Pipe API key to the .env file')
		);
		console.log(chalk.cyan('3. pnpm start'));
	} catch (error) {
		spinner.fail(chalk.red('Failed to create AI agent'));
		console.error(error);
		process.exit(1);
	}
};

const run = async () => {
	const {name} = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of your AI agent project?',
			default: 'my-ai-agent'
		}
	]);

	const {proceed} = await inquirer.prompt([
		{
			type: 'confirm',
			name: 'proceed',
			message: `Create a new AI agent project named "${name}"?`,
			default: true
		}
	]);

	if (proceed) {
		await createAIAgent(name);
	} else {
		console.log(chalk.yellow('Operation cancelled'));
	}
};

run().catch(console.error);
