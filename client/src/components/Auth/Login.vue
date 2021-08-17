<template>
  <div class="center">
    <base-card>
      <form @submit.prevent="handleFormSubmit">
        <h2>Login</h2>
        <div class="form-control">
          <label for="email">Email</label
          ><input type="text" id="email" v-model.trim="email" />
          <small>Must be valid email.</small>
        </div>
        <div class="form-control">
          <label for="password">Password</label
          ><input type="text" id="password" v-model.trim="password" />
          <small>Must be 6 characters long.</small>
        </div>
        <div class="form-control btn-group">
          <base-button mode="primary" link to="/register-user"
            >GO TO REGISTER</base-button
          >
          <base-button type="submit">LOGIN</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    handleFormSubmit() {
      //
    },
  },
  data() {
    return { email: "", password: "" };
  },
};
</script>

<style scoped>
.center {
  margin-top: 1.5rem;
}

form {
  padding: 1rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-control:last-child {
  margin-bottom: 0;
}

h2 {
  margin-bottom: 1rem;
}

.form-control input {
  width: 100%;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 3px;
}

.form-control input:focus {
  border: 1px solid black;
}

.btn-group {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

small {
  color: var(--primary-color);
  font-style: italic;
}

h2 {
  font-size: 2rem;
}
</style>
