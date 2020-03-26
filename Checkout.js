// import React, {Component,Fragment} from "react"

// export default class Checkout extends Component{
//     render(){return(<Fragment>
//         <div>
//   <meta charSet="utf-8" />
//   <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1, shrink-to-fit=no"
//   />
//   <meta name="description" content />
//   <meta name="author" content />
//   <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico" />
//   <title>Checkout example for Bootstrap</title>
//   <link
//     rel="canonical"
//     href="https://getbootstrap.com/docs/4.0/examples/checkout/"
//   />
//   {/* Bootstrap core CSS */}
//   <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />
//   {/* Custom styles for this template */}
//   <link href="form-validation.css" rel="stylesheet" />
//   <div className="container">
//     <div className="py-5 text-center">
//     <h2>Checkout</h2>
//     </div>
//     <div className="row">
//       <div className="col-md-4 order-md-2 mb-4">
//         <h4 className="d-flex justify-content-between align-items-center mb-3">
//           <span className="text-muted">Keranjang</span>
//           <span className="badge badge-secondary badge-pill">3</span>
//         </h4>
//         <ul className="list-group mb-3">
//           <li className="list-group-item d-flex justify-content-between lh-condensed">
//             <div>
//               <h6 className="my-0">Sepatu Sneakers Basket Nike Air Jordan 1 Mid SE De</h6>
//               <small className="text-muted">Size : 42</small>
//             </div>
//             <span className="text-muted">IDR 2549000</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between lh-condensed">
//             <div>
//               <h6 className="my-0">SEPATU BASKET ARDILES DBL - AD1 RED</h6>
//               <small className="text-muted">Size : 39,43</small>
//             </div>
//             <span className="text-muted">IDR 660000</span>
//           </li>
          
//           <li className="list-group-item d-flex justify-content-between">
//             <span>Total (IDR)</span>
//             <strong>IDR 3209000</strong>
//           </li>
//         </ul>
//         <form className="card p-2">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Promo code"
//             />
//             <div className="input-group-append">
//               <button type="submit" className="btn btn-secondary">
//                 Redeem
//               </button>
//             </div>
//           </div>
//         </form>
//         <form className="card p-2">
//         <button className="btn btn-primary btn-lg btn-block" type="submit">
//             Continue to checkout
//           </button>
//         </form>
//       </div>
//       <div className="col-md-8 order-md-1">
//         <h4 className="mb-3">Alamat Yang Akan Dituju</h4>
//         <form className="needs-validation" noValidate>
//           <div className="row">
//             <div className="invalid-feedback">
//               Tolong Masukkan alamat lengkap
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="nama">Nama Penerima</label>
//             <input
//               type="text"
//               className="form-control"
//               id="nama"
//               placeholder="Masukkan Nama Anda"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="address">Alamat</label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               placeholder="Masukkan alamat lengkap"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="KodePos">Kode Pos</label>
//             <input
//               type="text"
//               className="form-control"
//               id="KodePos"
//               placeholder="masukkan kode pos"
//               required
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//     <footer className="my-5 pt-5 text-muted text-center text-small"></footer>
//   </div>
 
// </div>

// </Fragment>)}}

  
import React, { Component } from 'react'
import $ from "jquery";
import axios from "axios";
	

	
class Checkout extends Component {
	  constructor(props) {
	    super(props)
	    this.state = {
	      carts: [],
	      num: 0,
	      total: 0,
	      alamat: [],
	            id: "",
	            nama: "",
	            kodepos: "",
	            kecamatan: "",
	            kota: "",
	            jalan: "",
	            rt: "",
	            rw: "",
	            message: "",
	            action: "",
	            find: "",
	            message: ""
	    }
	

	

	    }
	

	

	  getCarts = () => {
	    let items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
	let total = 0
	let num = 0
	items.forEach(item => {
	  total += item.total
	  num += item.stok
	});
	this.setState({
	  carts: items,
	  num: num,
	  total: total
	});
	

	

	  }
	

	  componentDidMount() {
	    this.getCarts()
	    this.get_alamat();
	  }
	

	  removeFromCart = (produk) => {
	    let carts = JSON.parse(localStorage.getItem('cart'));
	    let cart = carts.filter(item => item.id !== produk.id );
	    localStorage.setItem('cart', JSON.stringify(cart));
	    this.getCarts()
	

	

	  }
	  clearCart = () => {
	    localStorage.removeItem('cart');
	    this.setState({carts: []});
	

	  }
	

	  get_alamat = () => {
	    let id = JSON.parse(localStorage.getItem('id'))
	    let url = "http://localhost:8080/onlen/public/alamat/"+id;
	    axios.get(url)
	    .then(response => {
	      this.setState({
	        alamat: response.data.alamat,
	      });
	    })
	    .catch(error => {
	      console.log(error);
	    });
	  }
	

	render(){
	   const { carts, num, total, alamat} =  this.state;
	   console.log(alamat);
	   return(
	     <div>
	       <div className="container">
	         <div className="py-5 text-center">
	           <h2>Checkout</h2>
	         </div>
	         <div className="row">
	

	         { !carts.length ?
	

	         <div className="col-md-4 order-md-2 mb-4">
	             <h4 className="d-flex justify-content-between align-items-center mb-3">
	               <span className="text-muted">Your cart</span>
	               <span className="badge badge-warning badge-pill">0</span>
	             </h4>
	             <ul className="list-group mb-3">
	                 <div>
	                 <h3 className="text-warning">No item on the cart</h3>
	                 </div>
	                 <li className="list-group-item d-flex justify-content-between">
	                   <span>Total (IDR)</span>
	                   <strong>Rp.0</strong>
	                 </li>
	                 <button className="btn btn-danger float-right" onClick={this.clearCart}
	                     style={{ marginRight: "0px", marginTop:"10px" }}><span className="fa fa-trash"></span> Clear Cart
	                 </button>
	

	              </ul>
	           </div>
	          :
	

	           <div className="col-md-4 order-md-2 mb-4">
	             <h4 className="d-flex justify-content-between align-items-center mb-3">
	               <span className="text-muted">Your cart</span>
	               <span className="badge badge-secondary badge-pill">{num}</span>
	             </h4>
	             <ul className="list-group mb-3">
	                 <div>{carts.map((produk, index) =>
	                   <div key={index}>
	                     <li className="list-group-item d-flex justify-content-between lh-condensed">
	                       <div>
	                         <h6 className="my-0">{produk.nama_produk}</h6>
	                         <small className="text-muted">Harga {produk.harga}</small>
	                       </div>
	                       <span className="text-muted">Rp.{produk.total}</span>
	                       <button className="btn btn-sm btn-warning"
	                         onClick={() => this.removeFromCart(produk)}><span className="fa fa-times-circle"></span> Remove
	                       </button>
	                     </li>
	                   </div>
	                   )}
	                 </div>
	

	                 { carts.length ?
	                 <li className="list-group-item d-flex justify-content-between">
	                   <span>Total (IDR)</span>
	                   <strong>Rp.{total}</strong>
	                 </li>: ''
	                 }
	                 <button className="btn btn-danger float-right" onClick={this.clearCart}
	                     style={{ marginRight: "0px", marginTop:"10px" }}><span className="fa fa-trash"></span> Clear Cart
	                 </button>
	              </ul>
	           </div>
	           }
	

	

	           <div className="col-md-8 order-md-1">
	             <h4 className="mb-3">Pilih Alamat yang Akan dituju</h4>
	             <form className="needs-validation" noValidate>
	

	               <div className="row">
	                 <div className="col mb-3 md-3">
	                 <label htmlFor="state">Alamat</label>
	                    <select className="form-control" name="role" value={this.state.value} onChange={this.bind} required>
	                    {this.state.alamat.map((item) => {
	                  return(
	                    <option value="{item.id}">{item.jalan}</option>
	                    )})}
	                  </select>
	                   <div className="invalid-feedback">
	                     Please select a valid country.
	                   </div>
	                 </div>
	               </div>
	

	               <hr className="mb-4" />
	               <button className="btn btn-warning btn-lg btn-block" type="submit" style={{marginTop:"110px"}}>
	                 Continue to checkout
	               </button>
	             </form>
	           </div>
	         </div>
	       </div>
	     </div>
	   );
	 }
	

	

	    }

export default Checkout