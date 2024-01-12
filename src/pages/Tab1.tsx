import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid , IonRow, IonCol, IonCardTitle, IonButtons, IonMenuButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import '../assets/vendors/styles/icon-font.min.css';
import '../assets/vendors/styles/style.css';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/scripts/jquery.min.js';
import '../assets/custom/script/mainScript.js';
import Annonce from '../components/Annonce';
import MenuSide from '../components/MenuSide';

const Tab1: React.FC = () => {
  return (
    <>
    <MenuSide></MenuSide>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>FiaraOccaz</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen scrollEvents>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">FiaraOccaz</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonCardTitle><h1>Annonce: voiture a vendre</h1></IonCardTitle>
          <IonGrid>
            <IonRow className="scroll">
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonCardTitle><h1>Annonce: voiture vendu</h1></IonCardTitle>
          <IonGrid>
            <IonRow className="scroll">
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
              <IonCol>
                <Annonce/>
              </IonCol>
            </IonRow>
          </IonGrid>
        
      </IonContent>
    </IonPage>
    </>
  );
};



export default Tab1;
