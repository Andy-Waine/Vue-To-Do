<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You Have -- To-Do Items on Your List</h3>
    <div>
      <input placeholder="Add To-Do" type="text">
    </div>
    <div>
      <ul>
        <li>
          <span>Item One</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Item Two</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Item Three</span>
          <button>Delete</button>
        </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
}
</script>

<style>
  ::placeholder { /* Chromium, Firefox, Opera, Safari 10.1+ */
    color: #f52789;
    opacity: 1; /* Firefox */
    margin-left: px;
  }

  input {
    color:#f52789;
    background-color: transparent;
    border: 1px solid #f52789;
    border-radius: 5px;
    height: 30px;

  }


 ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
 }

 li {
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
 }

 li span {
  flex-grow: 1;
  border: 1px solid;
  border-radius: 5px;
 }

 li button {
  border-radius: 10px;
  margin-left: 10px;
  background-color: transparent;
  color: #f52789;
  border: 1px solid #f52789;
 }
</style>
