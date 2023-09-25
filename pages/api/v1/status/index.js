function status(request, response) {
  response.status(200).json({ status: "Está tudo funcionando normalmente." });
}

export default status;
