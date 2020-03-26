    <div className=" container ">
        <div className="row">
            <div className="col-lg-3">
                <h1 className="my-4">Utapes.co</h1>
                <input type="text" className="form-control" name="find" value={this.state.find} onChange={this.bind} onKeyUp={this.Search} required placeholder="Pencarian.." />
                <hr></hr>
                <h4>Category</h4>
                <form onSubmit={this.Filter}>
                    <div className="form-group">
                        <select className="form-control" name="filter" value={this.state.value} onChange={this.bind} >
                            <option value="">Choose...</option>
                            <option value="locks">Under Armour</option>
                            <option value="iotm">Nike</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-info pull-right m-2"> Filter
                                                                </button>
                </form>
            </div>
            <div className="col-lg-9">
                <div id="slideshow" className="carousel slide my-4" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slideshow" data-slide-to="0" className="active"></li>
                        <li data-target="#slideshow" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src={Slide1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={Slide2} alt="Second slide" />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#slideshow" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="row">
                    {renderData}
                    <hr></hr>
                    <Link to="/checkout">
                        <button className="btn btn-success float-right">
                            <span className="fa fa-check"></span> Checkout
                                                                </button>
                    </Link>
                    <Link to="/cart">
                        <button className="btn btn-dark float-right" style={{ marginRight: "10px" }}>
                            <span className="fa fa-cart-plus"></span> View Cart
                                                                </button>
                    </Link><br /><br /><br />
                </div>
            </div>
        </div>
    </div>