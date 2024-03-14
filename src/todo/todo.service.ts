import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    todoArray: Todo[] = [];
    count: number= 0;

    addTodo(title: string, subtitle: string) {
        console.log(`title: ${title}, subtitle: ${subtitle})`)
        
        const todo = new Todo();
        todo.id = (this.count+=1).toString();
        todo.title = title;
        todo.subtitle = subtitle;
        
        this.todoArray.push(todo);

    }

    getTodos() {
        return this.todoArray;
    }

    removeToDoById(id: string) {
        const find = this.todoArray.find(item => item.id === id)
        if (!find) {
            throw new NotFoundException(`Todo with ${id} not found`)
        }

        this.todoArray = this.todoArray.filter(item=>{return item.id !== id})
        return this.todoArray.filter(item=>{return item.id !== id})
    }
}
