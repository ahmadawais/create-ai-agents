# create-ai-agents

[![DOWNLOADS](https://img.shields.io/npm/dt/create-ai-agents?label=DOWNLOADS%20%20❯&colorA=000000&colorB=000000&style=flat)](https://www.npmjs.com/package/create-ai-agents) [![Node.js CLI](https://img.shields.io/badge/-NodeCLI.com-gray.svg?colorB=000000&style=flat)](https://NodeCLI.com/?utm_source=FOSS) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro-gray.svg?colorB=000000&style=flat)](https://VSCode.pro/?utm_source=FOSS) [![Sponsor](https://img.shields.io/badge/-Sponsor-gray.svg?colorB=000000&style=flat)](https://github.com/ahmadawais/sponsor?utm_source=FOSS)
[![Follow @MrAhmadAwais on Twitter](https://img.shields.io/badge/FOLLOW%20@MRAHMADAWAIS%20%E2%86%92-gray.svg?colorA=000000&colorB=000000&style=flat)](https://twitter.com/mrahmadawais/)

> Create AI agents. `create-ai-agents` is a command-line interface (CLI) tool that helps you quickly set up new AI agent projects using the ⌘ Langbase SDK. It streamlines the process of creating a new project, installing dependencies, and setting up a basic example.

## Features

- 🚀 Quickly create a new AI agent project with a single command
- 📦 Automatically install necessary dependencies using pnpm
- 🔧 Set up a basic example using the ⌘ Langbase SDK
- 🔑 Create a `.env` file for API key management
- 💻 Interactive command-line interface for project setup
- 🎨 Customizable project name and structure
- 📝 Generated `index.js` with a basic AI agent example
- 🔄 Automatically update `package.json` with start script

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

You don't need to install anything globally. Just run one of these commands to create a new AI agent project:

```sh
npm create ai-agents
# or
pnpm create ai-agents
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

1. Run the create command:
   ```sh
   pnpm create ai-agent
   ```

2. Follow the interactive prompts to set up your project:
   - Enter your project name (default: my-ai-agent)
   - Confirm project creation

3. Once created, navigate to your project directory:
   ```sh
   cd <your-project-name>
   ```

4. Open the `.env` file and add your Langbase Pipe API key:
   ```
   LANGBASE_MY_PIPE_API_KEY=your_api_key_here
   ```

5. Start your AI agent:
   ```sh
   pnpm dev
   ```

### Project Structure

After creation, your project will have the following structure:

```
<project-name>/
├── .env
├── index.js
├── package.json
└── node_modules/
```

- `.env`: Contains your Langbase Pipe API key
- `index.js`: The main file of your AI agent, containing a basic example
- `package.json`: Defines your project and its dependencies

<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)](./../../)

## License & Conduct

- MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
- [Code of Conduct](code-of-conduct.md)

<br>

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)

## Connect

<div align="left">
    <p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @MrAhmadAwais" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get #OneDevMinute daily hot tips & trolls</small></p>
    <p><a href="https://www.youtube.com/AhmadAwais"><img alt="YouTube AhmadAwais" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorB=ff0000&style=flat" /></a>&nbsp;<small><strong>(subscribe)</strong> To tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://AhmadAwais.com/"><img alt="Blog: AhmadAwais.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long form technical articles</small></p>
    <p><a href="https://www.linkedin.com/in/MrAhmadAwais/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>


> This repository is part of the [Langbase.com][lb] course.

[lb]: https://Langbase.com?utm_source=github&utm_medium=referral&utm_campaign=ahmadawais/create-ai-agents
[n]: https://NodeCLI.com?utm_source=github&utm_medium=referral&utm_campaign=ahmadawais/create-ai-agents

[![Awais on Twitter](https://raw.githubusercontent.com/ahmadawais/stuff/master/sponsor/sponsor.jpg)](https://github.com/AhmadAwais/sponsor)
