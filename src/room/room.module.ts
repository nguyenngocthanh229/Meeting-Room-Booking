import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from 'src/models/room.model';
import { RoomService } from './room.service';
import { RoomResolver } from './room.resolver';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name : 'Room',
                schema: RoomSchema
            },
        ]),
    ],
    providers: [RoomService,RoomResolver],
    exports: [RoomService],
})
export class RoomModule {}
    