# Project Setup Guide

This guide will help you set up a modern React prototyping environment similar to the shadcn-proto project. We'll build it step by step so you can understand each piece and troubleshoot issues as they arise.

## Prerequisites - Setup Your Mac First

**IMPORTANT FOR CLAUDE**: The user will handle all prerequisites themselves. DO NOT help with or execute any of these prerequisite steps. These are for the user to complete before starting the project setup stages.

Before diving into the project setup, you'll need to install the essential development tools on your Mac.

### Step 1: Install VS Code

1. **Download VS Code**:
   - Go to https://code.visualstudio.com/
   - Click "Download for macOS"
   - Choose Universal build (works on both Intel and Apple Silicon Macs)

2. **Install VS Code**:
   - Open the downloaded .zip file
   - Drag "Visual Studio Code.app" to your Applications folder
   - Launch VS Code from Applications
   - Optional: Right-click VS Code icon in dock → Options → Keep in Dock

### Step 2: Install Node.js and npm

**Recommended Method - Using Homebrew**:

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js** (includes npm):
   ```bash
   brew install node
   ```

3. **Verify installation**:
   ```bash
   node -v
   npm -v
   ```

### Step 3: Install Claude Code CLI

1. **Install Claude Code**:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Verify installation**:
   ```bash
   claude doctor
   ```

3. **Authenticate Claude Code**:
   - Run `claude` in any directory
   - This will open your browser for authentication
   - Sign in with Claude Pro ($20/mo) or Claude Max ($100/mo), or use an Anthropic Console API key
   - Complete the OAuth process

### Step 4: Install Claude Code VS Code Extension (Optional)

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X)
3. Search for "Claude Code"
4. Install the official Claude Code extension
5. Use Cmd+Esc to open Claude Code directly in VS Code

**Note**: The VS Code extension is currently in beta and requires VS Code 1.98.0+

---

## Before You Start

**Important**: Give this entire document to Claude and ask them to guide you through each stage. Claude will:
- Explain what each step does and why
- Help troubleshoot any errors
- Teach you the concepts as we go
- Create an install checklist to track your progress across sessions

**What to say to Claude**: "I've completed all the prerequisites. Help me set up a new React prototyping project using this install.md guide. Please explain each step and teach me what's happening. Create an install checklist to track my progress since I likely won't complete all stages in one sitting. Start with Stage 1."

**For Claude**: After completing Stage 1, create an `install-checklist.md` file to track the user's progress through each stage. The user may need to stop and resume work across multiple sessions, so this checklist will help them pick up where they left off. Update the checklist as each stage is completed.

---

## Stage 1: Basic Vite Setup

**Goal**: Get a basic React + TypeScript project running on localhost

**What we're building**: A minimal Vite app that proves your environment works

### Steps for Claude:
1. Create a new Vite React TypeScript project
2. Install dependencies
3. Start the development server
4. Verify it works in the browser


**Teaching moments**:
- What is Vite and why we use it over Create React App
- What TypeScript adds to JavaScript
- How the development server works

**Success criteria**: Browser shows default Vite React page at localhost

---

## Stage 2: Git Setup

**Goal**: Initialize version control and make first commit

**What we're learning**: Git basics and why version control matters

### Steps for Claude:
1. Initialize git repository
2. Create initial commit with Vite boilerplate
3. Explain git concepts (repository, commits, staging)


**Teaching moments**:
- Why version control is essential
- Basic git workflow (add, commit)
- What .gitignore does

**Success criteria**: Git repository initialized with clean first commit

---

## Stage 3: Project Structure & Dependencies

**Goal**: Set up the project architecture and install required packages

**What we're building**: The foundation for a design system prototyping tool

### Steps for Claude:
1. Install required dependencies:
   - ShadCN UI setup
   - Tailwind CSS
   - React Router
   - Class Variance Authority
   - Additional utilities

2. Create the directory structure:
   ```
   src/
   ├── components/
   │   ├── ui/          # ShadCN components
   │   └── shared/      # Custom shared components
   ├── pages/           # Page components (with nav)
   ├── prototypes/      # Prototype components (blank canvas)
   ├── templates/       # Layout templates
   ├── config/          # Configuration files
   ├── lib/             # Utilities and helper functions
   ├── styles/          # Global styles
   └── guidelines/      # Design system docs
   ```

3. Set up basic configuration files:
   - `components.json` for ShadCN
   - Update `tailwind.config.js`
   - Set up path aliases in `vite.config.ts`


**Teaching moments**:
- What ShadCN UI is and why it's useful
- How Tailwind CSS works
- Purpose of each directory in the structure
- What path aliases do

**Success criteria**: Project structure created, dependencies installed, basic config complete

---

## Stage 4: Core Templates & Routing

**Goal**: Create the template system and basic routing

**What we're building**: The foundation for pages vs prototypes

### Steps for Claude:
1. Create the two core templates:
   - `PageTemplate.tsx` (with navigation)
   - `BlankTemplate.tsx` (clean canvas)

2. Set up React Router with dynamic routing
3. Create the routes configuration system
4. Add a basic theme provider
5. Create initial test pages


**Teaching moments**:
- Template pattern benefits
- React Router concepts
- React Context for theme management
- Component composition

**Success criteria**: Can navigate between different page types, theme switching works

---

## Stage 5: Design System Foundation

**Goal**: Implement the core design system with InstUI-inspired tokens

**What we're building**: A consistent design language

### Steps for Claude:
1. Set up design tokens in CSS custom properties
2. Implement typography system
3. Create color system with theme support
4. Add first ShadCN components (button, select)
5. Create theme-aware components


**Teaching moments**:
- Design token benefits
- CSS custom properties
- Design system principles
- Component theming strategies

**Success criteria**: Consistent theming across components, typography system working

---

## Stage 6: GitHub Integration & Deployment

**Goal**: Connect to GitHub and set up automatic deployment

**What we're building**: Professional development workflow

### Steps for Claude:
1. Create GitHub repository
2. Connect local repo to GitHub
3. Push initial code
4. Set up GitHub Pages deployment
5. Configure build process for production
6. Create deploy script


**Teaching moments**:
- GitHub workflow basics
- Deployment concepts
- Build vs development environments
- GitHub Pages setup

**Success criteria**: Code on GitHub, live site deployed and accessible

---

## Stage 7: Polish & Documentation

**Goal**: Add final touches and documentation

**What we're building**: A production-ready foundation

### Steps for Claude:
1. Create project README
2. Add development commands documentation
3. Set up linting and formatting
4. Create sample components
5. Add error handling
6. Performance optimizations


**Teaching moments**:
- Documentation best practices
- Code quality tools
- Performance considerations
- Maintenance planning

**Success criteria**: Fully documented, deployable project ready for development

---

## Troubleshooting Notes for Claude

**Common Windows Issues**:
- ShadCN CLI creates literal `@` directories - provide PowerShell script to fix
- Path separators in Windows require special handling
- npm vs cmd execution differences

**Common Setup Issues**:
- Node version compatibility
- Port conflicts (3000, 5173)
- Git configuration problems
- GitHub authentication

**Key Commands Reference**:
```bash
# Development
npm run dev

# Building
npm run build

# Adding ShadCN components
npx shadcn@latest add <component>

# Git basics
git add .
git commit -m "message"
git push
```

**Success Indicators**:
- Each stage should end with a working, testable state
- User should understand what was built and why
- Clear path to continue development
- All major functionality working

Remember to explain concepts and ensure understanding before moving to the next stage!