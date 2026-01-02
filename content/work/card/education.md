---
title: education
style: 'background: #ffffff;color:rgb(77, 77, 77);'
weight: 1
---

<style>
  .education-entry {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .education-text {
    flex: 1;
    text-align: left;
    min-width: 250px;
  }

  .education-logo {
    flex: 0 0 auto;
    text-align: center;
    margin-left: 1rem;
  }

  /* responsive stacking */
  @media (max-width: 700px) {
    .education-entry {
      flex-direction: column-reverse;
      text-align: center;
    }
    .education-text {
      text-align: center;
    }
    .education-logo {
      margin: 0 0 1rem 0;
    }
  }
</style>

<div class="education">

  <div class="education-entry">
    <div class="education-text">
      <strong>Katholieke Universiteit Leuven</strong><br>
      M.Sc. Computer Science<br>
      <em>September 2023 – July 2026, Leuven, Belgium</em>
    </div>
    <div class="education-logo">
      <img src="kul.png" alt="KU Leuven Logo" style="height: 50px; width: auto;">
    </div>
  </div>

  <div class="education-entry">
    <div class="education-text">
      <strong>Birla Institute of Technology and Science, Pilani</strong><br>
      B.E. (Hons.) Electrical and Electronics Engineering<br>
      <em>August 2018 – May 2022, Rajasthan, India</em>
    </div>
    <div class="education-logo">
      <img src="bits.png" alt="BITS Pilani Logo" style="height: 100px; width: auto;">
    </div>
  </div>

</div>

