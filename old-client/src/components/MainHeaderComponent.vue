<template>
  <div class="heading-box">
    <h1>QA Update</h1>
    <p>Center for Instructional Design and Innovation - USU</p>
    <p>Created and maintained by Emma Lynn (e.lynn@usu.edu)</p>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01" data-toggle="collapse" data-target=".navbar-collapse" >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link nav-button" href="/">Restart</a>
          </li>
          <li class="nav-item nav-button">
            <a class="nav-link" href="/add-new-term">Add a New Term</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-button"
               target="_blank"
               href="https://github.com/emmalynnnn/cidi-monday-QA-automation/blob/main/README.md">About</a>
          </li>
          <li class="nav-item nav-button">
            <a class="nav-link"
               target="_blank"
               href="https://github.com/emmalynnnn/cidi-monday-QA-automation/">Source</a>
          </li>
          <li class="nav-item nav-button">
            <a class="nav-link"
               :href="BUG_REPORT_URL"
               target="_blank">Bug Report</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <br>

</template>

<script>
import {BUG_REPORT_URL} from '@/assets/constants.js';
export default {
  data() {
    return {
      BUG_REPORT_URL: BUG_REPORT_URL,
    }
  }
}
</script>

