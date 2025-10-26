import { useRoute, useRouter } from "vue-router";

// import { supabase } from '~/supabase/supabase.js';

// import { useAuthStore } from '~/auth/stores/auth.store';
// import { useCommonStore } from '~/common/stores/common.store.js';
// import { $date, $date_relative } from '~/common/utils/date.util';
// import { $toast, track_event } from '~/common/utils/common.utils';
// import { useI18nStore } from '~/common/stores/i18n.store';
// import { services } from '~/common/installers/services';

export function useCommonImports() {
  const route = useRoute();
  const router = useRouter();
  // const auth_store = useAuthStore();
  // const common_store = useCommonStore();
  // const i18n_store = useI18nStore();

  return {
    // auth_store,
    // common_store,
    route,
    router
    // supabase,
    // $track_event: track_event,
    // $t: i18n_store.$t,
    // $services: services,
    // $date,
    // $date_relative,
    // $toast,
  };
}
