<template>
  <div class="flex min-h-screen bg-white dark:bg-gray-900">
    <!-- Mobile overlay -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 z-30 bg-black/50 lg:hidden"
      @click="isSidebarOpen = false"
    ></div>

    <!-- Sidebar -->
    <aside
      class="fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 lg:static"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    >
      <div class="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-800">
        <GraduationCap class="w-8 h-8 mr-2 text-blue-600 dark:text-white" />
        <span class="text-xl font-bold dark:text-white">Ta'lim Portali</span>
      </div>

      <nav class="p-4 space-y-1">
        <!-- Home -->
        <router-link
          to="/"
          class="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="$route.path === '/' ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''"
        >
          <Home class="w-5 h-5 mr-3 dark:text-white" />
          <span class="dark:text-white">Bosh sahifa</span>
        </router-link>

        <!-- Practical -->
        <div class="w-full">
          <button
            class="flex items-center justify-between w-full px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            :class="$route.path.startsWith('/practical') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''"
            @click="isPracticalOpen = !isPracticalOpen"
          >
            <div class="flex items-center">
              <Book class="w-5 h-5 mr-3 dark:text-white" />
              <span class="dark:text-white">Amaliy mashg'ulotlar</span>
            </div>
            <ChevronDown :class="['w-4 h-4 transition-transform dark:text-white', isPracticalOpen ? 'rotate-180' : '']" />
          </button>
          <div v-show="isPracticalOpen" class="pl-10 mt-1 space-y-1">
            <router-link
              v-for="num in 8"
              :key="num"
              :to="`/practical/${num}`"
              class="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              :class="$route.path === `/practical/${num}` ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''"
            >
              <span class="dark:text-white">{{ num }}-amaliy mashg'ulot</span>
            </router-link>
          </div>
        </div>

        <!-- Lectures -->
        <div class="w-full">
          <button
            class="flex items-center justify-between w-full px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            :class="$route.path.startsWith('/lectures') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''"
            @click="isLectureOpen = !isLectureOpen"
          >
            <BookOpen class="w-5 h-5 dark:text-white" />
            <span class="dark:text-white">Maruzalar</span>
            <ChevronDown :class="['w-4 h-4 transition-transform dark:text-white', isLectureOpen ? 'rotate-180' : '']" />
          </button>
          <div v-show="isLectureOpen" class="pl-10 mt-1 space-y-1">
            <router-link
              v-for="num in 8"
              :key="num"
              :to="`/lectures/${num}`"
              class="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              :class="$route.path === `/lectures/${num}` ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''"
            >
              <span class="dark:text-white">{{ num }}-maruza</span>
            </router-link>
          </div>
        </div>

        <!-- Distance Learning -->
        <router-link
          to="/distance-learning"
          class="flex items-center px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="$route.path === '/distance-learning' ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''"
        >
          <Laptop class="w-5 h-5 mr-3 dark:text-white" />
          <span class="dark:text-white">Masofaviy Ta'lim</span>
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1">
      <button
        class="fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 lg:hidden"
        @click="isSidebarOpen = !isSidebarOpen"
      >
        <Menu v-if="!isSidebarOpen" class="h-5 w-5 dark:text-white" />
        <X v-else class="h-5 w-5 dark:text-white" />
      </button>

      <main class="p-6 pt-16 lg:pt-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import {
  Home,
  Book,
  BookOpen,
  Laptop,
  GraduationCap,
  ChevronDown,
  Menu,
  X
} from 'lucide-vue-next';

export default {
  components: {
    Home,
    Book,
    BookOpen,
    Laptop,
    GraduationCap,
    ChevronDown,
    Menu,
    X
  },
  data() {
    return {
      isSidebarOpen: false,
      isPracticalOpen: false,
      isLectureOpen: false
    };
  },
  watch: {
    '$route.path'(newPath) {
      this.isPracticalOpen = newPath.startsWith('/practical');
      this.isLectureOpen = newPath.startsWith('/lectures');
    }
  }
};
</script>

<style scoped>
/* Optional: Add any scoped styling here */
</style>