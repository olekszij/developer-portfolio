const { spawn } = require('child_process');
const http = require('http');

const dev = spawn('npm', ['run', 'dev', '--', '-p', '3001'], { cwd: process.cwd() });
dev.stdout.on('data', (d) => process.stdout.write(d));
dev.stderr.on('data', (d) => process.stderr.write(d));

setTimeout(() => {
  http.get('http://localhost:3001/fr', (res) => {
    console.log('Status:', res.statusCode);
    let raw = '';
    res.on('data', (chunk) => { raw += chunk; });
    res.on('end', () => {
      console.log('Body:', raw.substring(0, 200));
      setTimeout(() => dev.kill(), 1000);
    });
  }).on('error', (e) => console.error(e));
}, 5000);
