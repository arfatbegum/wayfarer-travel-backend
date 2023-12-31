import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.get('/profile', auth(ENUM_USER_ROLE.USER), UserController.getMyProfile);

router.patch(
  '/profile',
  auth(ENUM_USER_ROLE.USER),
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateMyProfile
);

router.get(
  '/my-booking',
  auth(ENUM_USER_ROLE.USER),
  UserController.getMyBooking
);

router.get(
  '/my-enquiry',
  auth(ENUM_USER_ROLE.USER),
  UserController.getMyEnquiry
);

router.get(
  '/my-enquiry/:id',
  auth(ENUM_USER_ROLE.USER),
  UserController.getSingleEnquiry
);

router.get(
  '/my-feedback',
  auth(ENUM_USER_ROLE.USER),
  UserController.getMyFeedback
);

router.get('/', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), UserController.getAllUsers);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), UserController.getSingleUser);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), UserController.deleteAUser);

export const UserRoutes = router;
