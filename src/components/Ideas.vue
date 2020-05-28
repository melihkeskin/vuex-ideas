<template>
  <div>
    <div>
      <h1>Ideas !</h1>
      <ul>
        <draggable class="ideas" v-model="allIdeas" group="ideas">
          <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea" />
        </draggable>
      </ul>
    </div>
    <div class="destination">
      <div>
        <h3>Courses</h3>
        <ul>
          <draggable class="ideas" v-model="allCourses" group="ideas">
            <Idea
              v-for="course in allCourses"
              :key="course.id"
              :item="course"
            />
          </draggable>
        </ul>
      </div>
      <div>
        <h3>Paper Work</h3>
        <ul>
          <draggable class="ideas" v-model="allPaperWorks" group="ideas">
            <Idea
              v-for="paperWork in allPaperWorks"
              :key="paperWork.id"
              :item="paperWork"
            />
          </draggable>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Idea from "@/components/Idea";

export default {
  components: {
    draggable,
    Idea,
  },
  computed: {
    allIdeas: {
      get() {
        return this.$store.getters.allIdeas;
      },
      set(value) {
        this.$store.dispatch("saveIdeasOrdering", value);
      },
    },
    allCourses: {
      get() {
        return this.$store.getters.allCourses;
      },
      set(value) {
        this.$store.dispatch("saveCoursesOrdering", value);
      },
    },
    allPaperWorks: {
      get() {
        return this.$store.getters.allPaperWorks;
      },
      set(value) {
        this.$store.dispatch("savePaperWorksOrdering", value);
      },
    },
  },
};
</script>

<style scoped>
.ideas {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 30vh;
}
.destination {
  display: flex;
  justify-content: space-evenly;
}
</style>
