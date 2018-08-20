<template>
  <div class="container">
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <h1 class="title">
      Contact Us!
    </h1>

    <form action="https://getsimpleform.com/messages?form_api_token=8a440de16160d2c0b6180438fadb71b5" method="post" class="contactForm">
      <input type='hidden' name='redirect_to' value='http://localhost:3000/contact/confirm' />

      <h5 class="form-label">Name:</h5>
      <input type='text' name='name' class="form-field" />
      <h5 class="form-label">Email:</h5>
      <input type='text' name='email' class="form-field" />
      <h5 class="form-label">Message:</h5>
      <textarea type="textarea" name="message" class="form-message"></textarea>
      <br>
      <button><input type='submit' class="form-button" />SUBMIT</button>
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

  .form-field,
  .form-message {
    min-width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #5D5652;
    border-radius: 4px;
  }

  .form-message{
    min-height: 5vw;
    height: 10vw;
    overflow: scroll;
  }

  form button {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    border-radius: 4px;
    border: 2px solid #5D5652;
    text-align: center;
    width: 100px;
    padding: 10px 20px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    outline: none;
    cursor: pointer;
  }

  form button:active{
    background-color: #5D5652;
    color: white;
  }


  .form-button {
    display: none;
  }

</style>
