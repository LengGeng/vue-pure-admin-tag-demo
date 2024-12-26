import type { LocationQueryRaw, RouteParamsRaw } from "vue-router";
import { isNullOrUnDef, isString } from "@pureadmin/utils";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import router from "@/router";

export type MultiTagsToPageRow = {
  path?: string;
  name: string;
  meta: {
    title: string;
    dynamicLevel: number;
  };
} & (
  | { query: LocationQueryRaw; params?: never }
  | { params: RouteParamsRaw; query?: never }
);

// 参照 src/views/tabs/hooks.ts toDetail
export function toPage(to: MultiTagsToPageRow) {
  const { name } = to;
  const { title, dynamicLevel = 3 } = to.meta;

  const mode = "params" in to ? "params" : "query";

  const parameter = to[mode] as Record<string, any>;

  if (isNullOrUnDef(parameter) || Object.keys(parameter).length === 0) {
    throw new Error(
      "useMultiTagsStore.toPage parameter is null or undefined or {}"
    );
  }

  // ⚠️ 这里要特别注意下，因为vue-router在解析路由参数的时候会自动转化成字符串类型，比如在使用useRoute().route.query或useRoute().route.params时，得到的参数都是字符串类型
  // 所以在传参的时候，如果参数是数字类型，就需要在此处 toString() 一下，保证传参跟路由参数类型一致都是字符串，这是必不可少的环节！！！
  Object.keys(parameter).forEach(param => {
    if (!isString(parameter[param])) {
      parameter[param] = parameter[param].toString();
    }
  });

  // 添加标签页
  useMultiTagsStoreHook().handleTags("push", {
    name,
    [mode]: parameter,
    meta: {
      title,
      dynamicLevel
    }
  });

  // 页面跳转
  return router.push({
    name,
    [mode]: parameter
  });
}
