<template>
  <!--<div class="hello">
    <h1>HOME</h1>
    <router-link to="/hi"> Hello </router-link>
    <p>Goodbye world!</p>
  </div>-->
 <div class="heading-box">
        <h1>Bug Reports</h1>
        <p>Center for Instructional Design and Innovation - USU</p>
        <p>Created and maintained by Emma Lynn (a02391851@usu.edu)</p>
        <a href="https://github.com/emmalynnnn/">[Source]</a>
    </div>

    <br>


    <div class="feature-box blue">
        <br>
        <h3>Report an Error</h3>
        <br>

        <form method="POST" action="/bug-report">
            <div class="form-group">
                <label for="app-name">Application</label>
                <select name="app-name" class="form-select">
                    <option value=""></option>
                    <option value="QA Update">QA Update</option>
                </select>

                <input name="check" class="visually-hidden" tabindex="-1" autocomplete="off">

                <br>
                <label for="date-time">Date and approximate time the error occurred</label>
                <input type="text" name="date-time" class="form-control">

                <br>
                <label for="expected-behavior">What did you expect to happen?</label>
                <input type="text" name="expected-behavior" class="form-control">

                <br>
                <label for="actual-behavior">What actually happened?</label>
                <input type="text" name="actual-behavior" class="form-control">

                <br>
                <label for="errors">Did you receive any error messages? When did they appear and what did they say?</label>
                <input type="text" name="errors" class="form-control">

                <br>
                <label for="browser">Web browser used</label>
                <input type="text" name="browser" class="form-control">

                <br>
                <label for="other-info">Any other relevant information</label>
                <input type="text" name="other-info" class="form-control">

                <br>
                <label for="name">Your name (Optional, include if you would like me to get back to you with an update)</label>
                <input type="text" name="name" class="form-control">

                <br>
                <label for="email">Your email (Optional, include if you would like me to get back to you with an update)</label>
                <input type="email" name="email" class="form-control">

                <br>
                <p>Thank you for your feedback.</p>

                <button type="submit" class="btn btn-light button">Submit</button>

                <p>Submission may take a moment- please wait...</p>
            </div>

        </form>

    </div>
</template>

<script>
export default {
  name: 'BugReportComponent',
}
</script>