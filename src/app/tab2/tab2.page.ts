import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonItem , IonLabel, IonChip ,IonIcon , IonAvatar,IonDatetime,IonInput,IonList} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { addIcons ,} from 'ionicons';
import { close, closeCircle, pin, } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonItem , IonLabel,IonChip, IonIcon,IonAvatar, IonDatetime,IonInput,IonList],
})
export class Tab2Page {

  constructor() {addIcons({ close, closeCircle, pin });

}
isWeekday = (dateString: string) => {
  const date = new Date(dateString);
  const utcDay = date.getUTCDay();

  /**
   * Date will be enabled if it is not
   * Sunday or Saturday
   */
  return utcDay !== 0 && utcDay !== 6;
};

}
