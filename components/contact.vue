<template>
  <div class="container">
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <h1 class="title">
      Contact Us!
    </h1>

    <form action="https://getsimpleform.com/messages?form_api_token=8a440de16160d2c0b6180438fadb71b5" method="post" class="contactForm">
      <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
      <input type='hidden' name='redirect_to' value='http://contra-studios.com/contact/confirm' />
      <!-- all your input fields here.... -->
      <h5 class="form-label">Name:</h5>
      <input type='text' name='name' class="form-field" />
      <h5 class="form-label">Email:</h5>
      <input type='text' name='email' class="form-field" />
      <h5 class="form-label">Message:</h5>
      <textarea type="textarea" name="message" class="form-message"></textarea>
      <br>
      <input type='submit' value='Submit' class="form-button" />
    </form>


    <script src="/js/contact.js"></script>
  </div>
</template>



<style>

  .content, .title, .contactForm h5{
    font-family: 'butlerlight', serif;
  }

  .form-label {
    
  }

  .form-field {
    min-width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #5D5652;
    border-radius: 4px;
  }

  .form-message{
    min-width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #5D5652;
    border-radius: 4px;
    overflow: scroll;
  }

  .form-button {
    
  }

</style>
