import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonImg } from '@ionic/react';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/styles/style.css';
import './AjoutAnnonce.css';
import { pencil } from 'ionicons/icons';
const AjoutVoiture: React.FC = ({  }) => {
    return (
        <IonCard className="card card-box detail">
            <h2>Ajout de voiture</h2>
			<form>
                <h5>Informations de base</h5>
                <section>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Type</label>
                        <div className="col-sm-12 col-md-10">
                            <select className="custom-select col-12">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Marque</label>
                        <div className="col-sm-12 col-md-10">
                            <select className="custom-select col-12">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Modele</label>
                        <div className="col-sm-12 col-md-10">
                            <select className="custom-select col-12">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Annee</label>
                        <div className="col-sm-12 col-md-10">
                            <input className="form-control" type="number" placeholder="Johnny Brown"/>
                        </div>
                    </div>
                </section>

                <h5>Details</h5>
                <section>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Energie</label>
                        <div className="col-sm-12 col-md-10">
                            <select className="custom-select col-12">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Boite de Vitesse</label>
                        <div className="col-sm-12 col-md-10">
                            <select className="custom-select col-12">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Kilometrage</label>
                        <div className="col-sm-12 col-md-10">
                            <input className="form-control" type="number" placeholder="Johnny Brown"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Couleur</label>
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

                <h5>Autres details</h5>
                <section>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Provenance</label>
                        <div className="col-sm-12 col-md-10">
                            <select className="custom-select col-12">
                                <option>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Nombre de places</label>
                        <div className="col-sm-12 col-md-10">
                            <input className="form-control" type="number" placeholder="Johnny Brown"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Nombre de portes</label>
                        <div className="col-sm-12 col-md-10">
                            <input className="form-control" type="number" placeholder="Johnny Brown"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-12 col-md-2 col-form-label">Prix</label>
                        <div className="col-sm-12 col-md-10">
                            <input className="form-control" type="text" placeholder="Johnny Brown"/>
                        </div>
                    </div>
                </section>

                <h5>Descriptions</h5>
                <section>
                    <div className="form-group">
                        <label>Textarea</label>
                        <textarea className="form-control"></textarea>
                    </div>
                </section>
            </form>
            
		</IonCard>
    );
  };
  
  export default AjoutVoiture;