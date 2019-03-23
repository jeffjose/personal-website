<template functional>
  <div>
    <div v-if="props.loggedIn">
      <img :src="props.profile.picture" />
      <div @click="props.logout">
        <p>Logout</p>
      </div>
    </div>

    <div @click="props.login">Login</div>
  </div>
</template>
