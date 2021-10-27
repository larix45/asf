import { IonButton, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ReactDOM from 'react-dom';
import shuffle from '../hooks/randomizeArray';


const Tab2: React.FC = () => {
  const randomize = async() => {
    let vars = ["Ataki na Bartka", "Wracając...", "Coś nie działa", "Rozpakowanie", "To wam na schemacie pokaże", "Referat", "Pytanie retoryczne"]
    //let vars = ["ad",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
    vars = shuffle(vars)
    ReactDOM.render(<><IonButton>  {vars[0]} </IonButton> <IonButton>  {vars[1]} </IonButton>  <IonButton>  {vars[2]} </IonButton> <IonButton>  {vars[3]} </IonButton></>, document.getElementById("firstRow"));
    ReactDOM.render(<><IonButton>  {vars[4]} </IonButton> <IonButton>  {vars[5]} </IonButton>  <IonButton>  {vars[6]} </IonButton> <IonButton>  {vars[7]} </IonButton></>, document.getElementById("secondRow"));
    ReactDOM.render(<><IonButton>  {vars[8]} </IonButton> <IonButton>  {vars[9]} </IonButton>  <IonButton>  {vars[10]} </IonButton> <IonButton>  {vars[11]} </IonButton></>, document.getElementById("thirdRow"));
    ReactDOM.render(<><IonButton>  {vars[12]} </IonButton> <IonButton>  {vars[13]} </IonButton>  <IonButton>  {vars[14]} </IonButton> <IonButton>  {vars[15]} </IonButton></>, document.getElementById("forthRow"));
  
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Losowanie Bingo Biologia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTabButton>
          <IonGrid>
            <IonRow id="firstRow">
            </IonRow>
            <IonRow id="secondRow">
            </IonRow>
            <IonRow id="thirdRow">
            </IonRow>
            <IonRow id="forthRow">
            </IonRow>
          </IonGrid>
          <IonButton onClick={randomize} id="losowaniebtn" color="danger">
          Losuj
          </IonButton>
        </IonTabButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
