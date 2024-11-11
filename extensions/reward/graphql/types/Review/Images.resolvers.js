// const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
// const { getImagesBaseQuery } = require('../../../services/getImagesBaseQuery');

// module.exports = {
//   Query: {
//     images: async (_, __, { pool }) => {
//       const query = getImagesBaseQuery();
//       const images = await query.execute(pool);
//       return images.map((image) => camelCase(image));
//     }
//   }
// };

const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { getImagesBaseQuery } = require('../../../services/getImagesBaseQuery');

module.exports = {
  Query: {
    images: async (_, { filters }, { pool }) => {
      // Llama a getImagesBaseQuery con los filtros, incluyendo el nombre
      const query = getImagesBaseQuery(filters);
      const images = await query.execute(pool);
      return images.map((image) => camelCase(image));
    }
  }
};
