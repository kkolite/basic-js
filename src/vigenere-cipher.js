class VigenereCipheringMachine {
  constructor(rev) {
    this.reverse = false;
    if (rev == false) {this.reverse = true};
  }

  encrypt(str, key) {
    if(str === undefined || key === undefined) {throw new Error('Incorrect arguments!')};
    
      let encrypted = '';
      let j = 0;
      for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (currentLetter.charCodeAt() > 96 && currentLetter.charCodeAt() < 123) {
          currentLetter = currentLetter.toUpperCase();
        }

        if (currentLetter.charCodeAt() > 64 && currentLetter.charCodeAt() < 91) {
            let p = (currentLetter.charCodeAt(0) - 65);
            let k = (key[j % key.length].toUpperCase().charCodeAt() - 65);
            let upperLetter = ((p + k) % 26);
            encrypted += String.fromCharCode(upperLetter + 65);
            j++;
        } 
        else  {
            encrypted += currentLetter;
        }
    }
    if (this.reverse == false) {return encrypted.toUpperCase()}
    else {return encrypted.split('').reverse().join('').toUpperCase()}
}
  
  decrypt(str, key) {
    if(str === undefined || key === undefined) {throw new Error('Incorrect arguments!')}
    let decrypted = '';
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (currentLetter.charCodeAt() > 96 && currentLetter.charCodeAt() < 123) {
          currentLetter = currentLetter.toUpperCase();
        }

        if (currentLetter.charCodeAt() > 64 && currentLetter.charCodeAt() < 91) {
          let c = (currentLetter.charCodeAt(0) - 65);
          let k = (key[j % key.length].toUpperCase()).charCodeAt() - 65;
          let upperLetter = (((c - k) % 26) + 26) % 26;
          decrypted += String.fromCharCode(upperLetter + 65);
          j++;
        } 
        else {
            decrypted += currentLetter;
        }
    }
    if (this.reverse == false) {return decrypted.toUpperCase()}
      else {return decrypted.split('').reverse().join('').toUpperCase()}
  }
}

module.exports = {
  VigenereCipheringMachine
};