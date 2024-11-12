import { promisify } from 'node:util';
import { execFile } from 'node:child_process';

const execFileNew = promisify(execFile);

async function getVersion() {
  const { stdout } = await execFileNew('node', ['--version']);
  console.log(stdout);
}

getVersion();