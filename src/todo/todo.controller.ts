import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService) {
    }

    @Get()
    getTodos() {
        return this.todoService.getTodos();
    }

    @Post()
    postTodo(@Body("title") title:string, @Body("subtitle") subtitle:string) {
        this.todoService.addTodo(title, subtitle);
    }

    @Delete('/:id')
    deleteTodoById(@Param("id") id:string) {
        this.todoService.removeToDoById(id);
    }
}
