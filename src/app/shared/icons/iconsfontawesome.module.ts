import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
  faEdit,
  faFilter,
  faHome,
  faPencilAlt,
  faPlus,
  faTag,
  faTimes,
  faTrash,
  faUser,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsFontawesomeModule {
  constructor(faIconLibrary: FaIconLibrary){
    faIconLibrary.addIcons(
      faGithub,
      faLinkedin,
      faInstagram,
      faEdit,
      faPlus,
      faTrash,
      faTimes,
      faFilter,
      faHome,
      faUserCircle,
      faTag,
      faPencilAlt
    );
  }
}
