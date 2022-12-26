function genPassword() {
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 8;
var password = "";
for (let i = 0; i < passwordLength; i++) {
  let randomPassword = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomPassword, randomPassword +1);
}
    document.getElementById("password").value = password;

}
let password = document.getElementById("password");