import { IonButton } from '@ionic/react';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/styles/style.css';
import { App } from '@capacitor/app';


const LoginForm: React.FC = () => {
    return (
        <div className="container">
            <h1>Connectez - vous</h1>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" placeholder="bootstrap@example.com" type="email"/>
                </div>
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input className="form-control" type="password" placeholder=""/>
                </div>
                <IonButton routerLink='/tab1'>Se connecter</IonButton>
            </form>
        </div>
    );
  };
  
  export default LoginForm;