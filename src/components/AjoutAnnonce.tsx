import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/styles/style.css';
import './AjoutAnnonce.css';
import { pencil } from 'ionicons/icons';
const AjoutAnnonce: React.FC = ({  }) => {
    return (
        <IonCard className="card card-box detail">
            <h2>Ajout d'annonce de voiture</h2>
			<form>
                <h5>Informations de base</h5>
                <section>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Voiture</label>
                        <div className="col-sm-12 col-md-10">
                            <select className="custom-select col-12">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    
                </section>
            </form>
            
		</IonCard>
    );
  };
  
  export default AjoutAnnonce;