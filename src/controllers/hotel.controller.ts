import { Request, Response, NextFunction } from "express";
import { createHotelService, deleteHotelByIdService, getAllHotelService, getHotelByIdService, updateHotelService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotel = await createHotelService(req.body);
  res.status(StatusCodes.CREATED).json({
    message: "Hotel Created Successfully",
    data: hotel,
    success: true,
  });
}


export async function getHotelByIdHandler(req:Request,res:Response,next:NextFunction){
    const hotelResponse = await getHotelByIdService(Number(req.params.id));

    res.status(StatusCodes.OK).json({
        message:"Hotel Found Successfully",
        data:hotelResponse,
        success:true,
    })
}

export async function getAllHotelsHandler(req:Request,res:Response,next:NextFunction){
    const hotelResponse = await getAllHotelService();

    res.status(200).json({
        message:"Hotel Found Successfully",
        data:hotelResponse,
        success:true,
    })
}

export async function deleteHotelHandler(req:Request,res:Response,next:NextFunction){
    const hotelResponse = await deleteHotelByIdService(Number(req.params.id));

    res.status(StatusCodes.OK).json({
        message:"Hotel Deleted Successfully",
        success:true,
    })
}


export async function updateHotelHandler(req:Request,res:Response,next:NextFunction){
    const hotelResponse = await updateHotelService(Number(req.params.id),req.body);

    res.status(200).json({
        message:"Hotel updated Successfully",
        data:hotelResponse,
        success:true,
    })
}

