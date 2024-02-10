import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg } from '@ionic/react';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/styles/style.css';
import './Annonce.css';
import { useHistory } from 'react-router';
const Annonce: React.FC = ({  }) => {
    return (
      <IonCard className="card card-box annonce" routerLink='/details'>
				<img className="card-img-top" src="./assets/vendors/images/voiture.jpg"alt="Card image cap"/>
				<div className="card-body">
          <h5 className="card-title weight-500">Voiture</h5>
					<p className="card-text">Some quick example text to build on the card title.</p>
				</div>
			</IonCard>
    );
};
  
export default Annonce;