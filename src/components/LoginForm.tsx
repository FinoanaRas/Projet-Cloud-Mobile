import { IonButton } from '@ionic/react';
import '../assets/vendors/styles/core.css';
import '../assets/vendors/styles/style.css';
import UserService from '../services/UserService';import { useState } from 'react';
import { useHistory } from 'react-router';
 '../services/UserService'

const LoginForm: React.FC = () => {
    const history = useHistory();
    const[email,setEmail] = useState();
    const[motDePasse,setMotDePasse] = useState();
   
    const login = () => {
        history.push("/");
    }
    // const login = (e: any) => {
    //     e.preventDefault();
    //     console.log("aaa")
    
    //     UserService.loginUser(email,motDePasse).then(res => {
    //         if(res.data.token==null){
    //             alert("Vous n'êtes pas inscrit sur notre site");
    //         }else{
    //             if(res.data.token=='invalid'){
    //                 alert('connexion invalid');
    //             }else{
    //                 if(res.data.status == 10){
    //                     console.log(res.data.user);
    //                     // sessionStorage.setItem("utilisateur",res.data.user);
    //                     // sessionStorage.setItem("token",res.data.token);
    //                     // sessionStorage.setItem("user",res.data.name);
    //                     localStorage.setItem("utilisateur",res.data.user);
    //                     localStorage.setItem("user",res.data.name);
    //                     localStorage.setItem("token",res.data.token);
    //                     history.push("/tab1");
    //                 }else{
    //                     alert("Erreur");
    //                 }
    //             }
    //         }
    //     });
    // }

    const handleEmail= (e: any) => {
        var value = e.target.value;
		console.log(value +"e")
        setEmail(value);
    }

	const handleMotDePasse= (e: any) => {
        var value = e.target.value;
        setMotDePasse(value);
    }
    return (
        <div className="container">
            <h1>Connectez - vous</h1>
            <form onSubmit={login}>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" placeholder="" type="email" onChange={handleEmail}/>
                </div>
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input className="form-control" type="password" placeholder="" onChange={handleMotDePasse}/>
                </div>
                <input className="form-control" type="submit" value="se connecter" />
            </form>
        </div>
    );
  };
  
  export default LoginForm;

