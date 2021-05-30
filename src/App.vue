<template>
  <header>
    <div class="order">
      <button @click="handleClick('title')">Order by title</button>
      <button @click="handleClick('salary')">Order by salary</button>
      <button @click="handleClick('location')">Order by location</button>
    </div>
  </header>

  <JobList :jobs="jobs" :order="order" />
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import JobList from "./components/JobList.vue";
import { Job, OrderTerm } from "./types";
interface State {
  name: string;
  age: string | number;
}

export default defineComponent({
  name: "App",
  components: {
    JobList,
  },
  setup() {
    // Reactive way
    // const state: State = reactive({
    //   name: "Link",
    //   age: 25 as State["age"],
    // });
    // return { ...toRefs(state) };
    // ref
    // const name: Ref<State["name"]> = ref<State["name"]>("Link");
    // const age: Ref<State["age"]> = ref<State["age"]>(25);
    // return { name, age };

    const jobs: Ref<Job[]> = ref<Job[]>([
      {
        title: "Lena Harris",
        salary: 545454,
        location: "749 Cike Way",
        id: "1d07abec-0060-5b30-ba46-25db3d4433c2",
      },
      {
        title: "James Oliver",
        salary: 564645,
        location: "154 Tewe Street",
        id: "fbf1f579-e03b-5483-8c42-aae016774e62",
      },
      {
        title: "Nellie Lynch",
        salary: 54496874,
        location: "1126 Agaki Grove",
        id: "d69eb902-6312-5c52-8757-98d2b7ddca69",
      },
      {
        title: "Edith Townsend",
        salary: 8789797,
        location: "1573 Wuvja Path",
        id: "af6b686e-7410-5421-92c4-e56074f5d025",
      },
      {
        title: "Landon Chambers",
        salary: 541564,
        location: "1534 Tivoh Glen",
        id: "bd898037-a11f-50bc-a43b-cbd6460cb7fd",
      },
      {
        title: "Logan McDaniel",
        salary: 789798,
        location: "162 Jottor Square",
        id: "584af531-515f-5824-bad4-0d4ada6263a3",
      },
    ]);

    const order: Ref<OrderTerm> = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
});
</script>

<style>
header {
  text-align: center;
}

header .order {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #dff0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
