import React, { Component } from 'react';



class Header extends Component{
    render(){
      return(
        <header class="home homepage_head">
          <div class="prelatife container-fluid inner-header">
            <div class="row">
              <div class="col-md-3 col-sm-4">
                <div class="logosn-headers">
                  <a href="_"><img src="" alt="" class="img img-fluid d-block" /></a>
                </div>
                <div class="logosn-headers d-block d-sm-none">
                  <a href="_"><img src="" alt="" class="img img-fluid d-block" /></a>
                </div>
              </div>  
              <div class="tops_head text-right pb-2">
                <div class="d-inline-block text-right phones_headr p-1 pl-2 pr-2 rounded">
                  <i class="fa fa-phone fa-flip-horizontal"></i> &nbsp;+62 031-51500022  / <a href="https://wa.me/6287853008666">Whatsapp +62 878-5300-8666</a> 
                </div>
                <div class="d-inline-block languages_text text-right padding-left-15">
                  LANGUAGE: &nbsp;
                  <a class="active" href="_">EN</a>
                  &nbsp;|&nbsp; 
                  <a href="_">IN</a>
                </div>
              </div>
              <div class="menu-headers">
                <ul class="list-inline">
                  <li class="list-inline-item"><a href="_">Home</a></li>
                  <li class="list-inline-item"><a href="_">About</a></li>
                  <li class="list-inline-item"><a href="_">HORISONTAL Packaging Machines & Solutions</a></li>
                  <li class="list-inline-item"><a href="_">Part & Accessories Supplies</a></li>
                  <li class="list-inline-item"><a href="_">Quality STATEMENT</a></li>
                  <li class="list-inline-item"><a href="_">Contact Us</a></li>
                </ul>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </header>
      )
    }
}


export default Header;