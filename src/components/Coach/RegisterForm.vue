<template>
  <form @submit.prevent="handleFormSubmit">
    <div class="form-control">
      <label for="hourly-rate" :class="{ 'danger-text': errors.firstName }">
        {{ errors.firstName ? errors.firstName : "First Name" }}</label
      >
      <input
        :class="{ danger: errors.firstName }"
        type="text"
        id="first-name"
        name="first-name"
        v-model.trim="firstName"
        @blur="clearInputError('firstName')"
      />
    </div>
    <div class="form-control">
      <label for="hourly-rate" :class="{ 'danger-text': errors.lastName }">
        {{ errors.lastName ? errors.lastName : "Last Name" }}</label
      >
      <input
        :class="{ danger: errors.lastName }"
        type="text"
        id="last-name"
        name="last-name"
        v-model.trim="lastName"
        @blur="clearInputError('lastName')"
      />
    </div>
    <div class="form-control">
      <label for="hourly-rate" :class="{ 'danger-text': errors.description }">
        {{ errors.description ? errors.description : "Description" }}</label
      >
      <textarea
        :class="{ danger: errors.description }"
        id="description"
        rows="5"
        name="description"
        v-model.trim="description"
        @blur="clearInputError('description')"
      />
    </div>
    <div class="form-control">
      <label for="hourly-rate" :class="{ 'danger-text': errors.hourlyRate }">
        {{ errors.hourlyRate ? errors.hourlyRate : "Hourly Rate" }}</label
      >
      <input
        :class="{ danger: errors.hourlyRate }"
        type="number"
        id="hourly-rate"
        name="hourly-rate"
        v-model.number="hourlyRate"
        @blur="clearInputError('hourlyRate')"
      />
    </div>
    <div class="form-control">
      <label for="area" :class="{ 'danger-text': errors.areas }">
        {{ errors.areas ? errors.areas : "Area of experience" }}
      </label>
      <div class="check-group">
        <div class="form-control-check">
          <input
            type="checkbox"
            name="frontend"
            id="frontend"
            value="frontend"
            v-model="areas"
            @blur="clearInputError('areas')"
          />
          <label for="frontend">Frontend</label>
        </div>
        <div class="form-control-check">
          <input
            type="checkbox"
            name="backend"
            id="backend"
            value="backend"
            v-model="areas"
            @blur="clearInputError('areas')"
          />
          <label for="backend">Backend</label>
        </div>
        <div class="form-control-check">
          <input
            :class="{ danger: errors.areas }"
            type="checkbox"
            name="mobile"
            id="mobile"
            value="mobile"
            v-model="areas"
            @blur="clearInputError('areas')"
          />
          <label for="mobile">Mobile</label>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <base-button type="submit">SUBMIT</base-button>
      <div class="btn-group-child">
        <base-button mode="medium" link to="/login">GO TO LOGIN</base-button>
        <base-button mode="danger" @click="handleCancel">CANCEL</base-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      hourlyRate: null,
      areas: [],
      errors: {},
    };
  },
  methods: {
    clearInputError(input) {
      this.errors[input] = "";
    },
    handleCancel() {
      this.$router.push("/coaches");
    },
    handleFormSubmit() {
      this.errors = {};
      if (this.firstName === "") {
        this.errors.firstName = "First Name must not be empty.";
      }
      if (this.lastName === "") {
        this.errors.lastName = "Last Name must not be empty.";
      }
      if (this.description === "") {
        this.errors.description = "Description must not be empty.";
      }
      if (!this.hourlyRate || this.hourlyRate < 0) {
        this.errors.hourlyRate = "Rate must not be negative or empty.";
      }
      if (this.areas.length === 0) {
        this.errors.areas = "Atleast one area must be provided.";
      }

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      const newCoach = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        hourlyRate: this.hourlyRate,
        areas: this.areas,
      };

      this.$store.dispatch("coaches/addCoach", newCoach);
      this.$router.push("/coaches");
    },
  },
};
</script>

<style scoped>
form {
  width: 450px;
  padding: 0 1rem;
  border-radius: 5px;
  padding-bottom: 1rem;
}

.form-control {
  margin-bottom: 0.75rem;
}

label {
  color: var(--color-secondary);
}

input,
textarea {
  width: 100%;
  border: 1px solid lightgrey;
  overflow: hidden;
  outline: none;
  border-radius: 3px;
}

input:focus,
textarea:focus {
  border: 1px solid var(--dark-color);
}

.check-group {
  display: flex;
  gap: 2rem;
}

.form-control-check label {
  cursor: pointer;
  font-weight: normal;
}

.form-control-check input {
  display: inline-block;
  cursor: pointer;
}

.btn-group {
  display: flex;
  justify-content: space-between;
}

.danger {
  border-color: var(--danger-color);
}

.danger-text {
  color: var(--danger-color);
}

.btn-group-child {
  display: flex;
  gap: 1rem;
}
</style>
