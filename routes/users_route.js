const { Router } = require('express');
const { getUser,
    postUser,
    putUser,
    deleteUser,
    getAllUser } = require('../controllers/users_controller');

const router = Router();

// rutas del crud de un usuario
router.get('', getAllUser)
router.get('/:id', getUser)
router.post('/', postUser)
router.put('/:id', putUser)
router.delete('/:id', deleteUser)

module.exports = router;