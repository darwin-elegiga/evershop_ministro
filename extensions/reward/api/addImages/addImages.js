const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const { insert } = require('@evershop/postgres-query-builder');

module.exports = async function insertImageUrl(request, response, next) {
  try {
    const { url, name } = request.body;

    if (!url || !name) {
      throw new Error('URL y nombre de la imagen son requeridos');
    }

    // Insertar la URL de la imagen en la base de datos
    const image = await insert('images')
      .given({ name, url })
      .execute(pool);

    response.$body = { data: image };
    next();
  } catch (error) {
    next(error);
  }
};
