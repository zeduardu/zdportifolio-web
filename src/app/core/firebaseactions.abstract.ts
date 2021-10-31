import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {plainToClass} from 'class-transformer';
import {Observable} from 'rxjs';
import {Model} from 'src/app/core/model.abstract';
import {Ibread} from "./ibread.interface";
import {map} from "rxjs/operators";

export abstract class FirebaseActions<T extends Model> implements Ibread<T> {

  angularFirestoreCollection: AngularFirestoreCollection<T>;

  constructor(protected type: { new(): T }, protected angularFirestore: AngularFirestore, public path: string) {
    this.angularFirestoreCollection = this.angularFirestore.collection<T>(path);
  }

  docToClass(snapshotDoc: any): T {
    let object = {
      id: snapshotDoc.id,
      ...(snapshotDoc.data() as T)
    }
    return plainToClass(this.type, object);
  }

  read(id: string): Observable<T> {
    let doc = this.angularFirestoreCollection.doc<T>(id);
    return doc.get().pipe(
      map(snapshot => this.docToClass(snapshot))
    );
  }

  browse(): Observable<T[]> {
    return this.angularFirestoreCollection.valueChanges();
  }

  addOrEdit(item: T): Promise<T | void> {
    if (!item)
      return

    let obj = null;
    if (item instanceof this.type)
      obj = item.toObject();
    else
      obj = item;

    if (item.id)
      return this.angularFirestoreCollection.doc(item.id).set(obj);
    else {
      return this.angularFirestoreCollection.add(obj).then(res => {
        obj.id = res.id;
        this.angularFirestoreCollection.doc(res.id).set(obj);
      });
    }
  }


  delete(id: string): Promise<void> {
    return this.angularFirestoreCollection.doc(id).delete();
  }
}
