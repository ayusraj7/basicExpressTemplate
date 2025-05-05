import express from 'express';
import { createHotelHandler, deleteHotelHandler, getAllHotelsHandler, getHotelByIdHandler, updateHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';


const hotelRouter = express.Router();

hotelRouter.post('/',validateRequestBody(hotelSchema),createHotelHandler);
hotelRouter.delete('/:id',deleteHotelHandler);
hotelRouter.get('/',getAllHotelsHandler);
hotelRouter.put('/:id',validateRequestBody(hotelSchema),updateHotelHandler)

hotelRouter.get('/:id',getHotelByIdHandler)


export default hotelRouter;