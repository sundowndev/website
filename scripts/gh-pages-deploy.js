/* eslint-disable no-console */
import { execa } from 'execa'
import fs from 'fs'

const baseBranch = 'master';
const targetBranch = 'gh-pages';

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", targetBranch]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", targetBranch]);
    console.log(`Pushing to ${targetBranch}...`);
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", baseBranch]);
    await execa("git", ["branch", "-D", targetBranch]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
