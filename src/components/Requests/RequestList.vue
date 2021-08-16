<template>
  <li>
    <div class="title" :class="{ 'active-desc': isDescOpen }">
      <div>
        <h2 class="name">{{ name }}</h2>
        <a :href="emailLink" class="email">{{ email }}</a>
      </div>
      <button @click="setIsDescOpen">
        {{ !isDescOpen ? "&#8681;" : "&#8679;" }}
      </button>
    </div>
    <div class="desc" v-if="isDescOpen">
      <p class="msg">
        {{ message }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "RequestList",
  props: ["name", "email", "message"],
  data() {
    return { isDescOpen: false };
  },
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
  methods: {
    setIsDescOpen() {
      this.isDescOpen = !this.isDescOpen;
    },
  },
};
</script>

<style scoped>
li {
  margin-bottom: 1.5rem;
  background-color: rgba(250, 229, 159, 1);
  border-radius: 15px;
}

li:last-child {
  margin-bottom: 0;
}

.desc {
  padding: 1rem;
}

.title {
  background-color: var(--secondary-color);
  border-radius: 15px;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  height: 35px;
  width: 35px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: var(--dark-color);
  color: var(--success-color);

  cursor: pointer;

  transition: all 0.3s ease;
  box-shadow: 0 0 1rem 0 rgba(230, 236, 138, 0.75);
}

button:hover {
  background-color: var(--light-color);
  color: var(--dark-color);
}

.name {
  text-transform: uppercase;
  color: var(--danger-color);
}

.email {
  color: var(--success-color);
}

.email:hover {
  color: white;
}

.no-item {
  text-align: center;
  padding: 1rem 0;
  color: var(--primary-color);
}

.active-desc {
  border-radius: 15px 15px 0 0;
}
</style>
