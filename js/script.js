var passwordField = $("#password"),
  stuffField = $("#stuff"),
  encryptedField = $("#encrypted"),
  decryptedField = $("#decrypted");

$("input[name=encrypt]").click(function() {
  if(!passwordField.val()) {
    alert("Missing Password");
  } else if(!stuffField.val()) {
    alert("Missing Stuff");
  } else {
     encryptedField.val(
       sjcl.encrypt(
         passwordField.val(), stuffField.val()
       )
     );
  }
});

$("input[name=decrypt]").click(function() {
  if(!passwordField.val()) {
    alert("Missing Password");
  } else if(!encryptedField.val()) {
    alert("Missing Encrypted Stuff");
  } else {
     try {
       decryptedField.val(sjcl.decrypt(
         passwordField.val(),
         encryptedField.val()
       ));
     } catch (e) {
       alert("Can't decrypt: " + e);
     }
  }
});