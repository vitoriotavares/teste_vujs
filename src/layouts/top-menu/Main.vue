<template>
  <div class="flex flex-col justify-between py-5 md:py-0 -mx-3 px-3 sm:-mx-8 sm:px-8 bg-black/[0.15]" style="height: 80vh;">
    <!-- BEGIN: Top Bar -->
    <div
      class="top-bar-boxed md:mt-0 -mx-3 sm:-mx-8 md:mx-0 px-4 sm:px-8 md:px-6 mb-14 md:mb-10 h-10"
    >
      <div class="h-full flex justify-center items-center">
        <!-- BEGIN: Logo -->
        <img
            alt="Detran Ceara - Header"
            class="md:h-28"
            src="@/assets/images/logo_header.svg"
          />
        <!-- END: Logo -->
      </div>
    </div>
    <!-- END: Top Bar -->
    <!-- BEGIN: Content -->
    <div class="mb-auto h-10 content content--top-nav" style='min-height: 100%; height: 100%'>
      <router-view />
    </div>
    <!-- END: Content -->
    <img
            alt="Detran Ceara - Header"
            class=""
            src="@/assets/images/base-ondas.svg"
            style="position: absolute;bottom: 0;width: 100%;height: auto;"
          />
  </div>
</template>

<script setup>
import { computed, onMounted, provide, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTopMenuStore } from "@/stores/top-menu";
import { helper as $h } from "@/utils/helper";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import { nestedMenu, linkTo } from "@/layouts/side-menu";
import dom from "@left4code/tw-starter/dist/js/dom";

const route = useRoute();
const router = useRouter();
const formattedMenu = ref([]);
const topMenuStore = useTopMenuStore();
const topMenu = computed(() => nestedMenu(topMenuStore.menu, route));

provide("forceActiveMenu", (pageName) => {
  route.forceActiveMenu = pageName;
  formattedMenu.value = $h.toRaw(topMenu.value);
});

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu;
    formattedMenu.value = $h.toRaw(topMenu.value);
  }
);

onMounted(() => {
  dom("body").removeClass("error-page").removeClass("login").addClass("main");
  formattedMenu.value = $h.toRaw(topMenu.value);
});
</script>
