const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(encryptDirection = true) {
    this.encryptDirection = encryptDirection;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encryptedMessage = '';
    let index = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        const messageCharCode = message.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(index % key.length) - 65;
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 65;
        
        encryptedMessage += String.fromCharCode(encryptedCharCode);
        index++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.encryptDirection ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decryptedMessage = '';
    let index = 0;

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/[A-Z]/)) {
        const encryptedCharCode = encryptedMessage.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(index % key.length) - 65;
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26 + 65;

        decryptedMessage += String.fromCharCode(decryptedCharCode);
        index++;
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    return this.encryptDirection ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
