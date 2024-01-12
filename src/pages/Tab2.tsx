import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import MenuSide from '../components/MenuSide';

const Tab2: React.FC = () => {
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
    
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab2;
