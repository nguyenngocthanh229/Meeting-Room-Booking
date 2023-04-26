import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose';
import { Room,RoomDocument } from 'src/models/room.model';

@Injectable()
export class RoomService {
    constructor(
        @InjectModel('Room') private readonly roomModel:Model<RoomDocument>
    ) {}
    async book(id: string, from: Date, to: Date, name: string) {
       const room = await this.findById(id);
       if (!room) {
        throw new Error('Room not found');
       }
       if (room.isBooked) {
         throw new Error ('Room is already booked');
       }
       await this.roomModel.findByIdAndUpdate(id,{from,to,isBooked: true});
       return room;
    }
    delete(id: string) {
        return this.roomModel.findByIdAndDelete(id).exec()
    }
    update(id: string, name: string) {
        return this.roomModel.findByIdAndUpdate(
            id,
            {name},
            {new: true}, 
        ).exec();
    }
    create(name: string) {
        const createdRoom = new this.roomModel({name});
        return createdRoom.save();
    }
    findById(id: string) {
        return this.roomModel.findById(id).exec();
    }
    findAll() {
       return this.roomModel.find().exec();
    }
    
}
