const { Router } = require('express');
const { check } = require('express-validator');
const { getUser,
    postUser,
    putUser,
    deleteUser,
    getAllUser } = require('../controllers/users_controller');
const { emailPresence, getUserById } = require('../helpers/db-validators');
// const { statusExist } = require('../helpers/db-validators');
const validateUserParmas = require('../middlewares/validate-user');

const router = Router();

// rutas del crud de un usuario
router.get('/', getAllUser)
router.get('/:id', getUser)
router.post('/', [
    check('email', 'is invalid').isEmail(),
    check('name', 'length 6').isLength({ min: 6 }),
    check('email').custom(emailPresence),
    // check('status', 'debe estar presente').not().isEmpty(),
    // falta validar como usar los modelos que cuanod se pruralizan son en es
    // check('status').custom(statusExist),
    validateUserParmas
    // check('status', 'not status valid').isIn(['active', 'inactive', 'archived'])
], postUser)
router.put('/:id', [
    check('id').isMongoId(),
    check('id').custom(getUserById),
    validateUserParmas
], putUser)
router.delete('/:id', deleteUser)

module.exports = router;