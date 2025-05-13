# EarPrint Website Project

This README provides an overview of the EarPrint website project, the work completed, and step-by-step instructions for deploying it to Vercel using GitHub.

**Important Update (May 13, 2025):** This version of the project includes a critical fix for the `src/app` directory, which was previously missing and causing deployment failures. The `src/app` directory, along with its essential files (`layout.tsx`, `page.tsx`, `globals.css`), has now been correctly restored.

## Project Overview

The EarPrint website is a Next.js application designed to showcase a personalized audio experience platform. It features a cyberpunk-inspired dark theme with purple gradients and neon accents.

Key sections include:
*   Homepage with Hero Banner, Introduction, Product Showcase, Challenges Preview, and Community Spotlight.
*   Navigation and Footer components.

## Work Completed

*   Initial project setup using Next.js and TypeScript.
*   Implementation of core UI components based on the provided design plan and visual references.
*   Styling with Tailwind CSS, incorporating the specified dark theme and cyberpunk aesthetic.
*   Creation of individual page components for the homepage sections.
*   Setup of the main application layout (`src/app/layout.tsx`) and homepage (`src/app/page.tsx`).
*   Correction of the project structure to include the essential `src/app` directory.

## Step-by-Step Instructions for Deployment

Follow these instructions carefully to deploy the EarPrint website to Vercel.

### Part 1: Upload to GitHub

If you have already uploaded a previous version to GitHub, you will need to update your existing repository with these corrected files. If this is your first time uploading, you can create a new repository.

**To update an existing GitHub repository:**

1.  **Unzip the new `earprint-website.zip` file** on your computer. This will create a folder named `earprint-website` containing all the corrected project files.
2.  **Replace the old files in your local Git repository folder** with the contents of this new `earprint-website` folder. Make sure to delete the old files from your local repository folder first (except for the `.git` hidden folder if it exists there) and then copy everything from the new unzipped `earprint-website` folder into your local repository folder.
3.  **Open your Terminal or Command Prompt.**
4.  **Navigate to your local Git repository folder** (e.g., `cd path/to/your/TestSiteEP`).
5.  **Stage, commit, and push the changes:**
    ```bash
    git status  # (Check what files have changed; you should see the new/updated files)
    git add .   # (Stage all changes)
    git commit -m "Apply corrected project structure with src/app directory"
    git push origin main # (Or your default branch name)
    ```

**To upload to a new GitHub repository (if you haven't uploaded before or want to start fresh):**

1.  **Create a new repository on GitHub:**
    *   Go to [GitHub](https://github.com) and log in.
    *   Click the "+" icon in the top right and select "New repository."
    *   Give your repository a name (e.g., `earprint-live-site`).
    *   Choose public or private.
    *   **Do not** initialize with a README, .gitignore, or license if you are about to push an existing project.
    *   Click "Create repository."
2.  **Unzip the `earprint-website.zip` file** on your computer. This will create a folder named `earprint-website` containing all the project files.
3.  **Open your Terminal or Command Prompt.**
4.  **Navigate into the unzipped `earprint-website` folder:**
    ```bash
    cd path/to/your/earprint-website
    ```
5.  **Initialize Git and push the project:**
    ```bash
    git init -b main
    git add .
    git commit -m "Initial commit of EarPrint website project (corrected version)"
    git remote add origin YOUR_NEW_GITHUB_REPOSITORY_URL.git # (Replace with your new repo URL from GitHub)
    git push -u origin main
    ```

### Part 2: Deploy to Vercel

1.  **Log in to Vercel:** Go to [https://vercel.com/](https://vercel.com/) and log in (preferably with your GitHub account).
2.  **Import Your GitHub Project:**
    *   On your Vercel dashboard, click "Add New..." and then select "Project."
    *   Connect Vercel to your GitHub account if you haven't already.
    *   Find and select the GitHub repository you just updated or created (e.g., `TestSiteEP` or `earprint-live-site`). Click "Import."
3.  **Configure Your Project:**
    *   **Project Name:** Vercel will suggest one based on your repository; you can change it if you like.
    *   **Framework Preset:** Vercel should automatically detect **Next.js**. If not, select it.
    *   **Root Directory:** This should be left as the default (`./` or empty). **Ensure this is correct.**
    *   **Build and Output Settings:** The toggles for "Build Command," "Output Directory," and "Install Command" should all be **OFF**. This allows Vercel to use its default Next.js settings, which are usually correct. If they are ON, turn them OFF.
    *   **Environment Variables:** You don't need any for this project at the moment.
4.  **Deploy:** Click the "Deploy" button.
5.  **Access Your Live Site:** Vercel will start building your project. This might take a few minutes. Once completed, Vercel will provide you with one or more public URLs (e.g., `your-project-name.vercel.app`) where you can access your live EarPrint website.

If you encounter any errors during the Vercel deployment, please check the build logs on Vercel for details.

Good luck!
