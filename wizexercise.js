// DDTEST: Hardcoded AWS Secret Key
const awsSecret = "AKIAIOSFODNN7EXAMPLE";

// DDTEST: Hardcoded password
const dbPassword = "P@ssw0rd123";

// DDTEST: SQL Injection
let userInput = "admin' --";
let query = "SELECT * FROM users WHERE username = '" + userInput + "';";

// DDTEST: Command Injection (Node.js)
const { exec } = require("child_process");
let userCmd = "ls; rm -rf /";
exec(userCmd, (error, stdout, stderr) => {
  console.log(stdout);
});

// DDTEST: Path Traversal
const fs = require("fs");
let filename = "../../etc/passwd";
fs.readFile(filename, (err, data) => {
  if (err) throw err;
  console.log(data);
});

// DDTEST: Weak Cryptography
const crypto = require("crypto");
let hash = crypto.createHash("md5").update("sensitiveData").digest("hex");
console.log(hash);

// DDTEST: Insecure Deserialization
let userSuppliedInput = '{"username": "admin", "isAdmin": true}';
let obj = eval('(' + userSuppliedInput + ')');
console.log(obj);

// DDTEST: Hardcoded Private Key
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA7a1O8Rlq7XbJeOAGvDdzM0b4IXXs4U65h9L2DQIDAQABAoIBAQDn
-----END RSA PRIVATE KEY-----`;
