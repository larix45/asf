import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { addSharp, bagAddSharp } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  const asd = async() => {alert("asd"); updateCnt(cnt + 1)};
  const [cnt, updateCnt] = useState(100);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> {cnt} </IonTitle>
          <IonButton onClick={asd}>CHANGE NAME</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
