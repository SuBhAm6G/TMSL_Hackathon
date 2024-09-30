:root {
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f7f7f7;
    background-image: url("https://images.unsplash.com/photo-1430554420274-cdda916a34e4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
      
  }
  
  .container {

    margin: 30px auto;
    width: 350px;
    background-color: rgba(255, 255, 255, 0.406);
    box-shadow: var(--box-shadow);
    padding: 20px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
  }
  
  h1 {
    letter-spacing: 1px;
    margin: 0;
  }

  h2{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 34px;
    font-weight: bold;
  }
  
  h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
  }
  
 

  h4 {
    margin: 0;
    text-transform: uppercase;
  }

  h5 {
    font-size: 20px;
    margin: 0;
    text-transform: uppercase;
  }
  
  .inc-exp-container {
    background-color: #fff;
    box-shadow: var(--box--shadow);
    padding: 20px;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    border-radius: 10px;
    
  }
  
  .inc-exp-container > div {
    flex: 1;
    text-align: center;
  }
  
  .inc-exp-container > div:first-of-type {
    border-right: 1px solid #dedede;
  }
  
  .money {
    font-size: 2;
    letter-spacing: 1px;
    margin: 5px 0;
  }
  .money-plus {
    color: #2ecc71;
  }
  
  .money-minus {
    color: #c0392b;
  }
  
  label {
    display: inline-block;
    margin: 10px 0;
  }
  
  input[type="text"],
  input[type="number"] {
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
  
  .btn {
    cursor: pointer;
    background-color: #9c88ff;
    box-shadow: var(--box-shadow);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;
  }
  
  .btn:focus,
  .delete-btn:focus {
    outline: 0;
  }
  
  .list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;
  }
  
  .list li {
    background-color: #fff;
    box-shadow: var(--box--shadow);
    color: #333;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    margin: 10px 0;
  }
  
  .list li.plus {
    border-right: 5px solid #2ecc71;
  }
  
  .list li.minus {
    border-right: 5px solid #c0392b;
  }
  
  .delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .list li:hover .delete-btn {
    opacity: 1;
  }

  .reset-btn {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    margin-top: 20px;
  }
