<script setup lang="ts">
import { toPage } from "@/pages/Products/utils";

const spuIds = [666, 888, 123456, 10086];

function toSpuDetail(pid: number) {
  toPage({
    path: "/products/detail/:pid",
    name: "ProductDetail",
    params: { pid: pid },
    meta: {
      title: `商品(${pid})详情`,
      dynamicLevel: 3
    }
  });
}

function toSpuEdit(pid: number) {
  toPage({
    path: "/products/edit/:pid",
    name: "ProductEdit",
    params: { pid },
    meta: {
      title: `商品(${pid})编辑`,
      dynamicLevel: 3
    }
  });
}
</script>

<template>
  <div class="page-container">
    <div class="title">ProductList</div>

    <div class="content space-y-4">
      <div class="qa p-4 bg-gray-400">
        <div>问题</div>

        <div>1.先跳转同一个商品的详情在跳转编辑，编辑会覆盖详情</div>
        <div>2.params、query 无法同时使用</div>
        <div>3.name 已经可以提确定唯一路由，此时 path 是否还有意义</div>
      </div>

      <div class="item">
        <div class="title">详情</div>

        <div class="actions space-x-4">
          <template v-for="id in spuIds" :key="id">
            <ElButton @click="toSpuDetail(id)">商品({{ id }})详情</ElButton>
          </template>
        </div>
      </div>

      <div class="item">
        <div class="title">编辑</div>

        <div class="actions space-x-4">
          <template v-for="id in spuIds" :key="id">
            <ElButton @click="toSpuEdit(id)">商品({{ id }})编辑</ElButton>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
