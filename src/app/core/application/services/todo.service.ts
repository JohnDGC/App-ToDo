import { Injectable } from "@angular/core";
import { TodoDto } from "src/app/domain/entities/todo.dto";
import { ITodoRepository } from "src/app/domain/useCases/todo.repository";
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()
export class TodoService implements ITodoRepository {

  constructor(private http: HttpClient) { }

  create(payload: TodoDto): Observable<HttpResponse<any>> {
    return this.http.post('https://622b473014ccb950d23522d1.mockapi.io/api/todo', payload, { observe: 'response' });
  }

  read(): Observable<HttpResponse<TodoDto[]>> {
    return this.http.get<TodoDto[]>('https://622b473014ccb950d23522d1.mockapi.io/api/todo', { observe: 'response' });
  }

  update(payload: TodoDto): Observable<HttpResponse<any>> {
    return this.http.put(`https://622b473014ccb950d23522d1.mockapi.io/api/todo/${payload.id}`, payload, { observe: 'response' })
  }

  delete(id: String): Observable<HttpResponse<any>> {
    return this.http.delete(`https://622b473014ccb950d23522d1.mockapi.io/api/todo/${id}`, { observe: 'response' })
  }
}
