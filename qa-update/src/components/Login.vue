<template>
  <!--<div class="hello">
    <h1>HOME</h1>
    <router-link to="/bye"> Goodbye </router-link>
    <p>Hello world!!</p>
    <button @click="confirmInput" style="height: 60px; width:120px; color: brown;">Leave</button>
  </div>-->
  <div class="heading-box">
        <h1>QA Update Automation</h1>
        <p>Center for Instructional Design and Innovation - USU</p>
        <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
        <a href="https://github.com/emmalynnnn/cidi-monday-QA-automation">[Source]</a>
    </div>

    <br>

    <div class="feature-box blue">
        <br>
        <h3>Please Enter Your Access Code:</h3>

        <form method="POST" action="/">

                <input name="check" class="visually-hidden" tabindex="-1" autocomplete="off">

                <br>
                <input type="text" name="code" class="form-control"><!--</input>-->
                <br>
                <button type="submit" class="btn btn-light button">Submit</button>

            <br>
        </form>
      <br>

        <!--{% if msg %}
            <p class="text-danger">{{ msg | safe }}</p>
        {% endif %}-->

    </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  methods:{
    /*confirmInput(){
      this.$router.push("/bye");
    }*/
  }
}
</script>
