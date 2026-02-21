<script setup>
import IconTablerTrash from '~icons/tabler/trash';
import configData from '~/assets/data/config.json';

// const CATEGORIES_KEY = 'vaultry-categories';

function loadCategories() {
  // try {
  //   const stored = localStorage.getItem(CATEGORIES_KEY);
  //   if (stored) return JSON.parse(stored);
  // }
  // catch { /* fall through */ }
  return [...configData.categories];
}

// function saveCategories(list) {
//   localStorage.setItem(CATEGORIES_KEY, JSON.stringify(list));
// }

const categories = ref(loadCategories());

const typeOptions = [
  { name: 'Income', value: 'income' },
  { name: 'Expense', value: 'expense' },
];

const iconOptions = [
  { name: 'Home', value: 'home' },
  { name: 'Shopping Cart', value: 'shopping-cart' },
  { name: 'Car', value: 'car' },
  { name: 'TV', value: 'device-tv' },
  { name: 'Bolt', value: 'bolt' },
  { name: 'Heart', value: 'heart' },
  { name: 'Basket', value: 'basket' },
  { name: 'Briefcase', value: 'briefcase' },
  { name: 'Code', value: 'code' },
  { name: 'Trending Up', value: 'trending-up' },
  { name: 'Wallet', value: 'wallet' },
  { name: 'Gift', value: 'gift' },
  { name: 'Pizza', value: 'pizza' },
  { name: 'Plane', value: 'plane' },
  { name: 'Book', value: 'book' },
];

const colorOptions = [
  '#3b82f6',
  '#22c55e',
  '#ef4444',
  '#f59e0b',
  '#a855f7',
  '#ec4899',
  '#6366f1',
  '#14b8a6',
  '#eab308',
  '#10b981',
  '#f97316',
  '#06b6d4',
  '#8b5cf6',
  '#64748b',
  '#dc2626',
];

const form = reactive({
  name: '',
  type: null,
  icon: null,
  color: '#3b82f6',
});

const nextId = computed(() => {
  return categories.value.reduce((max, c) => Math.max(max, c.id), 0) + 1;
});
const lastAdded = ref(null);
const copied = ref(false);

function copyLastAdded() {
  if (!lastAdded.value)
    return;
  navigator.clipboard.writeText(JSON.stringify(lastAdded.value, null, 2));
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
}

function addCategory() {
  if (!form.name || !form.type || !form.icon)
    return;

  const newCategory = {
    id: nextId.value,
    name: form.name,
    type: form.type,
    icon: form.icon,
    color: form.color,
  };

  categories.value.push(newCategory);
  saveCategories(categories.value);
  lastAdded.value = newCategory;

  form.name = '';
  form.type = null;
  form.icon = null;
  form.color = '#3b82f6';
}

function removeCategory(id) {
  categories.value = categories.value.filter(c => c.id !== id);
  saveCategories(categories.value);
}

const filterType = ref('all');

const filteredCategories = computed(() => {
  if (filterType.value === 'all')
    return categories.value;
  return categories.value.filter(c => c.type === filterType.value);
});
</script>

<template>
  <div class="flex gap-6">
    <!-- Left: Category List -->
    <div class="flex-1 min-w-0">
      <div class="card p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">
            Categories
          </h2>
          <div class="flex gap-1 rounded-lg border border-gray-200 dark:border-gray-600 p-0.5">
            <button
              v-for="opt in [{ label: 'All', value: 'all' }, { label: 'Income', value: 'income' }, { label: 'Expense', value: 'expense' }]"
              :key="opt.value"
              type="button"
              class="px-3 py-1 text-xs font-medium rounded-md transition-colors"
              :class="filterType === opt.value
                ? 'bg-primary-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'"
              @click="filterType = opt.value"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <div v-if="filteredCategories.length === 0" class="text-center py-8 text-gray-400 dark:text-gray-500">
          No categories found.
        </div>

        <ul class="space-y-2">
          <li
            v-for="cat in filteredCategories"
            :key="cat.id"
            class="flex items-center justify-between rounded-lg border border-gray-100 dark:border-gray-700 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div
                class="size-9 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                :style="{ backgroundColor: cat.color }"
              >
                {{ cat.name.charAt(0) }}
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {{ cat.name }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {{ cat.type }}
                </p>
              </div>
            </div>
            <button
              type="button"
              class="text-gray-400 hover:text-red-500 transition-colors p-1"
              @click="removeCategory(cat.id)"
            >
              <IconTablerTrash class="size-4" />
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right: Add Category Form -->
    <div class="w-80 shrink-0">
      <div class="card p-6">
        <h2 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">
          Add Category
        </h2>

        <form class="space-y-5" @submit.prevent="addCategory">
          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Name</label>
            <PInputText
              v-model="form.name"
              type="text"
              placeholder="Category name"
              class="w-full"
              size="small"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Type</label>
            <PSelect
              v-model="form.type"
              :options="typeOptions"
              option-label="name"
              option-value="value"
              placeholder="Select type"
              class="w-full"
              size="small"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Icon</label>
            <PSelect
              v-model="form.icon"
              :options="iconOptions"
              option-label="name"
              option-value="value"
              placeholder="Select icon"
              class="w-full"
              size="small"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Color</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="c in colorOptions"
                :key="c"
                type="button"
                class="size-8 rounded-lg border-2 transition-all"
                :class="form.color === c ? 'border-gray-900 dark:border-white scale-110' : 'border-transparent'"
                :style="{ backgroundColor: c }"
                @click="form.color = c"
              />
            </div>
          </div>

          <PButton
            type="submit"
            label="Add Category"
            class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-primary-600 hover:bg-primary-500 text-white transition-colors"
            :disabled="!form.name || !form.type || !form.icon"
          />
        </form>
      </div>

      <Transition name="fade">
        <div v-if="lastAdded" class="card p-4 mt-4">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Last Added
            </p>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs"
                @click="copyLastAdded"
              >
                {{ copied ? 'Copied!' : 'Copy' }}
              </button>
              <button
                type="button"
                class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xs"
                @click="lastAdded = null"
              >
                Dismiss
              </button>
            </div>
          </div>
          <pre class="text-xs bg-gray-50 dark:bg-gray-800 rounded-lg p-3 overflow-x-auto text-gray-700 dark:text-gray-300">{{ JSON.stringify(lastAdded, null, 2) }}</pre>
        </div>
      </Transition>
    </div>
  </div>
</template>
