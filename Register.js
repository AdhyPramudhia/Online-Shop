import React,{Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import $ from "jquery";
import Toast from "../component/Toast";

export default class Product extends Component {

    constructor() {
        super();
        this.state = {
            action:"insert",
            id_user:"",
            nama_user:"",
            email:"",
            password:"",
            password2: "",
            role:"user",
            message:""

        }
    }

    bind = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Save = (event) => {
        event.preventDefault();
        let url = "http://localhost/onlen/public/user/register";
        let form = new FormData();
        form.append("action", this.state.action);
        form.append("id_user", this.state.id_user);
        form.append("nama_user", this.state.nama_user);
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        form.append("role", this.state.role);
        // form.append("image", this.state.image, this.state.image.name);
        axios.post(url, form)
  
        .then(response => {
          this.setState({message: response.data.message});
          $("#message").toast("show");
          window.location = "/login";
        })
        .catch(error => {
          console.log(error);
        });
      }

    render() {
        return (
          <div className="container" style={{width: 24 + "rem", paddingTop : 6 + '%'}}>
        <div className="card-body">
          <div className="# ">
            <h2 className="#" style={{textAlign: "center"}}>Register User</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.Save}>
               Nama
               <input type="text" className="form-control" name="nama_user"
                 value={this.state.nama_user} onChange={this.bind} required />
               Email
               <input type="email" className="form-control" name="email"
                 value={this.state.email} onChange={this.bind} required />
               Password
               <input type="password" className="form-control" name="password"
                 value={this.state.password} onChange={this.bind} required />
               Check Password
               <input type="password" className="form-control" name="password2"
                 value={this.state.password2} onChange={this.bind} required />  
                {/* Foto
               <input type="file" className="form-control" name="image"
                onChange={this.bindImage} />  */}
            
              <button type="submit" className="btn btn-info pull-right m-2" >
                 <span className="fa fa-check"></span> Simpan
               </button>
              </form>
              <Link to="/login">
                  Sudah punya akun?
              </Link>
              <Toast id="message" autohide="true" title="Informasi">
                {this.state.message} 
              </Toast>
            </div>
          </div>
        </div>
        );
    }

    


}