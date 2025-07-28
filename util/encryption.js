const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const algorithm = 'aes-256-cbc';
const ivLength = 16; // AES block size


function encryptEnhanced(text, password, isAdmin = false) {
  if (isAdmin) return text;
  const salt = crypto.randomBytes(16);
  const key = crypto.scryptSync(password, salt, 32);
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  return (
    salt.toString('hex') + ':' + iv.toString('hex') + ':' + encrypted.toString('hex')
  );
}

function decryptEnhanced(cipherText, password, isAdmin = false) {
  if (isAdmin) return cipherText;
  const [saltHex, ivHex, dataHex] = cipherText.split(':');
  const salt = Buffer.from(saltHex, 'hex');
  const iv = Buffer.from(ivHex, 'hex');
  const key = crypto.scryptSync(password, salt, 32);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(dataHex, 'hex')),
    decipher.final(),
  ]);
  return decrypted.toString('utf8');
}


function encrypt(text, password) {
  const key = crypto.scryptSync(password, 'salt', 32);
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(cipherText, password) {
  const [ivHex, dataHex] = cipherText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const key = crypto.scryptSync(password, 'salt', 32);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const decrypted = Buffer.concat([decipher.update(Buffer.from(dataHex, 'hex')), decipher.final()]);
  return decrypted.toString('utf8');
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = {
  encrypt,
  decrypt,
  encryptEnhanced,
  decryptEnhanced,
  hashPassword,
  verifyPassword,
};
