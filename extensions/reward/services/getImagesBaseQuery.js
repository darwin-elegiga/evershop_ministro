const { select } = require('@evershop/postgres-query-builder');

module.exports.getImagesBaseQuery = (filters = {}) => {
  const query = select('*').from('images');
  if (filters.name) {
    query.where('name', 'ILIKE', `%${filters.name}%`); 
  }

  return query;
};
