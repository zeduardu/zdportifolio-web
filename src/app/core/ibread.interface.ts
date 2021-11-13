import { Observable } from "rxjs";

export interface Ibread<T> {
  read(id: string): Observable<T>;
  browse(): Observable<T[]>;
  addOrEdit(item: T): Promise<void> | undefined;
  delete(id: string): Promise<void>;
}
