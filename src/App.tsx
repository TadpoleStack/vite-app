import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import "vant/lib/index.css";
const App = defineComponent({
  name: "App",
  setup() {
    (window as any).router = useRouter();
    return () => <router-view class="router-view" />;
  },
});
export default App;
