import { Observable } from "rxjs";

export interface Ibread<T> {
  read(id: string): Observable<T>;
  browse(): Observable<T>;
  addOrEdit(item: T): Promise<T | void>;
  delete(id: string): Promise<void>;
}
