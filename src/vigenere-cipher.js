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
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, keyword) {
    const mes = message.toUpperCase();
    const keyWord = keyword.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < mes.length; i++) {
      if (mes[i].match(/[A-Z]/)) {
        const messageCharCode = mes[i].charCodeAt(0) - 65;
        const keywordCharCode = keyWord[j % keyWord.length].charCodeAt(0) - 65;
        const encryptedCharCode = (messageCharCode + keywordCharCode) % 26;
        const encryptedChar = String.fromCharCode(encryptedCharCode + 65);
        result += encryptedChar;
        j++;
      } else {
        result += mes[i];
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }

  decrypt(ciphertext, keyword) {
    const cipherText = ciphertext.toUpperCase();
    const keyWord = keyword.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < cipherText.length; i++) {
      if (cipherText[i].match(/[A-Z]/)) {
        const cipherTextCharCode = cipherText[i].charCodeAt(0) - 65;
        const keyWordCharCode = keyWord[j % keyWord.length].charCodeAt(0) - 65;
        const decryptedCharCode = (cipherTextCharCode - keyWordCharCode + 26) % 26;
        const decryptedChar = String.fromCharCode(decryptedCharCode + 65);
        result += decryptedChar;
        j++;
      } else {
        result += cipherText[i];
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
