import { CreateHotelDTO } from "../dto/hotel.dto";
import { createHotel, deleteHotelById, getallHotels, getHotelById, softDeleteHotel, updateHotel } from "../repositories/hotel.repository";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";


const blockListedAddresses = [
    "123 Fake St",
    "456 Elm St",
    "789 Maple Ave"
];

export function isAddressBlockListed(address:string):boolean{
    return blockListedAddresses.includes(address);
}
export async function createHotelService(hotelData:CreateHotelDTO) {

    if(isAddressBlockListed(hotelData.address)){
        throw new BadRequestError("Address is blockListed");
    }
    const hotel= await createHotel(hotelData);
    return hotel;
}


export async function getHotelByIdService(id:number){
    const hotel = await getHotelById(id);
    return hotel;
}
export async function deleteHotelByIdService(id:number){
    const hotel = await softDeleteHotel(id);
    return hotel;
}
export async function updateHotelService(id:number,hotelData:CreateHotelDTO){
    const hotel = await updateHotel(id,hotelData);
    return hotel;
}
export async function getAllHotelService(){
    const hotel = await getallHotels();
    return hotel;
}