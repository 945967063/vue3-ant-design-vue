<template>
  <a-watermark content="Li">
    <a-space direction="vertical" :size="12" class="!overflow-y-auto w-full">
      <h3 class="text-theme-color">控制表头显示</h3>
      <a-checkbox-group v-model:value="state.checkedList">
        <a-row>
          <a-col :key="item.key" v-for="item in columns" style="padding: 10px 0">
            <a-checkbox :value="item.key">{{ item.title }}</a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
      <a-table :dataSource="dataSource" :columns="filteredColumns" />
      <a-date-picker v-model:value="value1" />
      <a-date-picker v-model:value="value2" picker="week" />
      <a-date-picker v-model:value="value3" picker="month" />
      <a-date-picker v-model:value="value4" picker="quarter" />
      <a-date-picker v-model:value="value5" picker="year" />
      <a-button type="primary">Primary Button</a-button>
      <a-button type="default">Primary Button</a-button>
      <a-button type="dashed">Primary Button</a-button>
      <a-button type="primary" @click="configuration.toggleDarkMode()">
        {{ $t('index.yXBX3aMM') }}
      </a-button>
      <a-button type="link" @click="changeLocale('en')">
        {{ $t('index.iCYRA53h') }}
      </a-button>
      <a-button type="link" @click="changeLocale('cn')">
        {{ $t('index.XZJKdzXW') }}
      </a-button>
      <a-button type="link" @click="configuration.configuration.themeColor = getRandomColor()">
        {{ $t('index.sFZ5Att5') }}
      </a-button>
      <a-image
        :width="200"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <a-qrcode :value="text" />
      <a-input v-model:value="text" placeholder="-" :maxlength="60" />
      <a-spin />
      <a-skeleton active />
    </a-space>
  </a-watermark>
</template>
<script lang="ts" setup>
  import useLocale from '@/hooks/locale';
  import useStore from '@/store';
  import type { Dayjs } from 'dayjs';
  const { changeLocale } = useLocale();
  const { configuration } = useStore();

  const text = ref('https://www.antdv.com/');
  const value1 = ref<Dayjs>();
  const value2 = ref<Dayjs>();
  const value3 = ref<Dayjs>();
  const value4 = ref<Dayjs>();
  const value5 = ref<Dayjs>();

  //随机主题色
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    const app = document.getElementById('app');
    app?.style.setProperty('--theme-color', color);
    return color;
  };
  const state = reactive({
    checkedList: ['name', 'age', 'address'],
  });
  const columns = reactive([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      visible: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      visible: true,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      visible: true,
    },
  ]);
  const filteredColumns = computed(() => {
    return columns.filter((col) => state.checkedList.includes(col.key));
  });
  const dataSource = reactive([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]);
</script>
