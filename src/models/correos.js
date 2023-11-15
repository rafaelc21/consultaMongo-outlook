const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientSchema = new Schema({
  Nombre: String,
  DireccionCorreo: String
});

const attachmentSchema = new Schema({
  Nombre: String,
  Tipo: String
});

const correos = new Schema({
  Tipo: String,
  Tema: String,
  EnviadoPor: String,
  Recibido: Date,
  Cuerpo: String,
  CC: String,
  BCC: String,
  Enviado: Date,
  Detinatarios: [recipientSchema],
  HTMLBody: String,
  Adjuntos: [attachmentSchema]
});

correos.index({ Cuerpo: 'text' });


module.exports = mongoose.model('correo', correos);




