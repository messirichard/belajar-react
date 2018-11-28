import React, { Component } from 'react';
import logo from '../../asset/img/logo-headers.png';
import './header.scss';

class Header extends Component{
    render(){
      return(
        <header className="head homepage_head">
          <div className="prelatife container-fluid inner-header">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="logosn-headers d-none d-sm-block">
                  <a href="_"><img src={logo} alt="" className="img img-fluid d-block" /></a>
                </div>
                <div className="logosn-headers d-block d-sm-none">
                  <a href="_"><img src={logo} alt="" className="img img-fluid d-block" /></a>
                </div>
              </div>
              <div className="col-md-9 col-sm-8">
                <nav className="navbar navbar-light d-block d-sm-none mt--15percent mr--20">
                  <button className="float-right nav-black" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon color-black"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExample01">
                    <ul className="navbar-nav ml-auto mt-70">
                      <li className="list-inline-item menu-responsive  active  "><a href="_">Home</a></li>
                      <li className="list-inline-item menu-responsive "><a href="_">About</a></li>
                      <li className="list-inline-item menu-responsive "><a href="_">HORISONTAL Packaging Machines &amp; Solutions</a></li>
                      <li className="list-inline-item menu-responsive "><a href="_">Part &amp; Accessories Supplies</a></li>
                      <li className="list-inline-item menu-responsive "><a href="_">Quality STATEMENT</a></li>
                      <li className="list-inline-item menu-responsive "><a href="_">Contact Us</a></li>
                    </ul>
                  </div>
                </nav>
                <div className="tops_head text-right pb-2 d-none d-sm-block">
                  <div className="d-inline-block text-right phones_headr p-1 pl-2 pr-2 rounded mr-3">
                    <i className="fa fa-phone fa-flip-horizontal"></i> &nbsp;+62 031-51500022  / <a href="https://wa.me/6287853008666">Whatsapp +62 878-5300-8666</a> 
                  </div>
                  <div className="d-inline-block languages_text text-right padding-left-15">
                    LANGUAGE: &nbsp;
                    <a className="active" href="_">EN</a>
                    &nbsp;|&nbsp; 
                    <a href="_">IN</a>
                  </div>
                </div>
                <div className="menu-headers d-none d-sm-block">
                  <ul className="list-inline">
                    <li className="list-inline-item  active "><a href="_">Home</a></li>
                    <li className="list-inline-item "><a href="_">About</a></li>
                    <li className="list-inline-item "><a href="_">HORISONTAL Packaging Machines &amp; Solutions</a></li>
                    <li className="list-inline-item "><a href="_">Part &amp; Accessories Supplies</a></li>
                    <li className="list-inline-item "><a href="_">Quality STATEMENT</a></li>
                    <li className="list-inline-item "><a href="_">Contact Us</a></li>
                  </ul>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

      )
    }
}


export default Header;


