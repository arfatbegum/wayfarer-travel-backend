"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_controller_1 = require("./booking.controller");
const booking_validation_1 = require("./booking.validation");
const router = express_1.default.Router();
router.post('/create-booking', (0, validateRequest_1.default)(booking_validation_1.BookingValidation.createBookingZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.USER), booking_controller_1.BookingController.createBooking);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.getAllBooking);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.getSingleBooking);
router.patch('/:id', (0, validateRequest_1.default)(booking_validation_1.BookingValidation.updateBookingZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), booking_controller_1.BookingController.updateBooking);
router.patch('/cancel-booking/:id', (0, validateRequest_1.default)(booking_validation_1.BookingValidation.updateBookingZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), booking_controller_1.BookingController.cancelBooking);
router.patch('/confirm-booking/:id', (0, validateRequest_1.default)(booking_validation_1.BookingValidation.updateBookingZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.confirmBooking);
router.patch('/complete-booking/:id', (0, validateRequest_1.default)(booking_validation_1.BookingValidation.updateBookingZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.completedBooking);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.deleteBooking);
exports.BookingRoutes = router;