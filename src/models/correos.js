const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientSchema = new Schema({
  "Nombre": String,
  "Dirección de correo": String
});

const attachmentSchema = new Schema({
  Nombre: String,
  Tipo: String
});

const correos = new Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  Tipo: String,
  Subject: String,
  SenderName: String,
  ReceivedTime: Date,
  Body: String,
  CC: String,
  BCC: String,
  SentOn: Date,
  Recipients: [recipientSchema],
  HTMLBody: String,
  Attachments: [attachmentSchema]
});

module.exports = mongoose.model('correo', correos);




