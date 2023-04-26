import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose"

export type RoomDocument = Room & Document;

@ObjectType({  })
@Schema()
export class Room {
    id(id: any, from: Date, to: Date) {
        throw new Error('Method not implemented.');
    }
    @Field(_type => String, { nullable: true })
    @Prop({ require: true})
    name: string;
    @Field(_type => String, { nullable: true })
    @Prop({ require: true})
    description: string;
    @Field(_type => String, { nullable: true })
    @Prop({ require: true})
    isBooked: Boolean;
    @Field(_type => String, { nullable: true })
    @Prop({ require: true})
    bookedBy: string;
    @Field(_type => String, { nullable: true })
    @Prop({ require: true})
    bookedFromTime: Date;
    @Field(_type => String, { nullable: true })
    @Prop({ require: true})
    bookedToTime: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room)