import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
// import Image from '../image/Slide1.jpg';
import Modal from "../component/Modal";
import Toast from "../component/Toast";

class Profil extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      id_user: "",
      email: "",
      password: "",
      nama_user: "",
      role: "user",
      no_ktp: "",
      nama_lengkap: "",
      jenis_kelamin: "",
      tanggal_lahir: "",
      image: null,
      nohp: "",
      action: "",
      find: "",
      message: "",

      alamat: [],
      id: "",
      id_user: "",
      nama: "",
      alamat_lengkap: "",
      kodepos: "",
      kecamatan: "",
      kota: "",
      rt: "",
      rw: "",
    }

    if (!localStorage.getItem("Token")) {
      // direct ke halaman login
      window.location = "/login";
    }
  }
  bind = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  bindImage = (e) => {
    this.setState({ image: e.target.files[0] })
  }
  Edit = (item) => {
    // membuka modal
    $("#modal_user").modal("show");
    // mengisikan data pada form
    this.setState({
      action: "update",
      id_user: item.id_user,
      nama_user: item.nama_user,
      nama_lengkap: item.nama_lengkap,
      no_ktp: item.no_ktp,
      jenis_kelamin: item.jenis_kelamin,
      tanggal_lahir: item.tanggal_lahir,
      image: item.image,
      nohp: item.nohp,
    });
  }
  Update = (alamat) => {
    // membuka modal
    $("#modal_user").modal("show");
    // mengisikan data pada form
    this.setState({
      id: alamat.id,
      id_user: alamat.id_user,
      nama: alamat.nama,
      alamat_lengkap: alamat.alamat_lengkap,
      kodepos: alamat.kodepos,
      kecamatan: alamat.kecamatan,
      kota: alamat.kota,
      rt: alamat.rt,
      rw: alamat.rw,
    });
  }

  getAlamat = () => {
    // $("#loading").toast("show");
    let id = JSON.parse(localStorage.getItem('id_user'))
    // console.log(items)
    let url = "http://localhost/onlen/public/alamat/" + id;
    axios.get(url)
      .then(response => {
        // $("#loading").toast("hide");
        this.setState({
          user: response.data.user,
        });
        // $("#message").toast("show");
      })
      .catch(error => {
        console.log(error);
      });
    // this.setState({
    //   user: items,
    //   id_user: items.id_user
    // });
  }
  componentDidMount = () => {
    this.getAlamat();
  }

  Simpan = (event) => {
    console.log(this.state.id_user)
    event.preventDefault();
    // menampilkan proses loading
    // $("#loading").toast("show");
    // menutup form modal
    $("#modal_user").modal("hide");
    let url = "http://localhost/onlen/public/alamat/save";
    let form = new FormData();
    form.append("action", this.state.action);
    form.append("id", this.state.id);
    form.append("id_user", this.state.id_user);
    form.append("nama", this.state.nama);
    form.append("alamat_lengkap", this.state.alamat_lengkap);
    form.append("kodepos", this.state.kodepos);
    form.append("kecamatan", this.state.kecamatan);
    form.append("kota", this.state.kota);
    form.append("rt", this.state.rt);
    form.append("rw", this.state.rw);
    axios.post(url, form)
      .then(response => {
        // $("#loading").toast("hide");
        this.setState({
          message: response.data.message
        });
        $("#message").toast("show");
        this.get_user();
      })
      .catch(error => {
        console.log(error);
      });
  }



  get_user = () => {
    // $("#loading").toast("show");
    let id = JSON.parse(localStorage.getItem('id_user'))
    // console.log(items)
    let url = "http://localhost/onlen/public/user/" + id;
    axios.get(url)
      .then(response => {
        // $("#loading").toast("hide");
        this.setState({
          user: response.data.user,
        });
        // $("#message").toast("show");
      })
      .catch(error => {
        console.log(error);
      });
    // this.setState({
    //   user: items,
    //   id_user: items.id_user
    // });
  }
  componentDidMount = () => {
    this.get_user();
  }

  Save = (event) => {
    console.log(this.state.id_user)
    event.preventDefault();
    // menampilkan proses loading
    // $("#loading").toast("show");
    // menutup form modal
    $("#modal_user").modal("hide");
    let url = "http://localhost/onlen/public/user/save_profil";
    let form = new FormData();
    form.append("action", this.state.action);
    form.append("id_user", this.state.id_user);
    form.append("email", this.state.email);
    form.append("password", this.state.password);
    form.append("role", this.state.role);
    form.append("nama_user", this.state.nama_user);
    form.append("nama_lengkap", this.state.nama_lengkap);
    form.append("no_ktp", this.state.no_ktp);
    form.append("jenis_kelamin", this.state.jenis_kelamin);
    form.append("tanggal_lahir", this.state.tanggal_lahir);
    form.append("nohp", this.state.nohp);
    form.append("image", this.state.image, this.state.image.name);
    axios.post(url, form)
      .then(response => {
        // $("#loading").toast("hide");
        this.setState({
          message: response.data.message
        });
        $("#message").toast("show");
        this.get_user();
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { user, email } = this.state;
    console.log(user)
    console.log(email);
    return (
      <div className="container">
        <div className="card mt-2">
          <div style={{ paddingTop: "5%", paddingLeft: "7%" }}>
            <div className="#" style={{ maxwidth: "200px" }}>
              <div className="row no-gutters">
                {user.map((item, index) => {
                  return (
                    <div className="col-md-4">
                      <img className="rounded float-left" src={'http://localhost/onlen/public/images/' + item.image}
                        style={{ height: "300px", width: "260px" }} />
                    </div>
                  );
                })}

                <div style={{ paddingTop: "0%", paddingLeft: "0%" }}>
                  <div className="card-body" cols="">
                    <h4 className="card-title" style={{ fontWeight: "700" }}>Profile</h4>
                    <table className="table table-borderless">
                      {user.map((item, index) => {
                        return (
                          <ul class="list-group" key={index}>
                            <li cols="100" class="list-group-item">Username : {item.nama_user}</li>
                            <li class="list-group-item">Email : {item.email}</li>
                            <li class="list-group-item">Nama Lengkap : {item.nama_lengkap}</li>
                            <li class="list-group-item">No Ktp : {item.no_ktp}</li>
                            <li class="list-group-item">Jenis Kelamin : {item.jenis_kelamin}</li>
                            <li class="list-group-item">Tanggal Lahir : {item.tanggal_lahir}</li>
                            <li class="list-group-item">No Hp : +62{item.nohp}</li>
                            <button className="m-1 btn btn-sm btn-outline-dark" onClick={() => this.Edit(item)}>
                              <span className="fa fa-edit"></span>Edit
                      </button>
                          </ul>
                        );
                      })}
                    </table>
                  </div>
                  <Modal id="modal_user" title="Form User" bg_header="success"
                    text_header="white">
                    <form onSubmit={this.Save}>

                      Username
                       <input type="text" className="form-control" name="nama_user"
                        value={this.state.nama_user} onChange={this.bind} required />

                      Nama Lengkap
                       <input type="text" className="form-control" name="nama_lengkap"
                        value={this.state.nama_lengkap} onChange={this.bind} required />

                      No KTP
                       <input type="text" className="form-control" name="no_ktp"
                        value={this.state.no_ktp} onChange={this.bind} required />

                      Jenis Kelamin
                       <input type="enum" className="form-control" name="jenis_kelamin"
                        value={this.state.jenis_kelamin} onChange={this.bind} required />

                      Tanggal Lahir
                       <input type="date" className="form-control" name="tanggal_lahir"
                        value={this.state.tanggal_lahir} onChange={this.bind} required />

                      No HP
                       <input type="text" className="form-control" name="nohp"
                        value={this.state.nohp} onChange={this.bind} required />
                      Gambar
                                <tr>
                        <input type="file" className="file-control" name="image"
                          onChange={this.bindImage} required />
                      </tr>
                      <button type="submit" className="btn btn-info pull-right m-2">
                        <span className="fa fa-check"></span> Simpan
                       </button>

                    </form>
                       <button onClick={() => console.log(this.state)}>get</button>
                  </Modal>
                  {this.state.user.map((echo, index) => {
                    return (
                      <ul class="list-group" key={index}>
                        <li cols="100" class="list-group-item">Username : {echo.nama_user}</li>
                        <li class="list-group-item">Alamat Lengkap : {echo.alamat}</li>
                        <li class="list-group-item">Nama Lengkap : {echo.nama_lengkap}</li>
                        <li class="list-group-item">No Ktp : {echo.no_ktp}</li>
                        <li class="list-group-item">Jenis Kelamin : {echo.jenis_kelamin}</li>
                        <li class="list-group-item">Tanggal Lahir : {echo.tanggal_lahir}</li>
                        <li class="list-group-item">No Hp : +62{echo.nohp}</li>
                        <li class="list-group-item">Gambar : {echo.Image}</li>
                        <button className="m-1 btn btn-sm btn-outline-dark" onClick={() => this.Edit(echo)}>
                          <span className="fa fa-edit"></span>Edit
                      </button>
                      </ul>
                    );
                  })}
                </div>
                <div className="card-body">
                </div>
                <Modal id="modal_user" title="Form User" bg_header="success"
                  text_header="white">
                  <form onSubmit={this.Save}>
                    Nama Penerima
                   <input type="text" className="form-control" name="nama"
                      value={this.state.nama} onChange={this.bind} required />
                    Alamat Lengkap
                   <input type="text" className="form-control" name="alamat_lengkap"
                      value={this.state.alamat_lengkap} onChange={this.bind} required />
                    Kode POS
                   <input type="text" className="form-control" name="kodepos"
                      value={this.state.kodepos} onChange={this.bind} required />
                    Kecamatan
                   <input type="enum" className="form-control" name="kecamatan"
                      value={this.state.kecamatan} onChange={this.bind} required />
                    Kota
                   <input type="date" className="form-control" name="kota"
                      value={this.state.kota} onChange={this.bind} required />
                    Rt
                   <input type="text" className="form-control" name="rt"
                      value={this.state.rt} onChange={this.bind} required />
                    Rw
                   <input type="date" className="form-control" name="rw"
                      value={this.state.rw} onChange={this.bind} required />
                    <button type="submit" className="btn btn-info pull-right m-2">
                      <span className="fa fa-check"></span> Simpan
                   </button>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }



}
export default Profil;