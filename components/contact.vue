<template>
  <div class="container">
    <h1 class="title">
      Contact
    </h1>
    <div class="content">
      <form name="contact" action="" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">     
          <label>Don’t fill this out: <input name="bot-field"></label>  <!-- Added to keep track if bots are sending messages -->
        </p>
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">
          Message:
        </label>
        <textarea class="form-field" name="message" id="message"></textarea><br>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>


<style>

  .content, .title {
    font-family: 'butlerlight', serif;
  }



  .form-label {
    width: 100%;
    float: left;
  }
  .form-field {
    min-width: 100%;
  }

  .form-button {
    
  }

  .hidden {
  display: none;
}
</style>
