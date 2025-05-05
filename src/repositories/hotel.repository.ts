import Hotel from "../db/models/hotel";
import { CreateHotelDTO } from "../dto/hotel.dto";
import logger from "../config/logger.config";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData:CreateHotelDTO){
    const hotel = await Hotel.create({
        name:hotelData.name,
        address:hotelData.address,
        location:hotelData.location,
        rating:hotelData.rating,
        ratingCount:hotelData.ratingCount,
    });

    logger.info(`Hotel Created: ${hotel.id}`)
    return hotel;
}

export async function getHotelById(id:number){
    const hotel=await Hotel.findByPk(id);
    if(!hotel){
        logger.error(`Hotel not found: ${id}`);
        throw new NotFoundError("Hotel Not Found");
    }
    return hotel;
}

export const getallHotels = async()=>{

    const hotel= Hotel.findAll({
        where:{
            deletedAt:null
        }
    })
    if(!hotel){
        throw new NotFoundError("No Hotels Found")
    }
    return hotel;
}

export const deleteHotelById = async(id:number)=>{
    const isHotelPresent = await Hotel.findByPk(id);
    if(!isHotelPresent)
    {
        throw new NotFoundError("Hotel Not Found");
    }
    const deleteHotel=await Hotel.destroy({
        where:{
            id:id
        }
    })
    return deleteHotel;
}

export const  updateHotel = async (id:number,hotelData:CreateHotelDTO)=>{
    const isTablePresent = await Hotel.findByPk(id);
    if(!isTablePresent)
    {
        throw new NotFoundError("Hotel Not Found");
    }
    const updatedHotel = isTablePresent.update(hotelData);
    return updatedHotel;
}


export async function softDeleteHotel(id:number)
{
    const hotel=await Hotel.findByPk(id);

    if(!hotel)
    {
        throw new NotFoundError(`Hotel with id ${id} not found`)
    }

    hotel.deletedAt = new Date(); // this is only updating ts object not db 
    await hotel.save();
    return hotel;
}