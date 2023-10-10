const controller = require('./PeopleController');
const validator = require('@middy/validator')
const peopleSchema = require('./PeopleSchema')
const middleware = require('../middlewares/validation')

const getAll = async () => {
    const response = await controller.getAll();
    return response
};

const create = async (event) => {
    const response = await controller.create(event);
    return response
}

const getById = async (event) => {
    const response = await controller.getById(event);
    return response
}

const update = async (event) => {
    const response = await controller.update(event);
    return response
}

const deleteOne = async (event) => {
    const response = await controller.deleteOne(event);
    return response
}

module.exports = {
    getAll,
    create: middleware(create).use(validator({ inputSchema: peopleSchema })),
    getById,
    update: middleware(update),
    deleteOne
}