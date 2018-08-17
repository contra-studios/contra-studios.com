<template>


  <nav role="navigation" class="top-nav">
    <ul class="menu">
      <a class="logoWrapper" href="/">
        <img class="siteLogo" src="../assets/images/logo.svg">
      </a>

      <li><a href="/work">Work</a></li>
      <li><a href="/process">Our Process</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a id="navContactButton" href="/contact">Get in Touch</a></li>
    </ul>
  </nav>
</template>

<style>
  
  .person-name:link,
  .person-name:visited {
    width: 40%;
    display: inline-block;
    font-size: 2vw;
    text-decoration: none;
    color: #373F49;
  }

  .top-nav {
    width: 100%;
    display: inline-block;
    text-align: right;
  }

  .menu .logoWrapper{
    float: left;
    width: 40%;
    display: inline-block;
  }

  .menu .siteLogo {
    width: 60%;
  }

  .menu {
    display: inline-block;
  }

  .menu li {
    display: inline-block;
    margin-left: 3em;
    font-size: .7em;
    text-transform: uppercase;
  }

  .menu a:link,
  .menu a:visited {
    color: #373F49;
    text-decoration: none;
  }

  #navContactButton {
    border: 1px solid;
    border-color: #BD8936;
    padding: 10px 20px;
    color: #BD8936;
    font-weight: bold;
    box-shadow: 10px 5px 20px #D7D9D3;
    font-size: 1em;
  }


</style>
