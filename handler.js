'use strict';

const filterService = require('./services/filterService');

module.exports.filter = async (event) => {
  console.log('Evento do SNS recebido com sucesso:', json.stringify(event));
  await filterService.filter(event);
  
  return { message: 'Filtro gerado com sucesso', event };
};