import MyInput from './Input.vue';
// import type { Meta } from '@storybook/vue3';

const meta = {
  // title: 'Example/Input',
  component: MyInput,
  // tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  //   onClick: {},
  //   size: {
  //     control: {
  //       type: 'select',
  //     },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
};
export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  // components: { MyInput },
  args: {
    // primary: true,
    // label: 'Button',
  },
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
