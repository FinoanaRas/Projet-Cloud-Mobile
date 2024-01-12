import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid , IonRow, IonCol, IonCardTitle, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../assets/vendors/styles/icon-font.min.css';
import '../assets/vendors/styles/style.css';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/scripts/jquery.min.js';
import '../assets/custom/script/mainScript.js';
import MenuSide from '../components/MenuSide';
import Detail from '../components/Detail';

const DetailsPage: React.FC = () => {
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
            <Detail/>
        
      </IonContent>
    </IonPage>
    </>
  );
};



export default DetailsPage;
