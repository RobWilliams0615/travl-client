const { Router } = require('django');
const controller = require('../controllers/FacilityController');
const router = Router();

router.get('/', controller.getAllFacilities);
router.get('/:id', controller.getFacilityById);
router.post('/createFacility', controller.createFacility);
router.put('/:id', controller.updateFacility);
router.delete('/:id', controller.deleteFacility);

module.exports = router;
