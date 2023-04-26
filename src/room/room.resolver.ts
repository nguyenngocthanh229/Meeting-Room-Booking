import { Resolver,Query,Args,Mutation } from '@nestjs/graphql';
import { RoomService } from './room.service';
import { Room } from 'src/models/room.model';


@Resolver(() => Room)
export class RoomResolver {
    constructor(private readonly roomService: RoomService) {}
   
  @Query(()  => String)
  sayHello(): string {
    return 'Hello World!';
  }
  
  @Query(()  => [Room])
  async getAllRoom() {
    return this.roomService.findAll();
  }

  @Query(()  => Room)
  async getRoomByID(@Args('id') id:string) {
    return this.roomService.findById(id);
  } 

  @Mutation(_returns  => Room)
  async createRoom(@Args('name') name:string) {
    return this.roomService.create(name);
  }

  @Mutation(_returns  => Room)
  async updateRoom(@Args('id') id:string, @Args('name') name: string) {
    return this.roomService.update(id,name);
  }

  @Mutation(_returns => Room)
  async deleteRoom(@Args('id') id:string) {
    return this.roomService.delete(id);
  }

  @Mutation(_returns  => Room)
  async bookRoom(
    @Args('id') id: string,
    @Args('from') from: Date, 
    @Args('to') to: Date, 
    @Args('name') name: string, 
  ) {
    return this.roomService.book(id, from, to, name);
  }

};