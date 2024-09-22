<template>
  <section class="section text-center">
    <img
      src="../assets/avatar.webp"
      class="margin-bottom avatar"
      width="128"
      height="auto"
      alt=""
    />

    <h1 class="title-section">Raphaël Cerveaux</h1>

    <p>Hi, I'm a Software Engineer and Filmmaker from Reunion Island 🇷🇪 🇫🇷</p>

    <ul>
      <li>
        <RouterLink :to="{ name: 'articles' }">Write-ups</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'work' }">Softwares</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'fpv' }">Filmmaking</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'sponsors' }">Sponsoring</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul li {
  display: inline-block;
}

ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}

.avatar {
  border-radius: 50%;
}
</style>
