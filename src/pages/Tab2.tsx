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
    ReactDOM.render(<><IonButton id="bingoFieldBtn">  {vars[0]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[1]} </IonButton>  <IonButton id="bingoFieldBtn">  {vars[2]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[3]} </IonButton></>, document.getElementById("firstRow"));
    ReactDOM.render(<><IonButton id="bingoFieldBtn">  {vars[4]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[5]} </IonButton>  <IonButton id="bingoFieldBtn">  {vars[6]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[7]} </IonButton></>, document.getElementById("secondRow"));
    ReactDOM.render(<><IonButton id="bingoFieldBtn">  {vars[8]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[9]} </IonButton>  <IonButton id="bingoFieldBtn">  {vars[10]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[11]} </IonButton></>, document.getElementById("thirdRow"));
    ReactDOM.render(<><IonButton id="bingoFieldBtn">  {vars[12]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[13]} </IonButton>  <IonButton id="bingoFieldBtn">  {vars[14]} </IonButton> <IonButton id="bingoFieldBtn">  {vars[15]} </IonButton></>, document.getElementById("forthRow"));
  
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
          <IonContent scrollX scrollY>
              <IonGrid fixed>
                <IonRow id="firstRow">
                </IonRow>
                <IonRow id="secondRow">
                </IonRow>
                <IonRow id="thirdRow">
                </IonRow>
                <IonRow id="forthRow">
                </IonRow>
              </IonGrid>
          </IonContent>
          <IonButton onClick={randomize} id="losowaniebtn" color="danger">
          Losuj
          </IonButton>
        </IonTabButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
