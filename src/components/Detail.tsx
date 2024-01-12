import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/styles/style.css';
import './Details.css';
import { pencil } from 'ionicons/icons';
const Detail: React.FC = ({  }) => {
    return (
      <IonCard className="card card-box detail" routerLink='/details'>
			<img className="card-img-top" src="./assets/vendors/images/img4.jpg"alt="Card image cap"/>
			<div className="card-body">
            <h5 className="card-title weight-500">Card title</h5>
			<p className="card-text">Some quick example text to build on the card title.</p>
            <IonButton>
                <IonIcon slot="start" icon={pencil}></IonIcon>
                Modifier Statut
            </IonButton>
			</div>
		</IonCard>
    );
  };
  
  export default Detail;