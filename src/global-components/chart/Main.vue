<template>
  <div
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <canvas ref="chartRef" :class="class"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, inject, watch } from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import { helper as $h } from "@/utils/helper";
import Chart from "chart.js/auto";

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "line",
    validator: (value) => {
      return ["line", "pie", "doughnut", "bar"].indexOf(value) !== -1;
    },
  },
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  width: {
    type: [Number, String],
    default: "auto",
  },
  height: {
    type: [Number, String],
    default: "auto",
  },
  refKey: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: "",
  },
});

const chartRef = ref();


const bindInstance = () => {
  if (props.refKey) {
    const bind = inject(`bind[${props.refKey}]`);
    if (bind) {
      bind(chartRef.value);
    }
  }
};

onMounted(() => {
  bindInstance();
  init();
});
</script>
