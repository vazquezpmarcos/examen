const renderForm = (
    <div class="container">
      <center>
      <form>
        <div class="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div class="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div class="button-container">
          <input type="submit" />
        </div>
      </form>
      </center>
    </div>
 );

 export default renderForm