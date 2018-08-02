<template>
	<section class="footer">
  	<div class="wrapper">
      <h4>Contra Studios</h4>
      <!-- <a class="logoWrapper" href="/">
        <img class="footerLogo" src="../assets/images/logo.svg">
      </a> -->
      <ul class="footerList">
        <li><a href="/">About</a></li><span>&#124;</span>
        <li><a href="/">Menu</a></li><span>&#124;</span>
        <li><a href="/">Reservation</a></li><span>&#124;</span>
        <li><a href="/">Functions</a></li><span>&#124;</span>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  </section>


</template>


<style>

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: #5D5652; /*This color Needs to be matched to scheme*/
}

.footer h4 {
  text-align: left;
  font-size: 1.4em;
  padding-bottom: 35px;
}

/*
.footer .logoWrapper{
  float: left;
  width: 40%;
  display: inline-block;
}

.footerLogo {
  width: 60%;
}*/

.footerList{
  list-style: none;
  width: 100%;
  height: 90px;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.footerList > li {
  display: inline-block;
  height: 100%;
  padding-right: 25px;
  padding-left: 25px;
}

.footerList a:link,
.footerList a:visited {
  font-family: 'Lato', sans-serif;
  color: white;
  text-transform: uppercase; 
  text-decoration: none;
  letter-spacing: 1.5px;
  font-size: 10px;
}



</style>
