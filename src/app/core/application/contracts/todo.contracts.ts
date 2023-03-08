import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface CrudBase<T> {
  // read(): T[];
  create(payload: T): Observable<HttpResponse<any>>;
  read(): Observable<HttpResponse<T[]>>;
  update(payload: T): Observable<HttpResponse<any>>;
  delete(id: string): Observable<HttpResponse<any>>;
}
